import { View, Text, Image, Pressable, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { useEffect, useState } from 'react';
import { Animated } from 'react-native';

export default function Home({ navigation }) {

  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    // <View style={styles.container}>
    //   <Pressable
    //     style={styles.skipButton}
    //     onPress={() => navigation.navigate("MainPage")}
    //   >
    //     <Text style={styles.skipText}>Skip</Text>
    //   </Pressable>
    //   <Image
    //     source={require("../assets/images/logo.png")}
    //     style={styles.logo}
    //   />
    //   <Text style={styles.title}>IIITDMJ App</Text>

    //   <View style={styles.buttonContainer}>
    //     <Pressable
    //       style={styles.loginButton}
    //       onPress={() => navigation.navigate("Login")}
    //     >
    //       <Text style={styles.buttonText}>Login</Text>
    //     </Pressable>
    //   </View>

    // </View>
    <ImageBackground
    source={require('../assets/images/college-2.jpg')} // Replace with your image path
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    imageStyle={{ opacity: 0.8 }} // Adjust opacity here
  >
    <Animated.Text
      style={{
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        opacity: fadeAnim,
      }}
    >
      IIITDMJ App
    </Animated.Text>
  </ImageBackground>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#e0f2f1', 
//     position: 'relative',
//     padding: 20, 
//   },
//   skipButton: {
//     position: 'absolute',
//     top: 50, 
//     right: 20,
//     backgroundColor: '#00796b', 
//     padding: 10,
//     borderRadius: 10,
//   },
//   skipText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   logo: {
//     width: 120,
//     height: 120,
//     marginBottom: -10,
//   },
//   title: {
//     fontSize: 32,
//     color: '#00796b', 
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     marginTop: 20,
//     width: '80%',
//   },
//   loginButton: {
//     backgroundColor: '#004d40', 
//     borderRadius: 30,
//     paddingVertical: 15,
//     marginBottom: 15,
//     alignItems: 'center',
//   },
//   signupButton: {
//     backgroundColor: '#00796b', 
//     borderRadius: 30,
//     paddingVertical: 15,
//     marginBottom: 15,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });
