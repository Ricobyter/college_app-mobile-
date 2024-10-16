import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import GetProfessors from './GetProfessors';
import GetStudents from './GetStudents';
import GetVF from './GetVF';
import Header from '../components/Header';

const GetPeople = () => {
  const [activeComponent, setActiveComponent] = useState('Professors');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Professors':
        return <GetProfessors />;
      case 'Students':
        return <GetStudents />;
      case 'VF':
        return <GetVF />;
      default:
        return <GetProfessors />;
    }
  };

  return (
    <>
    <Header/>
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            activeComponent === 'Professors' && styles.activeButton
          ]}
          onPress={() => setActiveComponent('Professors')}
        >
          <Text style={styles.buttonText}>Professors</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeComponent === 'Students' && styles.activeButton
          ]}
          onPress={() => setActiveComponent('Students')}
        >
          <Text style={styles.buttonText}>Students</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={[
            styles.button,
            activeComponent === 'VF' && styles.activeButton
          ]}
          onPress={() => setActiveComponent('VF')}
        >
          <Text style={styles.buttonText}>V. Faculties</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.componentContainer}>
        {renderComponent()}
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#e0f2f1', // Light teal background
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00796b', // Dark teal
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#004d40', // Darker teal when active
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  componentContainer: {
    flex: 1,
  },
});

export default GetPeople;
