import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';

const Gallery = () => {
  const [expanded, setExpanded] = useState(null);

  const sections = {
    'M.Tech Lab': [
      require('../assets/images/a1-1.jpg'),
      // Add more images here
    ],
    'Tinkering Lab': [
      require('../assets/images/a2.jpg'),
      // Add more images here
    ],
    'Server Room': [
      require('../assets/images/a3.jpg'),
      // Add more images here
    ],
    'Image & Computer Vision Lab': [
      require('../assets/images/a4.jpg'),
      // Add more images here
    ],
    'IT Lab': [
      require('../assets/images/a5.jpg'),
      // Add more images here
    ],
    'Research Lab': [
      require('../assets/images/a6.jpg'),
      // Add more images here
    ],
  };

  const handlePress = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  return (
    <>
    <Header />
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Gallery</Text>
      </View>

      {Object.keys(sections).map((section) => (
        <View key={section} style={styles.dropdownSection}>
          <TouchableOpacity onPress={() => handlePress(section)} style={styles.dropdownHeader}>
            <Text style={styles.dropdownTitle}>{section}</Text>
            <Icon name={expanded === section ? 'chevron-up' : 'chevron-down'} size={20} color="#004d40" />
          </TouchableOpacity>
          {expanded === section && (
            <View style={styles.dropdownContent}>
              {sections[section].map((image, index) => (
                <Image key={index} source={image} style={styles.image} />
              ))}
            </View>
          )}
        </View>
     ) )}
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#e0f2f1', // Background color matching the theme
  },
  headerContainer: {
    marginBottom: 20,
    backgroundColor: '#00796b', // Header background color
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  dropdownSection: {
    marginBottom: 20,
    backgroundColor: '#ffffff', // Dropdown section background
    borderRadius: 8,
    elevation: 3, // Shadow effect for Android
    padding: 16,
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffffff', // Matching dropdown header background
    borderRadius: 5,
  },
  dropdownTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004d40',
  },
  dropdownContent: {
    paddingVertical: 10,
    backgroundColor: '#ffffff', // Matching dropdown content background
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'cover', // Adjusts how the image fits the container
  },
});

export default Gallery;
