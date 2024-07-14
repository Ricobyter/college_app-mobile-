import { View, Text, Image, Button, Pressable } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  return (
    <View className="flex flex-col  justify-center items-center h-full bg-white relative">
      <Pressable
        className="absolute top-4 right-4 bg-red p-2"
        onPress={() => navigation.navigate("MainPage")}
      >
        <Text className="text-white text-xl font-semibold">Skip</Text>
      </Pressable>
      <Image
        source={require("../assets/images/logo.png")}
        style={{ width: 110, height: 110 }}
        className="mb-10"
      />
      <Text className="text-[#e33b38] text-3xl italic font-bold">
        IIITDMJ App
      </Text>

      <View className="mt-10">
        <Pressable
          className="bg-[#0fd2b2] rounded-3xl py-3 mb-3 w-[75vw]"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-white text-xl font-semibold text-center">
            Login
          </Text>
        </Pressable>
        <Pressable
          className="bg-[#e33b38] rounded-3xl py-3 mb-3 w-[75vw]"
          onPress={() => navigation.navigate("Signup")}
        >
          <Text className="text-white text-xl font-semibold text-center">
            Signup
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
