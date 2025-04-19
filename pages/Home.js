import { View, Text, Animated, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";

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
    <View style={styles.container}>
      {/* Animated Icon in the Middle */}
      <Animated.Image
        source={require("../assets/images/logo.png")} // Replace with your actual icon
        style={[styles.logo, { opacity: fadeAnim }]}
      />

      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        IIITDMJ CSE
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0f2f1",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#00796b",
  },
});
