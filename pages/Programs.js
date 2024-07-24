import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your icon library

const Programs = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Programs</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Explore Our Programs</Text>
        <Pressable onPress={()=> navigation.goBack()}>
          <Text>GO back</Text>
        </Pressable>
        <Text style={styles.sectionText}>
          Discover the range of programs we offer, including undergraduate, 
          postgraduate, and doctoral degrees. Click on any program to learn more.
        </Text>
      </View>

      <View style={styles.programCategory}>
        <Pressable
          style={styles.programItem}
          onPress={() => navigation.navigate('Btech')}
        >
          <Icon name="graduation-cap" size={30} color="#4CAF50" style={styles.programIcon} />
          <View style={styles.programInfo}>
            <Text style={styles.programTitle}>B.Tech Programs</Text>
            <Text style={styles.programDescription}>Explore our variety of undergraduate programs.</Text>
          </View>
        </Pressable>

        <Pressable
          style={styles.programItem}
          onPress={() => navigation.navigate('Mtech')}
        >
          <Icon name="university" size={30} color="#2196F3" style={styles.programIcon} />
          <View style={styles.programInfo}>
            <Text style={styles.programTitle}>M.Tech Programs</Text>
            <Text style={styles.programDescription}>Advanced knowledge and research opportunities.</Text>
          </View>
        </Pressable>

        <Pressable
          style={styles.programItem}
          onPress={() => navigation.navigate('Phd')}
        >
          <Icon name="flask" size={30} color="#FF9800" style={styles.programIcon} />
          <View style={styles.programInfo}>
            <Text style={styles.programTitle}>Ph.D Programs</Text>
            <Text style={styles.programDescription}>Deep dive into research with our Ph.D. programs.</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50, // Increased top padding to move content downwards
    backgroundColor: '#e0f2f1', // Light teal background
    flexGrow: 1,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#00796b', // Dark teal background
    paddingVertical: 10,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 26, // Increased size for prominence
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff', // White background for sections
    borderRadius: 10,
    elevation: 3, // Subtle shadow effect
  },
  sectionTitle: {
    fontSize: 22, // Consistent with Btech page
    fontWeight: 'bold',
    color: '#004d40', // Dark teal
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#004d40', // Dark teal
  },
  programCategory: {
    marginBottom: 20,
  },
  programItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3, // Shadow effect for Android
  },
  programIcon: {
    marginRight: 15,
  },
  programInfo: {
    flex: 1,
  },
  programTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
  },
  programDescription: {
    fontSize: 16,
    color: '#666',
  },
});

export default Programs;
