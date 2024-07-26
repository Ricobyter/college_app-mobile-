import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FIREBASE_DB } from '../FirebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const AddAnnouncement = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    try {
      await addDoc(collection(FIREBASE_DB, 'announcements'), {
        title,
        date,
        description,
        createdAt: serverTimestamp()
      });
      alert('Announcement added successfully!');
      setTitle('');
      setDate('');
      setDescription('');
      navigation.navigate('AdminDashboard'); // Navigate back to the dashboard
    } catch (error) {
      alert('Error adding announcement: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Announcement</Text>
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
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0f2f1',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 8,
  },
});

export default AddAnnouncement;