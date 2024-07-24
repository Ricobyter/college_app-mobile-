import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput 
        placeholder="Enter your email" 
        placeholderTextColor="#ccc"
        style={styles.input}
      />
      <Pressable 
        onPress={() => {}} 
        style={styles.sendEmailButton}
      >
        <Text style={styles.sendEmailButtonText}>Send email</Text>
      </Pressable>
      <Pressable 
        onPress={() => navigation.goBack()}
        style={styles.backToLoginLink}
      >
        <Text style={styles.backToLoginLinkText}>Back to Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f2f1', // Background color matching the theme
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b', // Title color matching the theme
    marginBottom: 16,
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderColor: '#00796b', // Border color matching the theme
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  sendEmailButton: {
    backgroundColor: '#00796b', // Button color matching the theme
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
    color: '#00796b', // Link color matching the theme
    fontSize: 14,
  },
});

export default ForgotPassword;
