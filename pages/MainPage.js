import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet, Image, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // or any other icon library you prefer
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
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [opacity]);

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Image Slider Section */}
        <View style={styles.imageSliderContainer}>
          <Animated.Image
            source={images[currentImageIndex]} // Use currentImageIndex to show the current image
            style={[styles.imageSlider, { opacity }]} // Apply animated opacity
            resizeMode="cover"
          />
        </View>

        {/* Menu Items Section */}
        <View style={styles.menuContainer}>
          <View style={styles.menuRow}>
            <Pressable style={styles.menuItem} onPress={() => navigation.navigate("Programs")}>
              <Icon name="graduation-cap" size={40} color="#00796b" />
              <Text style={styles.menuText}>Programs</Text>
            </Pressable>

            <Pressable style={styles.menuItem} onPress={() => navigation.navigate("GetProfessors")}>
              <Icon name="users" size={40} color="#00796b" />
              <Text style={styles.menuText}>People</Text>
            </Pressable>
          </View>

          <View style={styles.menuRow}>
            <Pressable style={styles.menuItem} onPress={() => navigation.navigate("Research")}>
              <Icon name="flask" size={40} color="#00796b" />
              <Text style={styles.menuText}>Research</Text>
            </Pressable>

            <Pressable style={styles.menuItem} onPress={() => navigation.navigate("Placement")}>
              <Icon name="briefcase" size={40} color="#00796b" />
              <Text style={styles.menuText}>Placement</Text>
            </Pressable>
          </View>
          <View style={styles.menuRow}>
            <Pressable style={styles.menuItem} onPress={() => navigation.navigate('News')}>
              <Icon name="newspaper-o" size={40} color="#00796b" />
              <Text style={styles.menuText}>News & Events</Text>
            </Pressable>

            <Pressable style={styles.menuItem} onPress={() => navigation.navigate('Contacts')}>
              <Icon name="phone" size={40} color="#00796b" />
              <Text style={styles.menuText}>Contacts</Text>
            </Pressable>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1', // Background color matching the theme
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  imageSliderContainer: {
    height: 200, // Adjust height of the image slider container
    width: '100%', // Make sure it takes full width
    marginBottom: 52, // Adjust as needed for spacing
  },
  imageSlider: {
    width: '100%',
    height: '100%',
    borderRadius: 10, // Optional: Rounded corners for image slider
  },
  menuContainer: {
    flexGrow: 1,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 52,
  },
  menuItem: {
    width: '45%', // Adjust width as needed for spacing
    height: 120, // Adjust height for menu item container
    backgroundColor: '#ffffff', // Matching menu item background
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    paddingVertical: 10, // Add padding for better spacing
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00796b', // Menu text color matching the theme
    textAlign: 'center',
    marginTop: 8,
  },
});

export default MainPage;
