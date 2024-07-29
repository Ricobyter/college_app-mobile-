import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { updatePassword, signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FirebaseConfig'; 
import Header from '../../components/Header';

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
    <View style={styles.container}>
      <Header />
      
      <View style={styles.content}>
        <TextInput
          placeholder="Current Password"
          secureTextEntry
          value={currentPassword}
          onChangeText={setCurrentPassword}
          style={styles.input}
        />
        <TextInput
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm New Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
        />
        <Pressable style={styles.button} onPress={handlePasswordChange}>
          <Text style={styles.buttonText}>
            {loading ? <ActivityIndicator color='#fff'/> : 'Update Password'}
          </Text>
        </Pressable>
        <Toast />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1', // Background color matching the theme
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#00796b', // Button color consistent with header
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChangePassword;
