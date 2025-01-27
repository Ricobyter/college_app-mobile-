import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from 'react-native';
import { FIREBASE_DB } from '../FirebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Header from '../components/Header';
import Toast from 'react-native-toast-message';


const AddAnnouncement = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    // Check if any input field is empty
    if (!title || !date || !description) {
      Toast.show({
        type: 'error',
        text1: 'Validation Error',
        text2: 'Please fill out all fields before submitting.',
      });
      return;
    }

    try {
      await addDoc(collection(FIREBASE_DB, 'announcements'), {
        title,
        date,
        description,
        createdAt: serverTimestamp()
      });
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Announcement added successfully!',
      });
      setTitle('');
      setDate('');
      setDescription('');
      navigation.navigate('AdminDashboard'); // Navigate back to the dashboard
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `Error adding announcement: ${error.message}`,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Add Announcement</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Date"
            value={date}
            onChangeText={setDate}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
          <Pressable style={styles.submitButton} onPress={handleSubmit}>
            <View style={styles.actionButtonContent}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1', // Light teal background
  },
  scrollContainer: {
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff', // White background
    paddingVertical: 10,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 26, // Matching Programs header text size
    fontWeight: 'bold',
    color: '#004d40',
  },
  formContainer: {
    backgroundColor: '#ffffff', // White background
    padding: 20,
    borderRadius: 10,
    elevation: 3, // Shadow effect
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 8,
    borderRadius: 5, // Rounded corners for the input fields
  },
  submitButton: {
    backgroundColor: '#00796b', // Dark teal
    padding: 15,
    borderRadius: 10,
    elevation: 3, // Shadow effect
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  actionButtonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default AddAnnouncement;