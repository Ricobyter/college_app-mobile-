import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { updatePassword, signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FirebaseConfig'; 
import PageHeader from '../../components/PageHeader';
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
    <>
      <Header/>
      <View style={styles.container}>
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
        <Pressable
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handlePasswordChange}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? <ActivityIndicator color="#fff" /> : 'Update Password'}
          </Text>
        </Pressable>
        <Toast />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#e0f2f1',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#00796b',
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: '#004d40',
  },
  button: {
    backgroundColor: '#00796b',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonDisabled: {
    backgroundColor: '#004d40',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ChangePassword;
