import React, { useState } from 'react';
import { View, Text, TextInput, Button, Pressable, ActivityIndicator } from 'react-native';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { updatePassword, signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FirebaseConfig'; 
import PageHeader from '../../components/PageHeader';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Password Mismatch',
        text2: 'New password and confirm password do not match.',
      });
      return;
    }

    setLoading(true);

    try {
      const user = FIREBASE_AUTH.currentUser;
      if (user) {
        await updatePassword(user, newPassword);
        Toast.show({
            type: 'success',
            position: 'top',
            text1: 'Password Updated',
            text2: 'Your password has been updated successfully. Please log in again.',
          });

        await signOut(FIREBASE_AUTH); // Log out the user


        setLoading(false);
        navigation.navigate('PasswordChangeConfirmation'); // Navigate to LoginPage
      } else {
        throw new Error('No user is logged in.');
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Update Failed',
        text2: error.message,
      });
      setLoading(false);
    }
  };

  return (
    <>
    <PageHeader name='Change password' navigation={navigation}/>
    <View className="flex-1 justify-center p-4 bg-white">
      <TextInput
        placeholder="Current Password"
        secureTextEntry
        value={currentPassword}
        onChangeText={setCurrentPassword}
        className="border-b border-gray-400 mb-4 py-2 px-4"
      />
      <TextInput
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
        className="border-b border-gray-400 mb-4 py-2 px-4"
      />
      <TextInput
        placeholder="Confirm New Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        className="border-b border-gray-400 mb-4 py-2 px-4"
      />
      {/* <Button
        title={loading ? 'Updating...' : 'Update Password'}
        onPress={handlePasswordChange}
        disabled={loading}
      /> */}
      <Pressable className='py-3 w-full bg-red rounded-lg' onPress={handlePasswordChange}>
        <Text className="text-white font-medium text-center">{loading ? <ActivityIndicator color='#fff'/> : 'Update Password'}</Text>
      </Pressable>
      <Toast />
    </View>
    </>
  );
};

export default ChangePassword;