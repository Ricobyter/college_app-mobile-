import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header'; // Ensure to install this package for icons

const Phd = () => {
  const [expanded, setExpanded] = useState(null);
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false); // State for summary expansion
  const [isLearningExpanded, setIsLearningExpanded] = useState(false); // State for learning section expansion
  const [isProgrammeDetailsExpanded, setIsProgrammeDetailsExpanded] = useState(false);
  const [isAdmissionProcedureExpanded, setIsAdmissionProcedureExpanded] = useState(false);
  const [isFurtherAdmissionInfoExpanded, setIsFurtherAdmissionInfoExpanded] = useState(false);

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

  const handleProgrammeDetailsToggle = () => {
    setIsProgrammeDetailsExpanded(!isProgrammeDetailsExpanded);
    setIsSummaryExpanded(false);
    setIsLearningExpanded(false);
  };
  const handleAdmissionProcedure = () => {
    Linking.openURL('http://cse.iiitdmj.ac.in/admission-procedure').catch((err) => console.error("An error occurred", err));
  };

  const handleFurtherAdmissionInfo = () => {
    Linking.openURL('http://cse.iiitdmj.ac.in/further-admission-info').catch((err) => console.error("An error occurred", err));
  };

  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("An error occurred", err));
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Ph.D. Program</Text>
        </View>

        {/* Summary Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>A brief summary</Text>
          <Text style={styles.sectionText}>
          Institute offers doctoral degree (PhD) programme in Computer Science & Engineering.
          </Text>
          {isSummaryExpanded && (
            <Text style={styles.sectionText}>
              The residence requirements for PhD program is four or six semesters depending on whether the student has M.Tech. or B.Tech. degree, respectively.
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
          The department is actively involved in research in all current areas of Computer Science. The focus of the PhD program is on research training with a high degree of specialization.
          </Text>
          {isLearningExpanded && (
            <View>
              <Text style={styles.sectionText}>
              The aim of such a training is to make our PhD students very competent in their respective areas, so that they may be able to take up teaching or research-and-development professions.
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

        {/* PhD Programme Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PhD Programme Details</Text>
          <Text style={styles.sectionText}>
            Applications for admission in a postgraduate programme, submitted by applying on the prescribed form, shall only be considered.
          </Text>
          {isProgrammeDetailsExpanded && (
            <View>
              <Text style={styles.sectionText}>
                Only those applications shall be considered which have been received before the specified last date. All admissions in different postgraduate programmes shall be recommended by the duly constituted selection committees. Such selection committees shall be appointed by the PGCS and approved by the Chairperson Senate.
              </Text>
              <TouchableOpacity onPress={() => openLink('http://cse.iiitdmj.ac.in/admission.php')} style={styles.linkButton}>
                <Text style={styles.linkText}>Apply Now</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity onPress={handleProgrammeDetailsToggle} style={styles.moreButton}>
            <Text style={styles.moreButtonText}>{isProgrammeDetailsExpanded ? 'Less' : 'More'}</Text>
          </TouchableOpacity>
        </View>

        {/* Admission Procedure Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Admission Procedure</Text>
          <Text style={styles.sectionText}>
            Applications of those students who have obtained their qualifying degree from any of the Indian Institutes of Technology (IIT) or IIITDM Jabalpur and have obtained a CPI more than 8.0 may be considered for direct admission without appearing in GATE.
          </Text>
          {isAdmissionProcedureExpanded && (
            <View>
              <Text style={styles.sectionText}>
                {/* Additional details can be placed here if needed */}
              </Text>
            </View>
          )}
          <TouchableOpacity onPress={handleAdmissionProcedure} style={styles.moreButton}>
            <Text style={styles.moreButtonText}>{isAdmissionProcedureExpanded ? 'Less' : 'More'}</Text>
          </TouchableOpacity>
        </View>

        {/* Further Admission Info Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Further Admission Info</Text>
          <Text style={styles.sectionText}>
            The selected candidates who have completed all the formalities of their previous degree, including project/ thesis examination/ viva voce, before the last date of registration but are unable to produce the certificate in proof of having passed and secured the minimum specified qualifying marks, may be provisionally registered in the programme.
          </Text>
          {isFurtherAdmissionInfoExpanded && (
            <View>
              <Text style={styles.sectionText}>
                {/* Additional details can be placed here if needed */}
              </Text>
            </View>
          )}
          <TouchableOpacity onPress={handleFurtherAdmissionInfo} style={styles.moreButton}>
            <Text style={styles.moreButtonText}>{isFurtherAdmissionInfoExpanded ? 'Less' : 'More'}</Text>
          </TouchableOpacity>
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
    backgroundColor: '#ffffff',
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
  linkButton: {
    backgroundColor: '#00796b',
    padding: 10,
    marginRight: 30,
    marginLeft: 20,
    borderRadius: 5,
  },
  linkText: {
    fontSize: 17,
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default Phd;