import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Header from '../components/Header';

const NewsEvents = () => {
  const [showCurrent, setShowCurrent] = useState(true); // State to track current or archive view

  // Example data for news and events
  const newsData = [
    // Add news data here if needed
  ];

  const archiveData = [
    { title: 'Conference on Brain Interface Computer Library', date: '2021-09-30', description: 'Brain Interface computer Library Description', link: 'http://cse.iiitdmj.ac.in/www.BrainInterfaceComputerLibrary.com' },
    { title: 'PR101, PR201 Project Idea Submission', date: '2017-09-15', description: 'IIITDMJ CSE students of B.Tech 2016 and 2017 batch need to submit project ideas for PR101 and PR201.', link: 'https://docs.google.com/forms/d/e/1FAIpQLSeECvFMeZRzR-FabUIMvurT92PAOKgkRyqi7toY1IG8JoSM1g/formrestricted' },
  ];

  const handleLinkPress = (url) => {
    Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
  };

  return (
    <>
    <Header />
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>News & Events</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity onPress={() => setShowCurrent(true)} style={[styles.tab, showCurrent ? styles.activeTab : styles.inactiveTab]}>
          <Text style={[styles.tabTitle, showCurrent ? styles.activeTabText : styles.inactiveTabText]}>Current</Text>
        </TouchableOpacity>
        
        {showCurrent && (
          <View style={styles.subsection}>
            {newsData.map((item, index) => (
              <View key={index} style={styles.newsItem}>
                <Text style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.newsDate}>{item.date}</Text>
                <Text style={styles.newsDescription}>{item.description}</Text>
              </View>
            ))}
          </View>
        )}

        <TouchableOpacity onPress={() => setShowCurrent(false)} style={[styles.tab, !showCurrent ? styles.activeTab : styles.inactiveTab]}>
          <Text style={[styles.tabTitle, !showCurrent ? styles.activeTabText : styles.inactiveTabText]}>Archive</Text>
        </TouchableOpacity>
        
        {!showCurrent && (
          <View style={styles.subsection}>
            {archiveData.map((item, index) => (
              <View key={index} style={styles.newsItem}>
                <Text style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.newsDate}>{item.date}</Text>
                <Text style={styles.newsDescription}>{item.description}</Text>
                {item.link && (
                  <TouchableOpacity onPress={() => handleLinkPress(item.link)} style={styles.linkButton}>
                    <Text style={styles.linkText}>Read More</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 50,
    backgroundColor: '#e0f2f1', // Matching overall theme background
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  headerContainer: {
    marginBottom: 20,
    backgroundColor: '#00796b', // Header background color
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    backgroundColor: '#ffffff', // Section background color
    borderRadius: 8,
    elevation: 3, // Shadow effect for Android
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#004d40', // Border color
    marginBottom: 8,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#e0f2f1', // Background color for active tab
  },
  inactiveTab: {
    backgroundColor: '#ffffff', // Background color for inactive tab
  },
  tabTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#00796b', // Active tab text color
  },
  inactiveTabText: {
    color: '#004d40', // Inactive tab text color
  },
  subsection: {
    marginBottom: 16,
  },
  newsItem: {
    marginBottom: 12,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  newsDate: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
  },
  newsDescription: {
    fontSize: 16,
    color: '#555',
  },
  linkButton: {
    marginTop: 8,
    padding: 10,
    backgroundColor: '#00796b', // Link button background color
    borderRadius: 5,
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default NewsEvents;
