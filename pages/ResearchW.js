import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure to install this package for icons
import Header from '../components/Header';

const Research = () => {
  const [expanded, setExpanded] = useState(null);

  const researchProjects = [
    {
      title: 'OCT DISEASE CLASSIFICATION USING DEEP CONVOLUTIONAL NEURAL NETWORKS',
      contributor: 'Neha Gour',
      mentor: 'Pritee Khanna',
      status: 'Ongoing',
    },
    {
      title: 'IMAGE DENOISING TECHNIQUES FOR NOISE REDUCTION IN OPTICAL COHERENCE TOMOGRAPHY IMAGES',
      description: 'In OCT images speckle noise is present. Denoising these images is the first step towards detection of diseases like diabetic macular edema and dry age-related macular degeneration.',
      contributor: 'Neha Gour',
      mentor: 'Pritee Khanna',
      status: 'Ongoing',
    },
    {
      title: 'METHOD LEVEL SOURCE CODE SUMMARIZATION FOR JAVA METHODS',
      contributor: 'Sawan Rai',
      mentor: 'Atul Gupta',
      status: 'Completed',
    },
  ];

  const handlePress = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Research</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionText}>
            Dive into our ongoing research, publications, and projects. Tap any project to learn more.
          </Text>
        </View>

        {researchProjects.map((project, index) => (
          <View key={index} style={styles.section}>
            <TouchableOpacity onPress={() => handlePress(index)} style={styles.dropdownHeader}>
              <Text style={styles.dropdownTitle}>{project.title}</Text>
              <Icon name={expanded === index ? 'chevron-up' : 'chevron-down'} size={20} color="#004d40" />
            </TouchableOpacity>
            {expanded === index && (
              <View style={styles.detailsContainer}>
                <Text style={styles.detailsText}><Text style={styles.detailsLabel}>Primary Contributor:</Text> {project.contributor}</Text>
                <Text style={styles.detailsText}><Text style={styles.detailsLabel}>Mentor:</Text> {project.mentor}</Text>
                {project.description && <Text style={styles.detailsText}><Text style={styles.detailsLabel}>Description:</Text> {project.description}</Text>}
                <Text style={styles.detailsText}><Text style={styles.detailsLabel}>Status:</Text> {project.status}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e0f2f1', // Light background to match the theme
  },
  scrollContainer: {
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: 'left',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004d40',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d40',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderColor: '#004d40',
    borderWidth: 1,
  },
  dropdownTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004d40',
  },
  detailsContainer: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderColor: '#004d40',
    borderWidth: 1,
  },
  detailsText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  detailsLabel: {
    fontWeight: 'bold',
    color: '#004d40',
  },
});

export default Research;
