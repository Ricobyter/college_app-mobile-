import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header'; // Import Header component

const Announcement = () => {
  // Sample data for announcements
  const announcements = [
    { title: 'New Research Lab Opening', date: 'July 30, 2024', description: 'We are excited to announce the opening of a new research lab focused on AI and machine learning.' },
    { title: 'Semester Exam Schedule', date: 'August 5, 2024', description: 'The exam schedule for the upcoming semester has been released. Please check the student portal for details.' },
    { title: 'Guest Lecture on Cybersecurity', date: 'August 15, 2024', description: 'A guest lecture on cybersecurity will be held next week. All students are encouraged to attend.' },
    // Add more announcements as needed
  ];

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Announcements</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {announcements.map((announcement, index) => (
            <View key={index} style={styles.announcementCard}>
              <Text style={styles.announcementTitle}>{announcement.title}</Text>
              <Text style={styles.announcementDate}>{announcement.date}</Text>
              <Text style={styles.announcementDescription}>{announcement.description}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1', // Background color matching the theme
  },
  contentContainer: {
    flex: 1,
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
  scrollContainer: {
    flexGrow: 1,
  },
  announcementCard: {
    backgroundColor: '#ffffff', // Card background color
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3, // Shadow effect for Android
  },
  announcementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  announcementDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  announcementDescription: {
    fontSize: 16,
    color: '#333',
  },
});

export default Announcement;
