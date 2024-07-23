import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Image, ActivityIndicator, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { clearUser } from "../store/userSlice";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { uid, username, photoURL, isLoading, userEmail } = useSelector((state) => state.user);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (uid) {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);
  }, [uid]);

  const handleSignOut = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      dispatch(clearUser());
      props.navigation.navigate("Login");
    } catch (error) {
      console.error("Log Out Error", error.message);
    }
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
      <View style={styles.sidebarContainer}>
        <View style={styles.userInfoContainer}>
          {!isLoggedIn ? (
            <View style={styles.notLoggedInContainer}>
              <Text style={styles.notLoggedInText}>You are not logged in</Text>
              <Pressable style={styles.loginNowButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginNowButtonText}>Login Now</Text>
              </Pressable>
            </View>
          ) : (
            <View style={styles.loggedInContainer}>
              <View>
                {isLoading ? (
                  <ActivityIndicator size="large" color="#6ec6ff" />
                ) : (
                  <Image
                    source={{ uri: photoURL }}
                    style={styles.userImage}
                  />
                )}
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.userEmail}>{userEmail}</Text>
              </View>
            </View>
          )}
        </View>
        <Pressable style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#004d40" />
          <Text style={styles.menuItemText}>Home</Text>
        </Pressable>
        {isLoggedIn && (
          <Pressable style={styles.menuItem} onPress={() => navigation.navigate('UserProfile')}>
            <Icon name="user" size={24} color="#004d40" />
            <Text style={styles.menuItemText}>My Profile</Text>
          </Pressable>
        )}
        <Pressable style={styles.menuItem} onPress={() => navigation.navigate('Facilities')}>
          <Icon name="building" size={24} color="#004d40" />
          <Text style={styles.menuItemText}>Facilities</Text>
        </Pressable>
        <Pressable style={styles.menuItem} onPress={() => navigation.navigate('Gallery')}>
          <Icon name="photo" size={24} color="#004d40" />
          <Text style={styles.menuItemText}>Gallery</Text>
        </Pressable>
        <Pressable style={styles.menuItem} onPress={() => navigation.navigate('AdminDashboard')}>
          <Icon name="tachometer" size={24} color="#004d40" />
          <Text style={styles.menuItemText}>Dashboard</Text>
        </Pressable>
        <Pressable style={styles.menuItem} onPress={() => navigation.navigate('Info')}>
          <Icon name="info-circle" size={24} color="#004d40" />
          <Text style={styles.menuItemText}>About App</Text>
        </Pressable>
        <View style={styles.logoutContainer}>
        {isLoggedIn && (
          <Pressable style={styles.logoutButton} onPress={handleSignOut}>
            <Icon name="sign-out" size={24} color="#00796b" />
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </Pressable>
        )}
        
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: '#e0f2f1', // Light cyan background
  },
  sidebarContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  userInfoContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#b2ebf2',
    paddingBottom: 20,
  },
  notLoggedInContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
  notLoggedInText: {
    color: '#00796b',
    fontSize: 18,
    marginBottom: 10,
  },
  loginNowButton: {
    backgroundColor: '#004d40',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  loginNowButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  loggedInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b2ebf2', // Light cyan background for user info
    padding: 10,
    borderRadius: 5,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    marginLeft: 10,
  },
  username: {
    color: '#004d40',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    color: '#004d40',
    fontSize: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#b2ebf2', // Light cyan background for menu items
    borderRadius: 5,
    marginBottom: 10,
  },
  menuItemText: {
    color: '#004d40',
    fontSize: 18,
    marginLeft: 10,
  },
  logoutContainer: {
    borderTopWidth: 1,
    borderTopColor: '#b2ebf2',
    marginTop: 20,
    paddingTop: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#004d40',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#e0f7fa',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default Sidebar;
