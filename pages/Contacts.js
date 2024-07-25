import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your icon library
import Header from '../components/Header'; // Import the Header component

const Contacts = () => {
  const openGoogleMap = () => {
    const latitude = 23.1764;
    const longitude = 80.0253;
    const label = "IIITDM Jabalpur";
    const url = `https://maps.google.com/maps?q=${latitude},${longitude}(${label})`;
    Linking.openURL(url);
  };

  const openFeedbackForm = () => {
    const feedbackUrl = "https://forms.gle/odFiE6TgzBgf2jDj9"; // Replace with your feedback form URL
    Linking.openURL(feedbackUrl);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contacts</Text>
          <View style={styles.addressContainer}>
            <Text style={styles.addressTitle}>Address:</Text>
            <Text style={styles.addressText}>
              Computer Science & Engineering Department {"\n"}
              Pandit Dwarka Prasad Mishra {"\n"}
              Indian Institute of Information Technology, {"\n"}
              Design & Manufacturing Jabalpur {"\n"}
              Dumna Airport Road, {"\n"}
              P.O.: Khamaria, {"\n"}
              Jabalpur - 482005, {"\n"}
              Madhya Pradesh, India
            </Text>
            <Text style={styles.contactDetails}>
              Tel: 0761-2794261 {"\n"}
              Fax: +91-761-2632524
            </Text>
          </View>

          <TouchableOpacity onPress={openGoogleMap} style={styles.button}>
            <Icon name="map-marker" size={20} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>View on Google Maps</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={openFeedbackForm} style={styles.button}>
            <Icon name="envelope" size={20} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Give Feedback / General Query</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1', // Matching overall theme background
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff', // White background for sections
    borderRadius: 10,
    elevation: 3, // Subtle shadow effect
  },
  sectionTitle: {
    fontSize: 22, // Consistent with Programs page
    fontWeight: 'bold',
    color: '#004d40', // Dark teal
    marginBottom: 10,
  },
  addressContainer: {
    marginBottom: 20,
  },
  addressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#004d40', // Header text color
  },
  addressText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333', // Text color for address
  },
  contactDetails: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333', // Text color for contact details
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00796b', // Button background color matching theme
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 2,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Contacts;
