import { View, Text, TextInput, Pressable, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/userSlice';
import Toast from 'react-native-toast-message';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const handleLogin = () => {
    if(!email || !password){
      Toast.show({
        type: 'error',
        text1: 'Login Error',
        text2: 'Please fill all the fields',
      });
      return;
    }
    dispatch(loginUser({ email, password }));
    if(error){
      Toast.show({
        type: 'error',
        text1: 'Login Error',
        text2: 'Invalid Credentials',
      });
      return;
    } else{ 
      navigation.navigate('MainPage');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        value={email}
        placeholder="Email"
        placeholderTextColor="#ccc"
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        value={password}
        placeholder="Password"
        placeholderTextColor="#ccc"
        secureTextEntry
        style={styles.input}
        onChangeText={(pass) => setPassword(pass)}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#00796b" />
      ) : (
        <Pressable onPress={handleLogin} style={styles.loginButton} className = 'bg-red'>
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
      )}
      <Pressable onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotPasswordLink}>
        <Text style={styles.forgotPasswordLinkText}>Forgot Password?</Text>
      </Pressable>
    </View>
  );
};

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
  loginButton: {
     backgroundColor: '#00796b', // Button color matching the theme
    width: '100%',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordLink: {
    marginTop: 16,
  },
  forgotPasswordLinkText: {
    color: '#00796b', // Link color matching the theme
    fontSize: 14,
  },
});

export default Login;