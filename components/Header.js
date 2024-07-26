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
      <Pressable onPress={() => navigation.toggleDrawer()} style={styles.menuButton}>
        <Icon name="bars" size={24} color="#fff" />
      </Pressable>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>IIITDM Jabalpur</Text>
      </View>
      <Pressable onPress={() => navigation.navigate('Notification')} style={styles.infoButton}>
        <Icon name="bell" size={23} color="#fff" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#00796b', // Header background color matching theme
    elevation: 5, // Shadow effect for Android
    marginTop: 30, // Margin to move header down
    borderBottomColor: '#ccc',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the logo and title
    flex: 1,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 5, // Reduced margin between logo and title
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  menuButton: {
    padding: 10,
  },
  infoButton: {
    padding: 10,
  },
});

export default Header;
