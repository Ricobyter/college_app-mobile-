import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure to install this package for icons
import Header from '../components/Header';

const Facilities = () => {
  const [expanded, setExpanded] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All Facilities');

  const categories = ['All Facilities', 'Computer Labs', 'Research Labs', 'Specialized Labs'];
  const facilities = {
    'All Facilities': [
      {
        title: 'High Performance Computing Lab',
        description: 'State-of-the-art lab equipped with advanced computing systems for intensive data processing.',
      },
      {
        title: 'Fundamentals of Computing Lab',
        description: 'Basic computing environment for learning programming fundamentals and software development.',
      },
      // Add other facilities here
    ],
    'Computer Labs': [
      {
        title: 'Fundamentals of Computing Lab',
        description: 'Basic computing environment for learning programming fundamentals and software development.',
      },
      {
        title: 'Object Oriented Programming Lab',
        description: 'Specialized lab for hands-on practice in object-oriented programming languages like Java and C++.',
      },
      {
        title: 'Database Lab',
        description: 'Lab equipped with database management systems for practical training in database design and implementation.',
      },
      {
        title: 'Computer Networking Lab',
        description: 'Networking lab to simulate and study computer networks, protocols, and security measures.',
      },
    ],
    'Research Labs': [
      {
        title: 'Software Engineering Research Lab',
        description: 'Research-oriented lab for exploring software development methodologies and practices.',
      },
      {
        title: 'Image Processing and Computer Vision Lab',
        description: 'Lab focusing on image processing techniques and computer vision algorithms.',
      },
      {
        title: 'Computational Intelligence Lab',
        description: 'Lab focusing on artificial intelligence and computational intelligence research.',
      },
    ],
    'Specialized Labs': [
      {
        title: 'High Performance Computing Lab',
        description: 'State-of-the-art lab equipped with advanced computing systems for intensive data processing.',
      },
      {
        title: 'Biometric Lab',
        description: 'Lab specializing in biometric technologies and applications.',
      },
      {
        title: 'Cryptography and Network Security Lab',
        description: 'Lab for studying cryptographic algorithms and network security protocols.',
      },
      {
        title: 'IoT and Embedded Systems Lab',
        description: 'Lab for hands-on experiments in Internet of Things (IoT) and embedded systems development.',
      },
    ],
  };

  const handlePress = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <>
    <Header />
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Facilities</Text>
      </View>

      <View style={styles.dropdownSection}>
        <TouchableOpacity onPress={() => handlePress(0)} style={styles.dropdownHeader}>
          <Text style={styles.dropdownTitle}>{selectedCategory}</Text>
          <Icon name={expanded === 0 ? 'chevron-up' : 'chevron-down'} size={20} color="#004d40" />
        </TouchableOpacity>
        {expanded === 0 && (
          <View style={styles.dropdownContent}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                onPress={() => {
                  setSelectedCategory(category);
                  setExpanded(null);
                }}
                style={styles.categoryItem}
              >
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      <View style={styles.section}>
        {facilities[selectedCategory]?.map((facility, index) => (
          <View key={index} style={styles.facility}>
            <Text style={styles.facilityTitle}>{facility.title}</Text>
            <Text style={styles.facilityDescription}>{facility.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 30,
    backgroundColor: '#e0f2f1',
  },
  headerContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
  },
  dropdownSection: {
    marginBottom: 20,
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffffff', // Matching dropdown background
    borderRadius: 5,
  },
  dropdownTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004d40',
  },
  dropdownContent: {
    paddingVertical: 10,
    backgroundColor: '#ffffff', // Matching dropdown background
    borderRadius: 5,
  },
  categoryItem: {
    padding: 10,
  },
  categoryText: {
    fontSize: 16,
    color: '#004d40',
  },
  section: {
    backgroundColor: '#ffffff', // Matching section background
    padding: 15,
    borderRadius: 10,
    elevation: 3, // Shadow effect for Android
  },
  facility: {
    marginBottom: 20,
  },
  facilityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  facilityDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
});

export default Facilities;
