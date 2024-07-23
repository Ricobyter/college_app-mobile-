import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingPage = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#00796b" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f2f1', // Background color matching the theme
  },
  text: {
    marginTop: 16,
    color: '#00796b', // Text color matching the theme
    fontSize: 16,
  },
});

export default LoadingPage;
