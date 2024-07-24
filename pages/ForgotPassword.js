import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { sendResetEmail } from '../store/userSlice';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.user);

  const handleSendEmail = async () => {
    try {
      await dispatch(sendResetEmail(email)).unwrap();
      Alert.alert('Success', 'Password reset email sent successfully');
    } catch (err) {
      console.error('Error sending password reset email:', err);
      Alert.alert('Error', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput 
        placeholder="Enter your email" 
        placeholderTextColor="#ccc"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#00796b" style={styles.activityIndicator} />
      ) : (
        <Pressable 
          onPress={handleSendEmail} 
          style={styles.sendEmailButton}
        >
          <Text style={styles.sendEmailButtonText}>Send Email</Text>
        </Pressable>
      )}
      <Pressable 
        onPress={() => navigation.goBack()}
        style={styles.backToLoginLink}
      >
        <Text style={styles.backToLoginLinkText}>Back to Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f2f1',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderColor: '#00796b',
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  sendEmailButton: {
    backgroundColor: '#00796b',
    width: '100%',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  sendEmailButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backToLoginLink: {
    marginTop: 16,
  },
  backToLoginLinkText: {
    color: '#00796b',
    fontSize: 14,
  },
  activityIndicator: {
    marginVertical: 20,
  },
});

export default ForgotPassword;
