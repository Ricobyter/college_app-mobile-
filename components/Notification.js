import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { collection, getDocs, orderBy, query, doc, deleteDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../FirebaseConfig';
import Header from '../components/Header'; // Import Header component
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library
import { AdminOnly } from "../utils";

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

  const handleDelete = (announcementId) => {
    Alert.alert(
      "Delete Announcement",
      "Are you sure you want to delete this announcement?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: async () => {
            try {
              await deleteDoc(doc(FIREBASE_DB, 'announcements', announcementId));
              setAnnouncements(announcements.filter(announcement => announcement.id !== announcementId));
            } catch (error) {
              console.error('Error deleting announcement: ', error);
            }
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Announcements</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {announcements.map((announcement) => (
            <View key={announcement.id} style={styles.announcementCard}>
              <View style={styles.announcementHeader}>
                <Text style={styles.announcementTitle}>{announcement.title}</Text>
                <AdminOnly>
                <TouchableOpacity onPress={() => handleDelete(announcement.id)}>
                  <Icon name="delete" size={24} color="red" />
                </TouchableOpacity>
                </AdminOnly>
              </View>
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
  announcementHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
