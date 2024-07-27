import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { FIREBASE_DB } from '../../FirebaseConfig'; // Adjust the path as necessary

const AddDegree = ({ navigation }) => {
  const { uid } = useSelector((state) => state.user);
  const [degreeName, setDegreeName] = useState('');
  const [institution, setInstitution] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');

  const handleAddDegree = async () => {
    // Validate inputs
    if (degreeName && institution && startYear && endYear) {
      try {
        // Convert years to Firestore Timestamp (assuming January 1st and December 31st for simplicity)
        const start = new Date(`${startYear}-01-01`);
        const end = new Date(`${endYear}-12-31`);
        
        const degree = {
          degreeName,
          institution,
          startYear: Timestamp.fromDate(start),
          endYear: Timestamp.fromDate(end),
          userId: uid,
          createdAt: Timestamp.now()
        };

        // Add the degree to Firestore
        await addDoc(collection(FIREBASE_DB, 'degrees'), degree);

        // Success feedback and navigation
        Alert.alert('Success', 'Degree added successfully');
        setDegreeName('');
        setInstitution('');
        setStartYear('');
        setEndYear('');
        navigation.navigate('ShowDegrees'); // Navigate to the degrees list or relevant screen
      } catch (error) {
        // Error feedback
        Alert.alert('Error', 'Error adding degree: ' + error.message);
      }
    } else {
      // Validation error feedback
      Alert.alert('Error', 'Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Degree Name</Text>
      <TextInput
        style={styles.input}
        value={degreeName}
        onChangeText={setDegreeName}
      />

      <Text style={styles.label}>Institution</Text>
      <TextInput
        style={styles.input}
        value={institution}
        onChangeText={setInstitution}
      />

      <Text style={styles.label}>Start Year</Text>
      <TextInput
        style={styles.input}
        value={startYear}
        onChangeText={setStartYear}
        keyboardType="numeric"
        placeholder="YYYY"
      />

      <Text style={styles.label}>End Year</Text>
      <TextInput
        style={styles.input}
        value={endYear}
        onChangeText={setEndYear}
        keyboardType="numeric"
        placeholder="YYYY"
      />

      <Button title="Add Degree" onPress={handleAddDegree} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0f2f1',
  },
  label: {
    fontSize: 16,
    color: '#004d40',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#004d40',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default AddDegree;
