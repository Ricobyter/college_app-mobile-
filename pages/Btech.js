import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure to install this package for icons
import Header from '../components/Header'; // Import the Header component

const Btech = () => {
  const [expanded, setExpanded] = useState(null);

  const courses = [
    {
      semester: 'First Semester',
      courses: [
        { id: 'NS1001', name: 'Mathematics-I (3L+ 1T)', credits: 4 },
        { id: 'NS1002', name: 'Engineering Mechanics (2L + 1T + 2P)', credits: 4 },
        { id: 'HS1001', name: 'Effective Communication Skills (2L)', credits: 2 },
        { id: 'IT1001', name: 'Introduction to Programming In C/Python (2L + 3P)', credits: 3 },
        { id: 'CS1001', name: 'Introduction to Profession (1L + 2P)', credits: 1 },
        { id: 'PR1001', name: 'Innovation Theory and Practice (1L + 2P) (Year Long Courses)', credits: 2 },
        { id: 'PC1001', name: 'Professional Development Course (1L) (Year Long Courses)', credits: 1 },
      ],
    },
    {
      semester: 'Second Semester',
      courses: [
        { id: 'NS103a', name: 'ODE & PDE (2L + 1T + 2P)', credits: 4 },
        { id: 'NS103b', name: 'Linear Algebra (2L + 1T + 2P)', credits: 4 },
        { id: 'NS1004', name: 'Physics II (3L + 1T + 2P)', credits: 4 },
        { id: 'ES1002', name: 'Basic Electronics (3L + 2P)', credits: 4 },
        { id: 'DS1005', name: 'Engineering Graphics (2L + 3P)', credits: 3 },
        { id: 'ES1003', name: 'Innovation Theory and Practice (1L + 2P)', credits: 2 },
        { id: 'HS102a or HS102b', name: 'Indian Culture, Ethics and Human Values (2L + 2T)', credits: 3 },
        { id: 'PC1002', name: 'Professional Development Course (Year Long Course)', credits: 1 },
      ],
    },
    {
      semester: 'Third Semester',
      courses: [
        { id: 'IT2001', name: 'Data Structure (2L + 2P)', credits: 3 },
        { id: 'CS2002', name: 'Computer Organization and Architecture (3L + 2P)', credits: 4 },
        { id: 'CS2003', name: 'Database Management Systems (3L + 2P)', credits: 4 },
        { id: 'CS2004', name: 'Introduction to Data Science (3L + 2P)', credits: 4 },
        { id: 'OE2C09', name: 'Open Elective: Graph Theory (3L)', credits: 3 },
        { id: 'NS2001', name: 'Open Elective: Biology for Engineers (2L)', credits: 2 },
        { id: 'IT2C01', name: 'IT Workshop I: OOPs in Java (2P)', credits: 2 },
        { id: 'PR2002', name: 'Discipline Project (Year Long Courses)', credits: 2 },
      ],
    },
    {
      semester: 'Fourth Semester',
      courses: [
        { id: 'CS2005', name: 'Language Theory (3L)', credits: 3 },
        { id: 'CS2006', name: 'Operating Systems (3L)', credits: 3 },
        { id: 'CS2007', name: 'Design & Analysis of Algorithm (3L)', credits: 3 },
        { id: 'CS2008', name: 'Computer Network (3L)', credits: 3 },
      ],
    },
    {
      semester: 'Fifth Semester',
      courses: [
        { id: 'CS3009', name: 'Network Security & Cryptography (3L)', credits: 3 },
        { id: 'CS3010', name: 'Software Engineering (3L)', credits: 3 },
        { id: 'CS3011', name: 'Artificial Intelligence (3L)', credits: 3 },
        { id: 'OE3C24', name: 'Open Elective: Parallel Computing (3L)', credits: 3 },
        { id: 'IT3C01', name: 'IT Workshop III: Computer Network Lab (2P)', credits: 2 },
      ],
    },
    {
      semester: 'Sixth Semester',
      courses: [
        { id: 'DS3014', name: 'Fabrication Project (8P)', credits: 4 },
        { id: 'HS3004', name: 'Ecology and Environment Science (2L)', credits: 2 },
        { id: 'OE3C28', name: 'Elective 1: Cyber Security (2L + 3P)', credits: 3 },
        { id: 'CS8007', name: 'Elective 1: Social Network Analysis (3L)', credits: 3 },
      ],
    },
    {
      semester: 'Seventh Semester',
      courses: [
        { id: 'CS8001', name: 'Open Elective 1: Introduction to Blockchain Technology (2L + 2P)', credits: 3 },
        { id: 'CS8016', name: 'Open Elective 1: Cloud Computing (3L)', credits: 3 },
        { id: 'CS8004', name: 'Open Elective 2: Deep Learning and Applications (2L + 2P)', credits: 3 },
      ],
    },
    {
      semester: 'Eighth Semester',
      courses: [
        { id: 'CS8013', name: 'Elective 1: Mobile and Wireless Network (3L)', credits: 3 },
        { id: 'CS8021', name: 'Elective 1: Information Retrieval and Semantic Web (3L)', credits: 3 },
        { id: 'CS8015', name: 'Elective 2: Computer Vision with Deep Learning (2L + 2P)', credits: 3 },
      ],
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
          <Text style={styles.headerText}>B.Tech Programs</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>A brief summary</Text>
          <Text style={styles.sectionText}>
            Institute offers a four-year undergraduate degree (B.Tech) in Computer Science & Engineering. 
            The curriculum provides flexibility and prepares students for advanced specializations.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What you will learn</Text>
          <Text style={styles.sectionText}>
            The program includes a core curriculum completed in the first four semesters, followed by professional courses in the latter semesters.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Expert teachers</Text>
          <Text style={styles.sectionText}>- Extensive documentation provided</Text>
          <Text style={styles.sectionText}>- Good infrastructure</Text>
          <Text style={styles.sectionText}>- Best learning environment</Text>
        </View>
        
        {courses.map((semester, index) => (
          <View key={index} style={styles.section}>
            <TouchableOpacity onPress={() => handlePress(index)} style={styles.dropdownHeader}>
              <Text style={styles.dropdownTitle}>{semester.semester}</Text>
              <Icon name={expanded === index ? 'chevron-up' : 'chevron-down'} size={20} color="#004d40" />
            </TouchableOpacity>
            {expanded === index && (
              <View style={styles.tableContainer}>
                <View style={styles.table}>
                  <View style={[styles.tableRow, styles.tableHeaderRow]}>
                    <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellLeft]}>Course Id</Text>
                    <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellCenter]}>Course Name</Text>
                    <Text style={[styles.tableCell, styles.tableHeader, styles.tableCellRight]}>Credits</Text>
                  </View>
                  {semester.courses.map((course, idx) => (
                    <View key={idx} style={styles.tableRow}>
                      <Text style={[styles.tableCell, styles.tableCellLeft]}>{course.id}</Text>
                      <Text style={[styles.tableCell, styles.tableCellCenter]}>{course.name}</Text>
                      <Text style={[styles.tableCell, styles.tableCellRight]}>{course.credits}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
        ))}
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General Instructions</Text>
          <Text style={styles.sectionText}>
            Students are expected to follow the university's academic policies and maintain academic integrity.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 20, // Adjusted to provide space for the Header
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
    padding: 10,
    backgroundColor: '#e0f2f1',
    borderRadius: 5,
  },
  dropdownTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004d40',
  },
  tableContainer: {
    marginTop: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#004d40',
    borderRadius: 5,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#004d40',
  },
  tableHeaderRow: {
    backgroundColor: '#004d40',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },
  tableCellLeft: {
    textAlign: 'left',
  },
  tableCellCenter: {
    textAlign: 'center',
  },
  tableCellRight: {
    textAlign: 'right',
  },
  tableHeader: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Btech;
