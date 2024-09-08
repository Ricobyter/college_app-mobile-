import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { sendWelcomeEmail } from '../store/emailSlice';
import Toast from 'react-native-toast-message';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

const AddVF = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [about, setAbout] = useState('');
  const [phone, setPhone] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const dispatch = useDispatch();
  const { isSending, isSent, isNotSent, message } = useSelector((state) => state.email);
  const { loading, isLoading } = useSelector((state) => state.user);

  const handleSubmit = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Error',
        text2: 'Please fill all the marked fields!',
      });
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    let photoURL = 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1721141254~exp=1721141854~hmac=16b7be7a26efb621a8073b1e8204f34be34595f0d723d5c8ae9279435c66a468';

    try {
      const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      const user = userCredential.user;

      const userData = {
        bio: about,
        phone: phone,
        designation: 'V. Faculty',
        email: email,
        username: name,
        photoURL: photoURL,
        educationQualifications: [],
        createdAt: serverTimestamp(),
      };

      await setDoc(doc(FIREBASE_DB, 'users', user.uid), userData);

      await dispatch(sendWelcomeEmail({ name, email, password, role: "Visiting Faculty" })).unwrap();

      if (isSent) {
        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: 'Success',
          text2: 'User added successfully!',
        });
      }

      if (isNotSent) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error',
          text2: 'Failed to add user. Please try again',
        });
      }

      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setAbout('');
      setPhone('');
    } catch (err) {
      console.error('Error:', err);
      Alert.alert('Error', message || 'Failed to add professor. Please try again.');
    }
  };

  return (

    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text className='mb-16 text-3xl text-[#00796b] font-bold'>Add Visiting Faculty</Text>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          style={styles.input}
        />

        <TextInput
          placeholder="About"
          value={about}
          onChangeText={setAbout}
          multiline
          style={styles.textArea}
        />

        <TextInput
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          style={styles.input}
        />

        {(isSending || loading || isLoading) ? (
          <ActivityIndicator size="large" color="#00796b" style={styles.activityIndicator} />
        ) : (
          <Pressable onPress={handleSubmit} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Add Faculty</Text>
          </Pressable>
        )}

        <Toast />
      </View>
    </ScrollView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1',
    padding: 20,
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  input: {
    borderColor: '#00796b',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
  textArea: {
    borderColor: '#00796b',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    height: 100,
    backgroundColor: '#ffffff',
  },
  submitButton: {
    backgroundColor: '#00796b',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  activityIndicator: {
    marginTop: 20,
  },
});

export default AddVF;
