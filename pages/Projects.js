import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';

const Projects = () => {
  const [expanded, setExpanded] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const statuses = ['All', 'Ongoing', 'Completed'];

  const projects = [
    { faculty: 'Aparajita Ojha', title: '3D-Mesh Model Steganography and Secure Communication in a Cloud Manufacturing Environment', start: '29-06-21', end: '28-06-23', agency: 'DST-JSPS', amount: 'Rs. 9.22 lacs', status: 'Ongoing' },
    { faculty: 'Atul Gupta', title: 'Android App for Plant Species Identification', start: '2017', end: '2019', agency: 'DIC, IIITDM Jabalpur', amount: 'Rs. 5 lacs', status: 'Completed' },
    { faculty: 'Atul Gupta', title: 'Electronics and ICT Academy, IIITDM Jabalpur', start: '2015', end: '2022', agency: 'MeitY', amount: 'Rs. 25 crore', status: 'Ongoing' },
    { faculty: 'Ayan Seal', title: 'Design and Development of Automatic Target Recognition instrument in Low-light Conditions', start: '2016-10-04', end: '2018-10-04', agency: 'IIITDM Jabalpur', amount: 'Rs. 2 lacs', status: 'Completed' },
    { faculty: 'Ayan Seal', title: 'Prediction of diseases through computer assisted diagnosis system using images captured by minimally-invasive and non-invasive modalities', start: '13-05-2019', end: '12-05-2021', agency: 'SPARC', amount: 'Rs. 47.68 lacs', status: 'Completed' },
    { faculty: 'Ayan Seal, Manish Kumar Bajpai, Pritee Khanna', title: 'Privacy Enhancing Revocable Biometric Identities (PERBI)', start: '2017-01-13', end: '2020-01-13', agency: 'Department of Atomic Energy, Board of Research in Nuclear Sciences, Govt. of India', amount: 'Rs. 28 lacs', status: 'Completed' },
    { faculty: 'Munesh Singh', title: 'Development of Fresh Water Pearl Culture Unit Based on IoT-Data Analytics', start: '03-03-2020', end: '03-03-2023', agency: 'DST', amount: 'Rs. 17 lacs', status: 'Ongoing' },
    { faculty: 'Munesh Singh', title: 'Device Free Target Localization in Wireless Networks Using Machine Learning', start: '20-08-2020', end: '20-08-2023', agency: 'IIITDM SEED', amount: 'Rs. 8 lacs', status: 'Completed' },
    { faculty: 'Munesh Singh', title: 'Knowledge Graph for Adverse Drug Reaction (ADR) Association for Safety Signal Detection Using Public Safety Databases', start: '21-05-2019', end: '20-10-2020', agency: 'Data Foundry Private Limited', amount: 'Rs. 15.50 lacs', status: 'Completed' },
    { faculty: 'Munesh Singh, Vijaypal Singh Rathor, Vinod Kumar Jain', title: 'UAV-assisted Wi-Fi Geofencing for UAV Tracking and Activity Monitoring in Restricted Perimeter', start: '2022-07-01', end: '-', agency: 'TiHAN-IIT Hyderabad', amount: 'Rs 15.70 lacs', status: 'Ongoing' },
    { faculty: 'Neelam Dayal', title: 'Bot Prevention in Cyberphysical System', start: '2022', end: '-', agency: 'C3iHub, IIT Kanpur', amount: 'Rs. 39.97 lacs', status: 'Ongoing' },
    { faculty: 'Pritee Khanna', title: 'Geometric Modeling, Analysis and Design for Generic Definitions of Custom-Engineered Cutting Tools', start: '2008', end: '2011', agency: 'Department of Science and Technology (Govt of India)', amount: 'Rs. 25.26 lacs', status: 'Completed' },
    { faculty: 'Pritee Khanna', title: 'Jabalpur District Collectorate Project', start: '2007', end: '2008', agency: 'District Collectorate Office', amount: 'Rs. 1 lac', status: 'Completed' },
    { faculty: 'Pritee Khanna', title: 'OATH (Online Academic Transaction Help)', start: '2009', end: '2010', agency: 'IIITDM Jabalpur', amount: 'Rs. 50,000', status: 'Completed' },
    { faculty: 'Pritee Khanna', title: 'Similarity Detection and Process Information Retrieval from Large Part-Drawing Databases of Manufacturing Companies: A Mini Industry 4.0 Solution', start: '2019-03-13', end: '2020-03-12', agency: 'alfaTKG India Pvt Ltd', amount: 'Rs. 8.26 lacs', status: 'Ongoing' },
    { faculty: 'Vijaypal Singh Rathor', title: 'HT-Pred: A Complete Defensive Machine Learning Tool for Hardware Trojan Detection', start: '28-10-2020', end: '-', agency: 'Data Security Council of India (DSCI)', amount: 'RS. 6 lacs(Aprox)', status: 'Ongoing' },
  ];

  const filteredProjects = selectedStatus === 'All'
    ? projects.filter(project => project.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : projects.filter(project => project.status === selectedStatus && project.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const handlePress = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    setExpanded(null); // Close dropdown after selection
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Projects</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Search Projects</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by project title"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Status</Text>
          <TouchableOpacity onPress={() => handlePress(0)} style={styles.dropdownHeader}>
            <Text style={styles.dropdownTitle}>{selectedStatus}</Text>
            <Icon name={expanded === 0 ? 'chevron-up' : 'chevron-down'} size={20} color="#004d40" />
          </TouchableOpacity>
          {expanded === 0 && (
            <View style={styles.dropdownContent}>
              {statuses.map((status) => (
                <TouchableOpacity key={status} onPress={() => handleStatusSelect(status)} style={styles.statusItem}>
                  <Text style={styles.statusText}>{status}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {filteredProjects.map((project, index) => (
          <View key={index} style={styles.projectItem}>
            <Text style={styles.projectTitle}>{project.title}</Text>
            <Text style={styles.projectDetail}>Faculty: {project.faculty}</Text>
            <Text style={styles.projectDetail}>Start: {project.start}</Text>
            <Text style={styles.projectDetail}>End: {project.end}</Text>
            <Text style={styles.projectDetail}>Funding Agency: {project.agency}</Text>
            <Text style={styles.projectDetail}>Funding Amount: {project.amount}</Text>
            <Text style={styles.projectDetail}>Status: {project.status}</Text>
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
    fontSize: 26,
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d40',
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#004d40',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    marginRight: 10,
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#e0f2f1',
    borderRadius: 5,
    marginRight: 10,
  },
  dropdownTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004d40',
    
  },
  dropdownContent: {
    paddingVertical: 10,
    backgroundColor: '#e0f2f1',
    borderRadius: 5,
    marginRight: 10,
  },
  statusItem: {
    padding: 10,
  },
  statusText: {
    fontSize: 16,
    color: '#004d40',
  },
  projectItem: {
    marginBottom: 15,
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 5,
    elevation: 3,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004d40',
    marginBottom: 5,
  },
  projectDetail: {
    fontSize: 14,
    color: '#333',
    marginBottom: 3,
  },
});

export default Projects;
