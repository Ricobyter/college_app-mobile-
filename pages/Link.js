import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';

const Links = () => {
  const [expanded, setExpanded] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All Links');

  const categories = ['All Links', 'Important Links', 'Quick Links', 'Research Group'];

  const links = {
    'Important Links': [
      {
        title: 'TA Duty 2023',
        url: 'http://cse.iiitdmj.ac.in/assets/misc/2022-2023%20Sem%20II%20-%20CSE%20TA%20duty%20list%20V1.pdf',
      },
      {
        title: 'Placement Cell',
        url: 'https://www.iiitdmj.ac.in/placement.iiitdmj.ac.in/',
      },
      {
        title: 'Dean of Academics',
        url: 'https://www.iiitdmj.ac.in/academics/dean_acad.php',
      },
      {
        title: 'Dean of Students',
        url: 'https://www.iiitdmj.ac.in/students/dean_office.php',
      },
      {
        title: 'Dean of Research and Development',
        url: 'https://www.iiitdmj.ac.in/rspc.iiitdmj.ac.in/office.php?pid=7',
      },
      {
        title: 'Dean of Planning and Development',
        url: 'http://faculty.iiitdmj.ac.in/faculty/pnkondekar',
      },
    ],
    'Quick Links': [
      {
        title: 'IIITDM Jabalpur Home',
        url: 'https://www.iiitdmj.ac.in/',
      },
      {
        title: 'Academic Calendar',
        url: 'https://www.iiitdmj.ac.in/academics/calendar.php#acad_cal',
      },
      {
        title: 'Holidays 2023',
        url: 'https://www.iiitdmj.ac.in/downloads/Closed-Holiday-2023.pdf',
      },
      {
        title: 'About Us',
        url: 'http://cse.iiitdmj.ac.in/aboutus.php',
      },
      {
        title: 'E & ICT Academy',
        url: 'https://www.iiitdmj.ac.in/ict.iiitdmj.ac.in/index.html',
      },
      {
        title: 'Web Team',
        url: 'http://cse.iiitdmj.ac.in/webteam.php',
      },
    ],
    'Research Group': [
      {
        title: 'Image Processing and Computer Vision',
        url: 'https://www.iiitdmj.ac.in/icv.iiitdmj.ac.in/',
      },
      {
        title: 'IoT and Embedded Systems',
        url: 'https://www.iiitdmj.ac.in/iot.iiitdmj.ac.in/',
      },
      {
        title: 'Machine Intelligence',
        url: 'https://www.iiitdmj.ac.in/main.iiitdmj.ac.in/',
      },
    ],
  };

  const handlePress = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  // Function to get all links
  const getAllLinks = () => {
    return Object.values(links).flat();
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Links</Text>
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
          {(selectedCategory === 'All Links' ? getAllLinks() : links[selectedCategory])?.map((link, index) => (
            <TouchableOpacity key={index} onPress={() => openLink(link.url)} style={styles.linkItem}>
              <Text style={styles.linkText}>{link.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e0f2f1', // Matching overall theme background
  },
  scrollContainer: {
    padding: 20,
    paddingTop: 20, // Adjusted to provide space for the Header
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff', // Matching Programs header background
    paddingVertical: 10,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 26, // Matching Programs header text size
    fontWeight: 'bold',
    color: '#004d40',
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
  linkItem: {
    paddingVertical: 10,
  },
  linkText: {
    fontSize: 16,
    color: '#00796b',
  },
});

export default Links;