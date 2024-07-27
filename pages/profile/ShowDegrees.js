import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { fetchUserDegrees } from '../../store/userSlice'; // Adjust the path as necessary
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icon library
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const ShowDegrees = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Initialize useNavigation hook
  const { uid, degrees, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (uid) {
      dispatch(fetchUserDegrees(uid));
    }
  }, [dispatch, uid]);

  if (loading) {
    return (
      <View style={styles.centeredView}>
        <ActivityIndicator size="large" color="#004d40" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centeredView}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddDegree')} // Navigate to AddDegree screen
      >
        <Icon name="add" size={24} color="#004d40" />
        <Text style={styles.addButtonText}>Add Degree</Text>
      </TouchableOpacity>

      <ScrollView>
        {degrees && degrees.length > 0 ? (
          degrees.map((degree) => (
            <View key={degree.id} style={styles.degreeCard}>
              <Text style={styles.degreeName}>{degree.degreeName}</Text>
              <Text style={styles.institution}>{degree.institution}</Text>
              <Text style={styles.year}>{degree.startYear} - {degree.endYear}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noDegreesText}>No degrees found</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0f2f1',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    elevation: 2,
    marginBottom: 15,
  },
  addButtonText: {
    fontSize: 16,
    color: '#004d40',
    marginLeft: 10,
  },
  degreeCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  degreeName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004d40',
  },
  institution: {
    fontSize: 16,
    color: '#004d40',
  },
  year: {
    fontSize: 16,
    color: '#004d40',
  },
  noDegreesText: {
    fontSize: 16,
    color: '#004d40',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f2f1',
  },
  errorText: {
    fontSize: 18,
    color: '#004d40',
  },
});

export default ShowDegrees;


