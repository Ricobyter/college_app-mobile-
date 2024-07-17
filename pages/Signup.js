import { View, Text, TextInput, Pressable, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import Toast from 'react-native-toast-message';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);
    setError('');
    setSuccess('');

    if(!email || !password || !username || !password2){
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Signup Error',
        text2: 'Please fill all the fields',
      });
      return;
    }

    if (password !== password2) {
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Signup Error',
        text2: 'Passwords do not match',
      });
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      const uid = userCredential.user.uid;

      // Save the username and additional fields in Firestore
      await setDoc(doc(FIREBASE_DB, 'users', uid), {
        username: username,
        email: email,
        createdAt: serverTimestamp(),
        educationQualifications: [],
        birthPlace: '',
        designation: 'Professor',
        photoURL: 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1721141254~exp=1721141854~hmac=16b7be7a26efb621a8073b1e8204f34be34595f0d723d5c8ae9279435c66a468' // Default profile image URL
      });

      // Clear the fields and show success message
      setUsername('');
      setEmail('');
      setPassword('');
      setSuccess('Signup successful! You can now log in.');

      Toast.show({
        type: 'success',
        text1: 'Signup Successful',
        text2: 'You can now log in.',
      });

    } catch (error) {
      setError(error.message);
      Toast.show({
        type: 'error',
        text1: 'Signup Error',
        text2: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white p-4">
      <Text className="text-3xl font-bold text-red mb-8">Signup</Text>
      <TextInput 
        placeholder="Username" 
        placeholderTextColor="#ccc"
        className="w-full bg-white border-2 border-blue p-4 rounded-2xl mb-4"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput 
        placeholder="Email" 
        placeholderTextColor="#ccc"
        className="w-full bg-white border-2 border-blue p-4 rounded-2xl mb-4"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize='none'
      />
      <TextInput 
        placeholder="Password" 
        placeholderTextColor="#ccc"
        secureTextEntry 
        className="w-full bg-white border-2 border-blue p-4 rounded-2xl mb-4"
        value={password}
        onChangeText={(pass) => setPassword(pass)}
      />
      <TextInput 
        placeholder="Confirm Password" 
        placeholderTextColor="#ccc"
        secureTextEntry 
        className="w-full bg-white border-2 border-blue p-4 rounded-2xl mb-4"
        value={password2}
        onChangeText={(pass) => setPassword2(pass)}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Pressable
          onPress={handleSignup}
          className="bg-red w-full p-4 rounded-3xl items-center"
        >
          <Text className="text-white text-lg">Signup</Text>
        </Pressable>
      )}
      <Pressable 
        onPress={() => navigation.navigate('Login')}
        className="mt-4"
      >
        {error ? <Text>{error}</Text>: null}
        <Text className="text-blue text-sm">Already have an account? Login</Text>
      </Pressable>
      <Toast />
    </View>
  );
}

export default Signup;
