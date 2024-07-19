import { View, Text, Pressable } from 'react-native'
import React from 'react'

const PasswordChangeConfirmation = ({navigation}) => {
  return (
    <View className='flex h-screen items-center justify-center'>
      <Text className='text-green-400 text-2xl'>Your password was changed succesfully </Text>
      <Pressable className=' text-center py-2 px-1 bg-red text-white rounded-md' onPress={()=> navigation.navigate('Login')}>
        <Text className='text-white'>Back to Profile</Text>
      </Pressable>
    </View>
  )
}

export default PasswordChangeConfirmation