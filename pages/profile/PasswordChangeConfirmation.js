import { View, Text, Pressable } from 'react-native'
import React from 'react'

const PasswordChangeConfirmation = ({navigation}) => {
  return (
    <View className='flex h-screen items-center justify-center bg-[#E5F9E5]'>
      <Text className='text-green-400 text-2xl mb-4'>Your password was changed successfully</Text>
      <Pressable className='py-2 px-6 bg-green-500 text-white rounded-md' onPress={() => navigation.navigate('Profile')}>
        <Text className='text-white text-center'>Back to Login</Text>
      </Pressable>
    </View>
  )
}

export default PasswordChangeConfirmation;
