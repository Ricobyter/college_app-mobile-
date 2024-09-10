import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure to install this package for icons
import Header from '../components/Header'; // Import the Header component

const Btech = () => {
  const [expanded, setExpanded] = useState(null);
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false); // State for summary expansion
  const [isLearningExpanded, setIsLearningExpanded] = useState(false); // State for learning section expansion
  const [isAdmissionsExpanded, setAdmissionsExpanded] = useState(false);
  const [isForeignAdmissionsExpanded, setIsForeignAdmissionsExpanded] = useState(false);
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
        { id: 'PR2002', name: 'Professional Development Course (1L) (Year Long Courses)', credits: 2 },
      ],
    },
    {
      semester: 'Fourth Semester',
      courses: [
        { id: 'CS2005', name: 'Language Theory (3L)', credits: 3 },
        { id: 'CS2006', name: 'Operating Systems (3L)', credits: 3 },
        { id: 'CS2007', name: 'Design & Analysis of Algorithm (3L)', credits: 3 },
        { id: 'CS2008', name: 'Computer Network (3L)', credits: 3 },
        { id: 'OE2C01', name: 'Elective: NoSQL Databases (3L)', credits: 3 },
        { id: 'OE2C02', name: 'Elective: Descrete Structures (3L)', credits: 3 },
        { id: 'IT2C02', name: 'IT workshop II: Embedded System Lab (2P)', credits: 2 },
        { id: 'PR2002', name: 'Discipline Project (Year Long Courses)', credits: 2 },
        { id: 'PR2002', name: 'Professional Development Course (1L) (Year Long Courses)', credits: 2 },
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
        { id: 'PR3003', name: 'Optional Project (Year Long Course)', credits: 2 },
        { id: 'PR3003', name: 'Professional Development Course (1L) (Year Long Courses)', credits: 1 },
      ],
    },
    {
      semester: 'Sixth Semester',
      courses: [
        { id: 'DS3014', name: 'Fabrication Project (8P)', credits: 4 },
        { id: 'HS3004', name: 'Ecology and Environment Science (2L)', credits: 2 },
        { id: 'OE3C28', name: 'Elective 1: Cyber Security (2L + 3P)', credits: 3 },
        { id: 'CS8007', name: 'Elective 1: Social Network Analysis (3L)', credits: 3 },
        { id: 'CS8009', name: 'Elective 2: Image Processing (3L)', credits: 3 },
        { id: 'CS8010', name: 'Elective 2: Introduction to Digital watermarking (3L)', credits: 3 },
        { id: 'CS8011', name: 'Elective 3: Machine Learning (3L)', credits: 3 },
        { id: 'OE3C34', name: 'Elective 3: Cyber Physical Systems (3L)', credits: 3 },
        { id: 'IT3C03', name: 'IT workshop IV: Web and mobile App development (3P)', credits: 2 },
        { id: 'PR3003', name: 'Optional Project (Year Long Course)', credits: 2 },
        { id: 'PR3003', name: 'Professional Development Course (1L) (Year Long Courses)', credits: 1 },
      ],
    },
    {
      semester: 'Seventh Semester',
      courses: [
        { id: 'CS8001', name: 'Open Elective 1: Introduction to Blockchain Technology (2L + 2P)', credits: 3 },
        { id: 'CS8016', name: 'Open Elective 1: Cloud Computing (3L)', credits: 3 },
        { id: 'CS8004', name: 'Open Elective 2: Deep Learning and Applications (2L + 2P)', credits: 3 },
        { id: 'CS8006', name: 'Open Elective 2: Internet of Things (2L + 2P)', credits: 3 },
        { id: 'CS8002', name: 'Open Elective: Multimedia Processing (3L)', credits: 3 },
        { id: 'CS8003', name: 'Open Elective: Data Clustering (3L)', credits: 3 },
        { id: 'CS8005', name: 'Open Elective: Research Method in Computer Science (3L)', credits: 3 },
        { id: 'PC4004', name: 'Professional Development Course (1L) (Year Long Courses)', credits: 1 },
      ],
    },
    {
      semester: 'Eighth Semester',
      courses: [
        { id: 'CS8013', name: 'Elective 1: Mobile and Wireless Network (3L)', credits: 3 },
        { id: 'CS8021', name: 'Elective 1: Information Retrieval and Semantic Web (3L)', credits: 3 },
        { id: 'CS8015', name: 'Elective 2: Computer Vision with Deep Learning (2L + 2P)', credits: 3 },
        { id: 'CS8018', name: 'Elective 2: Hardware Security (3L)', credits: 3 },
        { id: 'PC4004', name: 'Professional Development Course (1L) (Year Long Courses)', credits: 1 },
        { id: '', name: 'BTP', credits: 9 },
        { id: '', name: 'Project-based Internship', credits: 15 },
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
  const handleAdmissionsToggle = () => {
    setAdmissionsExpanded(!isAdmissionsExpanded);
    setIsSummaryExpanded(false);
    setIsLearningExpanded(false);
  };
  const handleForeignAdmissionsToggle = () => {
    setIsForeignAdmissionsExpanded(!isForeignAdmissionsExpanded);
    setIsSummaryExpanded(false);
    setIsLearningExpanded(false);
  };

  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("An error occurred", err));
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>B.Tech Programs</Text>
        </View>

        {/* Summary Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>A brief summary</Text>
          <Text style={styles.sectionText}>
            Institute offers a four-year undergraduate degree (B.Tech) in Computer Science & Engineering. 
          </Text>
          {isSummaryExpanded && (
            <Text style={styles.sectionText}>
              The curriculum provides flexibility and prepares students for advanced specializations. The department commits to offer a set of electives so that students can plan their academic program in advance. The course structure provides a right mix of compulsory and elective courses.
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
            The BTech Program is divided into two distinct parts. A student has to go through a common program called Core Curriculum. 
          </Text>
          {isLearningExpanded && (
            <View>
              <Text style={styles.sectionText}>
              Most of the core curriculum is completed in the first four semesters. The last four semesters has a large number of professional courses, that initiates the student to topics in Computer Science and Engineering.
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

        {/* Semester-wise course list */}
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

        {/* Admissions to the B.Tech. Programme */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Admissions to the B.Tech. Programme</Text>
          <Text style={styles.sectionText}>
            Admissions to the B.Tech.programme are made once a year in July through JEE (Main) conducted by Central Board of Secondary Education.
          </Text>
          {isAdmissionsExpanded && (
            <Text style={styles.sectionText}>
              The minimum academic qualification for admission is a pass in the final examination of 10+2 system or its equivalent with Physics and Mathematics as compulsory subjects and any one among Chemistry, Bio-technology, Computer Science and Biology as optional subjects. The procedures and other requirements for admission are specified in the JEE (Main) Information Brochure.
            </Text>
          )}
          <TouchableOpacity onPress={handleAdmissionsToggle} style={styles.moreButton}>
            <Text style={styles.moreButtonText}>{isAdmissionsExpanded ? 'Less' : 'More'}</Text>
          </TouchableOpacity>
        </View>

        {/* Admissions to the B.Tech.programme for foreign nations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Admissions to the B.Tech. Programme for Foreign Nations</Text>
          <Text style={styles.sectionText}>
            For admission of students from Foreign Nations will be through DASA (Direct Admission of Students Abroad).
          </Text>
          {isForeignAdmissionsExpanded && (
            <View>
              <Text style={styles.sectionText}>
                <TouchableOpacity onPress={() => openLink('http://cse.iiitdmj.ac.in/')}>
                  <Text style={styles.hyperlink}>B.Tech Course Curriculum</Text>
                </TouchableOpacity>
              </Text>
              <Text style={styles.sectionText}>
                <TouchableOpacity onPress={() => openLink('http://cse.iiitdmj.ac.in/')}>
                  <Text style={styles.hyperlink}>Required Documents for Admission</Text>
                </TouchableOpacity>
              </Text>
              <Text style={styles.sectionText}>
                <TouchableOpacity onPress={() => openLink('http://cse.iiitdmj.ac.in/')}>
                  <Text style={styles.hyperlink}>Seat Matrix</Text>
                </TouchableOpacity>
              </Text>
              <Text style={styles.sectionText}>
                <TouchableOpacity onPress={() => openLink('http://cse.iiitdmj.ac.in/')}>
                  <Text style={styles.hyperlink}>Proforma for OBC Certificate</Text>
                </TouchableOpacity>
              </Text>
            </View>
          )}
          <TouchableOpacity onPress={handleForeignAdmissionsToggle} style={styles.moreButton}>
            <Text style={styles.moreButtonText}>{isForeignAdmissionsExpanded ? 'Less' : 'More'}</Text>
          </TouchableOpacity>
        </View>

        {/* Reservations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reservations</Text>
          <Text style={styles.sectionText}>
            Reservations for Scheduled Caste (SC), Scheduled Tribe (ST), Other Backward Classes (OBC) and Physically Handicapped (PH) candidates are as per the Government of India existing rules.
          </Text>
          <Text style={styles.sectionText}>
            Additional details for the reservations can be added here.
          </Text>
        </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  dropdownTitle: {
    fontSize: 16,
    color: '#004d40',
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: '#00796b',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#00796b',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#00796b',
  },
  tableHeaderRow: {
    backgroundColor: '#00796b',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },
  tableHeader: {
    color: '#ffffff',
    fontWeight: 'bold',
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
  hyperlink: {
    color: '#00796b',
    textDecorationLine: 'underline',
    fontSize: 17,
  },
});

export default Btech;
