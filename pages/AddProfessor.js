import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Use MaterialIcons for consistency
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { sendWelcomeEmail } from '../store/emailSlice';

const AddProfessor = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [about, setAbout] = useState('');
  const [phone, setPhone] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const dispatch = useDispatch();
  const emailState = useSelector((state) => state.email);

  const handleImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access media library is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const { uri } = result.assets[0];
      setProfilePic(uri);
    }
  };

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    try {
      await dispatch(sendWelcomeEmail({ name, email, password })).unwrap();
    } catch (err) {
      console.error('Error sending email:', err);
      Alert.alert('Error sending email', emailState.error);
    }
  };

  return (
    <View style={styles.container}>
      

      <Pressable onPress={handleImagePicker} style={styles.imagePicker}>
        <View style={styles.imageContainer}>
          {profilePic ? (
            <Image source={{ uri: profilePic }} style={styles.profileImage} />
          ) : (
            <Icon name="account-circle" size={100} color="#004d40" />
          )}
          <Text style={styles.imageText}>Select Profile Picture</Text>
        </View>
      </Pressable>

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

      <Pressable
        onPress={handleSubmit}
        style={styles.submitButton}
      >
        <Text style={styles.submitButtonText}>Add Professor</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50, // Increased paddingTop for additional space at the top
    backgroundColor: '#e0f2f1', // Matching background color from Gallery page
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b', // Matching color from Gallery page header
    marginBottom: 20,
    marginTop: 10, // Add top margin for additional spacing
  },
  imagePicker: {
    marginBottom: 20,
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  imageText: {
    marginTop: 10,
    color: '#004d40', // Matching text color
  },
  input: {
    borderColor: '#00796b', // Matching border color
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff', // White background for input fields
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
    backgroundColor: '#00796b', // Matching button color
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddProfessor;
