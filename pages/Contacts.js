import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
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

  const openSocialMedia = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Contacts</Text>
        </View>

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
        </View>

        <View style={styles.contactInfoContainer}>
        <Text style={styles.officeTitle}>Office Timings:</Text>
          <Text style={styles.officeTimings}>
            Mon - Fri / 9:00 AM - 05:00 PM
            {"\n"}Tel: 0761-2794261 {"\n"}
            Fax: +91-761-2632524
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={openGoogleMap} style={styles.button}>
            <Icon name="map-marker" size={20} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>View on Google Maps</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={openFeedbackForm} style={styles.button}>
            <Icon name="envelope" size={20} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Feedback / General Query</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialMediaContainer}>
          <TouchableOpacity onPress={() => openSocialMedia('https://x.com/iiitdmjbp')} style={styles.socialMediaButton}>
            <Icon name="twitter" size={30} color="#00796b" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openSocialMedia('https://www.linkedin.com/school/indian-institute-of-information-technology-design-and-manufacturing-jabalpur')} style={styles.socialMediaButton}>
            <Icon name="linkedin" size={30} color="#00796b" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openSocialMedia('https://www.facebook.com/iiitdm.jbp')} style={styles.socialMediaButton}>
            <Icon name="facebook" size={30} color="#00796b" />
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
  addressContainer: {
    marginBottom: 20,
    backgroundColor: '#ffffff', // White background for address section
    borderRadius: 10,
    padding: 15,
    elevation: 3, // Shadow effect for Android
  },
  addressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#004d40', // Dark teal
  },
  officeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#004d40', // Dark teal
  },
  addressText: {
    fontSize: 16,
    color: '#333', // Text color for address
  },
  contactInfoContainer: {
    marginBottom: 20,
    backgroundColor: '#ffffff', // White background for contact info section
    borderRadius: 10,
    padding: 15,
    elevation: 3, // Shadow effect for Android
  },
  officeTimings: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333', // Text color for office timings
  },
  contactDetails: {
    fontSize: 16,
    color: '#333', // Text color for contact details
  },
  buttonContainer: {
    marginBottom: 20,
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
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: -20,
  },
  socialMediaButton: {
    padding: 10,
  },
});

export default Contacts;