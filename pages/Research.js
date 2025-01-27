import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your icon library
import Header from '../components/Header'; // Import the Header component

const Research = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explore Our Research</Text>
          <Text style={styles.sectionText}>
            Dive into our ongoing research, publications, and projects. Tap any section to learn more.
          </Text>
        </View>

        <View style={styles.researchCategory}>
          <Pressable
            style={styles.researchItem}
            onPress={() => navigation.navigate('Publications')}
          >
            <Icon name="book" size={30} color="#4CAF50" style={styles.researchIcon} />
            <View style={styles.researchInfo}>
              <Text style={styles.researchTitle}>Publications</Text>
              <Text style={styles.researchDescription}>Explore our published research papers and articles.</Text>
            </View>
          </Pressable>

          <Pressable
            style={styles.researchItem}
            onPress={() => navigation.navigate('Projects')}
          >
            <Icon name="cogs" size={30} color="#2196F3" style={styles.researchIcon} />
            <View style={styles.researchInfo}>
              <Text style={styles.researchTitle}>Projects</Text>
              <Text style={styles.researchDescription}>Discover the innovative projects currently underway.</Text>
            </View>
          </Pressable>

          <Pressable
            style={styles.researchItem}
            onPress={() => navigation.navigate('ResearchW')}
          >
            <Icon name="flask" size={30} color="#FF9800" style={styles.researchIcon} />
            <View style={styles.researchInfo}>
              <Text style={styles.researchTitle}>Research Work</Text>
              <Text style={styles.researchDescription}>Learn about our research methodologies and findings.</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1', // Light teal background
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 20,
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
  sectionText: {
    fontSize: 16,
    color: '#004d40', // Dark teal
  },
  researchCategory: {
    marginBottom: 20,
  },
  researchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3, // Shadow effect for Android
  },
  researchIcon: {
    marginRight: 15,
  },
  researchInfo: {
    flex: 1,
  },
  researchTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
  },
  researchDescription: {
    fontSize: 16,
    color: '#666',
  },
});

export default Research;