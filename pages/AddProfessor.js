import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
// import { sendWelcomeEmail } from '../email/sendEmail';
import { sendEmail, sendWelcomeEmail } from '../store/emailSlice';
import { useDispatch, useSelector } from 'react-redux';


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
    // Request permission to access media library
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
      const emailData ={
        name, email, password
      }
      await dispatch(sendWelcomeEmail({ name, email, password })).unwrap();

    } catch (err) {
      console.error('Error sending email:', err);
      Alert.alert('Error sending email',emailState.error);
    }
  };

  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-4">Add Professor</Text>

      <Pressable onPress={handleImagePicker} className="mb-4">
        <View className=" justify-center items-center">
          {profilePic ? (
            <Image source={{ uri: profilePic }} style={{ width: 150, height: 150, borderRadius: 150 }} />
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
        className="bg-blue p-4 rounded-lg shadow-md"
      >
        <Text className="text-white text-center text-lg">Add Professor</Text>
      </Pressable>
    </View>
  );
};

export default AddProfessor;
