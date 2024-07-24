import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Info = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Information</Text>
      <Text style={styles.text}>
        This application is developed by IIITDM Jabalpur students.
      </Text>
      <Text style={styles.text}>
        All rights reserved by their team.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0f2f1',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#00796b',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default Info;
