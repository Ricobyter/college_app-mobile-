import { View, Text, TextInput, Pressable } from 'react-native';
import React from 'react';

const Signup = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center bg-white p-4">
      <Text className="text-3xl font-bold text-red mb-8">Signup</Text>
      <TextInput 
        placeholder="Username" 
        placeholderTextColor="#ccc"
        className="w-full bg-white border-2 border-blue p-4 rounded-2xl mb-4"
      />
      <TextInput 
        placeholder="Email" 
        placeholderTextColor="#ccc"
        className="w-full bg-white border-2 border-blue p-4 rounded-2xl mb-4"
      />
      <TextInput 
        placeholder="Password" 
        placeholderTextColor="#ccc"
        secureTextEntry 
        className="w-full bg-white border-2 border-blue p-4 rounded-2xl mb-4"
      />
      <TextInput 
        placeholder="Confirm Password" 
        placeholderTextColor="#ccc"
        secureTextEntry 
        className="w-full bg-white border-2 border-blue p-4 rounded-2xl mb-8"
      />
      <Pressable 
        onPress={() => {}} 
        className="bg-red w-full p-4 rounded-3xl items-center"
      >
        <Text className="text-white text-lg">Signup</Text>
      </Pressable>
      <Pressable 
        onPress={() => navigation.navigate('Login')}
        className="mt-4"
      >
        <Text className="text-blue text-sm">Already have an account? Login</Text>
      </Pressable>
    </View>
  );
}

export default Signup;
