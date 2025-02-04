import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet, Image, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';

// Image sources
const images = [
  require('../assets/images/Computer-Lab.jpg'),
  require('../assets/images/green_view.jpeg'),
  require('../assets/images/a3.jpg'),
  require('../assets/images/IMG_0220.png'),
  require('../assets/images/a1-1.jpg'),
  require('../assets/images/a2.jpg'),
];

const MainPage = ({ navigation }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [opacity]);

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Animated.Image
            source={images[currentImageIndex]}
            style={[styles.heroImage, { opacity }]}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroText}>Welcome to IIITDMJ</Text>
            <Text style={styles.heroSubText}>Excellence in Education & Research</Text>
          </View>
        </View>

        {/* Quick Links */}
        <View style={styles.quickLinksContainer}>
          <Text style={styles.sectionTitle}>Important Shortcuts</Text>
          <View style={styles.quickLinksGrid}>
            <Pressable style={styles.quickLinkItem} onPress={() => navigation.navigate("Home")}>
              <Icon name="graduation-cap" size={30} color="#00796b" />
              <Text style={styles.quickLinkText}>Programs</Text>
            </Pressable>

            <Pressable style={styles.quickLinkItem} onPress={() => navigation.navigate("GetPeople")}>
              <Icon name="users" size={30} color="#00796b" />
              <Text style={styles.quickLinkText}>People</Text>
            </Pressable>

            <Pressable style={styles.quickLinkItem} onPress={() => navigation.navigate("Research")}>
              <Icon name="flask" size={30} color="#00796b" />
              <Text style={styles.quickLinkText}>Research</Text>
            </Pressable>

            <Pressable style={styles.quickLinkItem} onPress={() => navigation.navigate("Placement")}>
              <Icon name="briefcase" size={30} color="#00796b" />
              <Text style={styles.quickLinkText}>Placement</Text>
            </Pressable>
          </View>
        </View>

        {/* Highlighted Sections */}
        <View style={styles.highlightedSection}>
          <Text style={styles.sectionTitle}>Featured</Text>
          <Pressable style={styles.highlightedCard} onPress={() => navigation.navigate('News')}>
            <Icon name="newspaper-o" size={30} color="#00796b" />
            <Text style={styles.highlightedText}>News & Events</Text>
          </Pressable>
          <Pressable style={styles.highlightedCard} onPress={() => navigation.navigate('Contacts')}>
            <Icon name="phone" size={30} color="#00796b" />
            <Text style={styles.highlightedText}>Contacts</Text>
          </Pressable>
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
  },
  heroSection: {
    position: 'relative',
    height: 250,
    width: '100%',
  },
  heroImage: {
    height: '100%',
    width: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  heroSubText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 5,
  },
  quickLinksContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004d40',
    marginBottom: 10,
  },
  quickLinksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickLinkItem: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
  },
  quickLinkText: {
    marginTop: 10,
    fontSize: 16,
    color: '#00796b',
  },
  highlightedSection: {
    paddingHorizontal: 20,
  },
  highlightedCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },
  highlightedText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#00796b',
  },
});

export default MainPage;