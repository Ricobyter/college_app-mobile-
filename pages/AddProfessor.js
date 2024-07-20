// src/pages/AddProfessor.js
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { addProfessor } from '../store/userSlice'; // Ensure you have this action in your slice

const AddProfessor = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [about, setAbout] = useState('');
  const [phone, setPhone] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const dispatch = useDispatch();

  const handleImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets) {
        const { uri } = response.assets[0];
        setProfilePic(uri);
      }
    });
  };

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    // Dispatch the action to add the professor
    dispatch(addProfessor({
      name,
      email,
      password,
      about,
      phone,
      profilePic,
    }));
    // Navigate back or to another page
    navigation.goBack();
  };

  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-4">Add Professor</Text>

      <Pressable onPress={handleImagePicker} className="mb-4">
        <View className="bg-gray-200 p-4 rounded-full justify-center items-center">
          {profilePic ? (
            <Image source={{ uri: profilePic }} style={{ width: 100, height: 100, borderRadius: 50 }} />
          ) : (
            <Icon name="user" size={100} color="#ccc" />
          )}
          <Text className="mt-2 text-gray-600">Select Profile Picture</Text>
        </View>
      </Pressable>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        className="border p-3 mb-4 rounded"
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        className="border p-3 mb-4 rounded"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="border p-3 mb-4 rounded"
      />

      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        className="border p-3 mb-4 rounded"
      />

      <TextInput
        placeholder="About"
        value={about}
        onChangeText={setAbout}
        multiline
        className="border p-3 mb-4 rounded h-32"
      />

      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        className="border p-3 mb-4 rounded"
      />

      <Pressable
        onPress={handleSubmit}
        className="bg-blue-500 p-4 rounded-lg shadow-md"
      >
        <Text className="text-white text-center text-lg">Add Professor</Text>
      </Pressable>
    </View>
  );
};

export default AddProfessor;
