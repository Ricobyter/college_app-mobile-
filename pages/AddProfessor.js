import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { sendWelcomeEmail } from '../store/emailSlice';
import Toast from 'react-native-toast-message';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig'; // Make sure to configure Firebase properly
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { fetchSignInMethodsForEmail } from 'firebase/auth'
import { Picker } from '@react-native-picker/picker';


const AddProfessor = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [designation, setDesignation] = useState('Professor');
  const [degree, setDegree] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState('');
  const [about, setAbout] = useState('');
  const [phone, setPhone] = useState('');
  const [profilePic, setProfilePic] = useState(null);
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
      if (!name || !email ) {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Error',
          text2: 'Please fill all the marked fields!',
        });
        return;
      }
    
      let photoURL = 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1721141254~exp=1721141854~hmac=16b7be7a26efb621a8073b1e8204f34be34595f0d723d5c8ae9279435c66a468';
    
      try {
        // Check if the user already exists
        const signInMethods = await fetchSignInMethodsForEmail(FIREBASE_AUTH, email);
    
        if (signInMethods.length > 0) {
          Alert.alert('Error', message || 'User alreaDY EXISTS. Please try again.');
          console.log('USER EXISTS')
          return; // Exit the function early
        }
    
        const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
        const user = userCredential.user;
    
        const userData = {
          bio: '',
          phone: '',
          designation: designation,
          email: email,
          username: name,
          photoURL: photoURL,
          educationQualifications: [],
          createdAt: serverTimestamp(),
        };
    
        // Add user's Firestore document
        await setDoc(doc(FIREBASE_DB, 'users', user.uid), userData);
    
        await dispatch(sendWelcomeEmail({ name, email, password, role: designation })).unwrap();
    
        if (isSent) {
          Toast.show({
            type: 'success',
            position: 'bottom',
            text1: 'Success',
            text2: 'Professor added successfully!',
          });
        }
    
        if (isNotSent) {
          Toast.show({
            type: 'error',
            position: 'bottom',
            text1: 'Error',
            text2: 'Failed to add professor. Please try again',
          });
        }
    
        // Clear form fields
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setAbout('');
        setPhone('');
    
        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: 'Success',
          text2: 'Professor added successfully!',
        });
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
    <View style={styles.container}>
            <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Admin Dashboard</Text>
      </View>
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


<View style={styles.pickerContainer}>
        <Picker
          selectedValue={designation}
          onValueChange={(itemValue, itemIndex) => setDesignation(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Professor" value="Professor" />
          <Picker.Item label="Assistant Professor" value="Assistant Professor" />
          <Picker.Item label="Visiting Faculty" value="Visiting Faculty" />
        </Picker>
      </View>

      {sH ? (
        <ActivityIndicator size="large" color="#00796b" style={styles.activityIndicator} />
      ) : (
        <Pressable onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Add Professor</Text>
        </Pressable>
      )}

      <Toast />
    </View>
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
  headerContainer: {
    marginBottom: 80,
    backgroundColor: '#00796b', // Header background color matching Gallery
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%'
  },
  headerText: {
    fontSize: 24, // Same as in Gallery
    fontWeight: 'bold',
    color: '#fff',
  },
  pickerContainer: {
    borderColor: '#00796b',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    marginBottom: 15,
    width: '100%',
  },
  picker: {
    height: 50,
    width: '100%',
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

export default AddProfessor;
