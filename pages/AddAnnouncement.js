import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { FIREBASE_DB } from '../FirebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Header from '../components/Header';
import Toast from 'react-native-toast-message';

const AddAnnouncement = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async () => {
    if (!title || !date || !description) {
      Toast.show({
        type: 'error',
        text1: 'Validation Error',
        text2: 'Please fill out all fields before submitting.',
      });
      return;
    }

    setLoading(true); // Start loading

    try {
      await addDoc(collection(FIREBASE_DB, 'announcements'), {
        title,
        date,
        description,
        createdAt: serverTimestamp(),
      });

      // Show success toast message
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Announcement added successfully!',
      });

      // Clear form fields
      setTitle('');
      setDate('');
      setDescription('');
      
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `Error adding announcement: ${error.message}`,
      });
    } finally {
      setLoading(false); // Stop loading after process completes
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
          <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle} />
          <TextInput style={styles.input} placeholder="Date" value={date} onChangeText={setDate} />
          <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />

          <Pressable style={styles.submitButton} onPress={handleSubmit} disabled={loading}>
            <View style={styles.actionButtonContent}>
              {loading ? (
                <ActivityIndicator size="small" color="#00796b" /> // Show loader when submitting
              ) : (
                <Text style={styles.submitButtonText}>Submit</Text>
              )}
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
    backgroundColor: '#e0f2f1',
  },
  scrollContainer: {
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#004d40',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 8,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#00796b',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  actionButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddAnnouncement;
