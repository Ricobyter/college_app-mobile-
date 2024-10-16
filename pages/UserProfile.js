import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Alert,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/userSlice";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons
import { signOut } from "firebase/auth"; // Import Firebase signOut
import { FIREBASE_AUTH } from "../FirebaseConfig"; // Import your Firebase configuration
import { clearUser } from "../store/userSlice"; // Import clearUser action
import Header from "../components/Header";

const UserProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { uid, username, photoURL, isLoading, designation } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (uid) {
      dispatch(getUser(uid));
    }
  }, [dispatch, uid]);
  
  if (uid === "") {
    return (
      <View style={styles.centeredView}>
        <Text style={styles.notLoggedInText}>You are not logged in</Text>
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginButtonText}>Login Now</Text>
        </Pressable>
      </View>
    );
  }

  const handleSignOut = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      navigation.navigate("Login"); // Navigate to login page
      dispatch(clearUser()); // Clear user data from Redux store
    } catch (error) {
      Alert.alert("Sign Out Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>User Profile</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                photoURL ||
                "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1721141254~exp=1721141854~hmac=16b7be7a26efb621a8073b1e8204f34be34595f0d723d5c8ae9279435c66a468",
            }}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.designation}>{designation}</Text>
        </View>
        <View style={styles.menuContainer}>
          <Pressable
            style={styles.menuItem}
            onPress={() => navigation.navigate("UserPersonalInfo")}
          >
            <View style={styles.menuIconTextContainer}>
              <Icon
                name="user"
                size={28}
                color="#004d40"
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>Personal Details</Text>
            </View>
          </Pressable>

          <Pressable
            style={styles.menuItem}
            onPress={() => navigation.navigate("ShowDegrees")}
          >
            <View style={styles.menuIconTextContainer}>
              <Icon
                name="graduation-cap"
                size={28}
                color="#004d40"
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>Education</Text>
            </View>
          </Pressable>

          <Pressable
            style={styles.menuItem}
            onPress={() => navigation.navigate("UserSecurity")}
          >
            <View style={styles.menuIconTextContainer}>
              <Icon
                name="key"
                size={28}
                color="#004d40"
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>Security</Text>
            </View>
          </Pressable>

          <Pressable style={styles.menuItem} onPress={handleSignOut}>
            <View style={styles.menuIconTextContainer}>
              <Icon
                name="cog"
                size={28}
                color="#004d40"
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>Signout</Text>
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
    backgroundColor: "#e0f2f1", // Background color matching the theme
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#ffffff", // Matching Programs header background
    paddingVertical: 10,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 26, // Matching Programs header text size
    fontWeight: "bold",
    color: "#004d40",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
  },
  detailsContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  username: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#004d40",
  },
  designation: {
    fontSize: 18,
    color: "#004d40",
  },
  menuContainer: {
    marginTop: 30,
    width: "100%",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff", // Matching menu item background
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2, // Shadow effect for Android
  },
  menuIconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#004d40",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0f2f1", // Background color matching the theme
  },
  notLoggedInText: {
    fontSize: 20,
    color: "#004d40",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#00796b",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default UserProfile;
