import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigation = useNavigation();
  const { uid } = useSelector((state) => state.user);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (uid) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [uid]);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>IIITDM Jabalpur</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => navigation.navigate('Notification')} style={styles.infoButton}>
          <Icon name="bell" size={24} color="#fff" />
        </Pressable>
        <Pressable onPress={() => navigation.toggleDrawer()} style={styles.menuButton}>
          <Icon name="bars" size={24} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#00796b', // Header background color matching theme
    elevation: 5, // Shadow effect for Android
    marginTop:0, // Margin to move header down
    marginBottom: 10, // Optional: Adds space below header
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoButton: {
    padding: 10,
    marginRight: 15, // Space between info and menu buttons
  },
  menuButton: {
    padding: 10,
  },
});

export default Header;
