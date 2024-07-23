import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure to install this package for icons

const Phd = () => {
  const [expanded, setExpanded] = useState(null);

  const sections = [
    {
      title: 'A Brief Summary',
      content: 'The institute offers a PhD in Computer Science & Engineering. Residence is 4 semesters for M.Tech holders or 6 for B.Tech holders.',
    },
    {
      title: 'What You Will Learn',
      content: 'Focus on high-level research training in Computer Science, preparing you for teaching or R&D careers.',
    },
    {
      title: 'Expert Teachers',
      content: '- Extensive documentation provided\n- Excellent infrastructure\n- Optimal learning environment',
    },
    {
      title: 'PhD Programme Details',
      content: 'For admission: Apply before the deadline. Selection based on written test, interview, and potentially GATE score.',
      link: 'http://cse.iiitdmj.ac.in/admission.php',
    },
    {
      title: 'Admission Procedure',
      content: 'Direct admission possible for IIT/IIITDM Jabalpur graduates with CPI > 8.0. Reserved category admissions follow GOI guidelines.',
    },
    {
      title: 'Further Admission Info',
      content: 'Provisionally register if final marks are pending. Deferred admissions possible for valid reasons, subject to Senate approval.',
    },
  ];

  const handlePress = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleLinkPress = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Ph.D. Program</Text>
      </View>

      {sections.map((section, index) => (
        <View key={index} style={styles.section}>
          <TouchableOpacity onPress={() => handlePress(index)} style={styles.dropdownHeader}>
            <Text style={styles.dropdownTitle}>{section.title}</Text>
            <Icon name={expanded === index ? 'chevron-up' : 'chevron-down'} size={20} color="#004d40" />
          </TouchableOpacity>
          {expanded === index && (
            <View style={styles.sectionContent}>
              <Text style={styles.sectionText}>{section.content}</Text>
              {section.link && (
                <TouchableOpacity onPress={() => handleLinkPress(section.link)}>
                  <Text style={styles.link}>Apply Here</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004d40',
  },
  section: {
    marginBottom: 20,
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#e0f2f1',
    borderRadius: 5,
  },
  dropdownTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004d40',
  },
  sectionContent: {
    padding: 10,
    backgroundColor: '#e0f2f1',
    borderRadius: 5,
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
  },
  link: {
    fontSize: 16,
    color: '#00796b',
    marginTop: 10,
  },
});

export default Phd;
