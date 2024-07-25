import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';

const Info = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>App Information</Text>
          <Text style={styles.text}>
            This application is developed by IIITDM Jabalpur.
          </Text>
          <Text style={styles.text}>
            All rights reserved © {new Date().getFullYear()} IIITDM Jabalpur.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
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
