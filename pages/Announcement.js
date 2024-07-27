import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { FIREBASE_DB } from '../FirebaseConfig';
import Header from '../components/Header'; // Import Header component

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const q = query(collection(FIREBASE_DB, 'announcements'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const fetchedAnnouncements = [];
        querySnapshot.forEach((doc) => {
          fetchedAnnouncements.push({ ...doc.data(), id: doc.id });
        });
        setAnnouncements(fetchedAnnouncements);
      } catch (error) {
        console.error('Error fetching announcements: ', error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <>
    
      <Header />
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Announcements</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {announcements.map((announcement) => (
            <View key={announcement.id} style={styles.announcementCard}>
              <Text style={styles.announcementTitle}>{announcement.title}</Text>
              <Text style={styles.announcementDate}>{announcement.date}</Text>
              <Text style={styles.announcementDescription}>{announcement.description}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
    </>
    
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