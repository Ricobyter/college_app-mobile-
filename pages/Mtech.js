import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header'; // Ensure to install this package for icons

const Mtech = () => {
  const [expanded, setExpanded] = useState(null);

  const courses = [
    {
      semester: 'First Semester',
      courses: [
        { id: '1', name: 'Introduction to Blockchain Technology', credits: '2-0-2-3' },
        { id: '2', name: 'Multimedia Processing', credits: '3-0-0-3' },
        { id: '3', name: 'Data Clustering', credits: '3-0-0-3' },
        { id: '4', name: 'Deep Learning and Applications', credits: '2-0-2-3' },
        { id: '5', name: 'Research Method in Computer Science', credits: '3-0-0-3' },
        { id: '6', name: 'Internet of Things', credits: '3-0-0-3' },
        { id: '7', name: 'Cloud Computing', credits: '3-0-0-3' }
      ],
    },
    {
      semester: 'Second Semester',
      courses: [
        { id: '1', name: 'Next Generation Networks', credits: '3-0-0-3' },
        { id: '2', name: 'Advanced Embedded System', credits: '3-0-0-3' },
        { id: '3', name: 'Mobile & Wireless Network / Information Retrieval & Semantic Web', credits: '3-0-0-3' },
        { id: '4', name: 'Computer Vision with Deep Learning / Hardware Security', credits: '2-0-2-3 / 3-0-0-3' }
      ],
    },
    {
      semester: 'Third Semester',
      courses: [
        { id: '1', name: 'Thesis', credits: '0-0-0-16' },
        { id: '2', name: 'Graduate Seminar I', credits: '0-0-0-2' }
      ],
    },
    {
      semester: 'Fourth Semester',
      courses: [
        { id: '1', name: 'Thesis', credits: '0-0-0-16' },
        { id: '2', name: 'Graduate Seminar II', credits: '0-0-0-2' }
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
          <Text style={styles.headerText}>M.Tech Programs</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>A brief summary</Text>
          <Text style={styles.sectionText}>
            Institute offers a two-year postgraduate degree (M.Tech) programme in Computer Science & Engineering. 
            The minimum residential requirement for the program is four semesters. The program requires completion 
            of 70 credits of which at least 28 units shall be through coursework and 32 units through thesis work. 
            Non-sponsored candidates who are Indian Nationals admitted to the regular full-time M.Tech Program through 
            GATE are eligible for financial assistance. A teaching assistant can be asked to conduct labs, help an 
            instructor in grading, and other course-related tasks. Currently, the assistantship amount is Rs. 12400 per month.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What you will learn</Text>
          <Text style={styles.sectionText}>
            MTech degree program exposes students to a wide range of courses, combined with specialized research 
            which culminates in a thesis. Such a combination gives students the breadth and depth necessary for pursuing 
            careers in academics as well as in industry.
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

export default Mtech;
