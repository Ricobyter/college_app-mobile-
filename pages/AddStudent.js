import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { sendWelcomeEmail } from '../store/emailSlice';
import Toast from 'react-native-toast-message';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig'; // Make sure to configure Firebase properly
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import Header from '../components/Header';
import { Picker } from '@react-native-picker/picker';
import { fetchSignInMethodsForEmail } from 'firebase/auth'

const AddStudent = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rollNo, setRollNo] = useState(''); // New roll number state
  const [about, setAbout] = useState('');
  const [phone, setPhone] = useState('');
  const [degree, setDegree] = useState(''); 
  const[sH, setSH] = useState(false)

  const dispatch = useDispatch();
  const { isSending, isSent, isNotSent, message } = useSelector((state) => state.email);
  const { loading, isLoading } = useSelector((state) => state.user);

  const generateRandomPassword = () => {
    const length = 8;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let generatedPassword = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
      generatedPassword += charset.charAt(Math.floor(Math.random() * n));
    }
    return generatedPassword;
  };

  useEffect(() => {
    const generatedPassword = generateRandomPassword();
    setPassword(generatedPassword);
    setConfirmPassword(generatedPassword); 
  }, []);


  const handleSubmit = async () => {
    setSH(true)
    if (!name || !email || !password || !confirmPassword || !degree) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Error',
        text2: 'Please fill all the fields!',
      });
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    let photoURL = 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1721141254~exp=1721141854~hmac=16b7be7a26efb621a8073b1e8204f34be34595f0d723d5c8ae9279435c66a468';

    try {
      // Check if user already exists
      const signInMethods = await fetchSignInMethodsForEmail(FIREBASE_AUTH, email);
      if (signInMethods.length > 0) {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Error',
          text2: 'User already exists!',
        });
        return; // Exit if user already exists
      }

      // Create the user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      const user = userCredential.user;

      const userData = {
        bio: '',
        phone: phone || '',
        designation: 'Student',
        email: email,
        username: name,
        photoURL: photoURL,
        rollNo: rollNo, 
        degree: degree, 
        createdAt: serverTimestamp(),
      };

      await setDoc(doc(FIREBASE_DB, 'users', user.uid), userData);

      await dispatch(sendWelcomeEmail({ name, email, password, role: "Student" })).unwrap();
      if (isSent) {
        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: 'Success',
          text2: 'Student added successfully!',
        });
      }

      if (isNotSent) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error',
          text2: 'Failed to add student. Please try again',
        });
      }

      // Clear form fields
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setDegree('');
      setPhone('');
      setRollNo('')
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Error',
          text2: 'User with this email already exists!',
        });
      } else {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Error',
          text2: 'Failed to add professor. Please try again.',
        });
      }
    }
    setSH(false)
  };

  return (
    <>   
    <Header/>
     <View style={styles.container}>
      <Text className ='mb-16 text-3xl text-[#00796b] font-bold'>Add Student</Text>
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
        placeholder="Roll Number"  // Add Roll Number input
        value={rollNo}
        onChangeText={setRollNo}
        style={styles.input}
      />
       <Picker
        selectedValue={degree}
        onValueChange={(itemValue, itemIndex) => setDegree(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="B.Tech" value="B.Tech" />
        <Picker.Item label="M.Tech" value="M.Tech" />
        <Picker.Item label="PhD" value="PhD" />
      </Picker>


      {/* <TextInput
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
      /> */}
{/* 
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
      /> */}

      {sH ? (
        <ActivityIndicator size="large" color="#00796b" style={styles.activityIndicator} />
      ) : (
        <Pressable onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Add Student</Text>
        </Pressable>
      )}

      <Toast />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#e0f2f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: '#00796b',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff',
     width: '100%'
  },
  picker: {
    borderColor: '#00796b',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '100%',
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
    width: '100%'
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
    marginVertical: 20,
  },
});

export default AddStudent;
