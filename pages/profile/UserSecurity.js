import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';

const UserSecurity = () => {
  const navigation = useNavigation();

  const handleNavigateToChangePassword = () => {
    navigation.navigate('ChangePassword'); // Ensure 'ChangePassword' matches the route name in your navigator
  };

  return (
    <>
    <PageHeader name='Security' navigation={navigation}/>
    <View className="flex-1 p-4 bg-white">
      <TouchableOpacity 
        onPress={handleNavigateToChangePassword} 
        className="p-4 mb-2 border border-gray-300 rounded-lg bg-gray-100"
      >
        <Text className="text-lg font-medium text-gray-700">Change Password</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

export default UserSecurity;
