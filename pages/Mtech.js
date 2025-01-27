import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header'; // Ensure to install this package for icons

const Mtech = () => {
  const [expanded, setExpanded] = useState(null);
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false); // State for summary expansion
  const [isLearningExpanded, setIsLearningExpanded] = useState(false); // State for learning section expansion

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
  const toggleSummary = () => {
    setIsSummaryExpanded(!isSummaryExpanded);
    setIsLearningExpanded(false); // Collapse learning section when summary is toggled
  };

  const toggleLearning = () => {
    setIsLearningExpanded(!isLearningExpanded);
    setIsSummaryExpanded(false); // Collapse summary section when learning is toggled
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>M.Tech Programs</Text>
        </View>

        {/* Summary Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>A brief summary</Text>
          <Text style={styles.sectionText}>
          Institute offers two year post graduate degree (M.Tech) programme in Computer Science & Engineering. The minimum residential requirement for the program is four semesters. 
          </Text>
          {isSummaryExpanded && (
            <Text style={styles.sectionText}>
              The program requires completion of 70 credits of which at least 28 units shall be through course work and 32 units through thesis work. Non-sponsored candidates who are Indian Nationals admitted to the regular full-time M.Tech Program through GATE are eligible for financial assistance. A teaching assistant can be asked to conduct labs, help an instructor in grading, and other course-related tasks. Currently the assistantship amount is Rs. 12400 per month.
            </Text>
          )}
          <TouchableOpacity onPress={toggleSummary} style={styles.moreButton}>
            <Text style={styles.moreButtonText}>{isSummaryExpanded ? 'Less' : 'More'}</Text>
          </TouchableOpacity>
        </View>

        {/* What you will learn section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What you will learn</Text>
          <Text style={styles.sectionText}>
          MTech degree program exposes students to a wide range of courses, combined with specialized research which culminates in a thesis.
          </Text>
          {isLearningExpanded && (
            <View>
              <Text style={styles.sectionText}>
              Such a combination gives students the breadth and depth necessary for pursuing careers in academics as well as in industry.
              </Text>
              <Text style={styles.sectionText}>- Expert teachers</Text>
              <Text style={styles.sectionText}>- Extensive documentation provided</Text>
              <Text style={styles.sectionText}>- Good infrastructure</Text>
              <Text style={styles.sectionText}>- Best learning environment</Text>
            </View>
          )}
          <TouchableOpacity onPress={toggleLearning} style={styles.moreButton}>
            <Text style={styles.moreButtonText}>{isLearningExpanded ? 'Less' : 'More'}</Text>
          </TouchableOpacity>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 20,
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
  section: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004d40',
    marginBottom: 10,
    
  },
  
  sectionText: {
    fontSize: 17,
    color: '#004d40',
  },
  moreButtonText: {
    marginTop: 5,
    fontSize: 16,
    color: '#00796b',
    textDecorationLine: 'underline',
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffffff',
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
    borderColor: '#00796b',
    borderRadius: 5,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#00796b',
  },
  tableHeaderRow: {
    backgroundColor: '#00796b',
  },
  tableCell: {
    fontSize: 15,
    paddingHorizontal: 5,
  },
  tableHeader: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  tableCellLeft: {
    flex: 1,
  },
  tableCellCenter: {
    flex: 2,
    textAlign: 'center',
  },
  tableCellRight: {
    flex: 1,
    textAlign: 'right',
  },
});

export default Mtech;