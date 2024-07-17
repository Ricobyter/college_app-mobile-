// src/screens/Login.js
import { View, Text, TextInput, Pressable, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/userSlice';
import Toast from 'react-native-toast-message';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const handleLogin = () => {
    if(!email || !password){
      Toast.show({
        type: 'error',
        text1: 'Login Error',
        text2: 'Please fill all the fields',
      });
      return;
    }
    dispatch(loginUser({ email, password }));
    if(error){
      Toast.show({
        type: 'error',
        text1: 'Login Error',
        text2: 'Invalid Credentials',
      });
      return;
    } else{
    
    navigation.navigate('MainPage')}
  };

  return (
    <View className="flex-1 justify-center items-center bg-white p-4">
      <Text className="text-3xl font-bold text-red mb-8">Login</Text>
      <TextInput
        value={email}
        placeholder="Email"
        placeholderTextColor="#ccc"
        className="w-full bg-white border-2 border-blue p-4 rounded-2xl mb-4"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        value={password}
        placeholder="Password"
        placeholderTextColor="#ccc"
        secureTextEntry
        className="w-full bg-white border-2 border-blue p-4 rounded-2xl mb-8"
        onChangeText={(pass) => setPassword(pass)}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Pressable onPress={handleLogin} className="bg-red w-full p-4 rounded-3xl items-center">
          <Text className="text-white text-lg">Login</Text>
        </Pressable>
      )}
  
      <Pressable onPress={() => navigation.navigate('ForgotPassword')} className="mt-4">
        <Text className="text-blue text-sm">Forgot Password</Text>
      </Pressable>
    </View>
  );
};

export default Login;
