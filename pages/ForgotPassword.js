import { View, Text, TextInput, Pressable } from 'react-native';
import React from 'react';

const ForgotPassword = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center bg-white p-4">
      <Text className="text-3xl font-bold text-red mb-8">Forgot Password</Text>
      <TextInput 
        placeholder="Enter your email" 
        placeholderTextColor="#ccc"
        className="w-full bg-white border-2 border-blue p-4 rounded-2xl mb-8"
      />
      <Pressable 
        onPress={() => {}} 
        className="bg-red w-full py-4 rounded-3xl items-center"
      >
        <Text className="text-white text-lg">Send email</Text>
      </Pressable>
      <Pressable 
        onPress={() => navigation.goBack()}
        className="mt-4"
      >
        <Text className="text-blue text-sm">Back to Login</Text>
      </Pressable>
    </View>
  )
}

export default ForgotPassword;
