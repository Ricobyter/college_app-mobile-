// src/pages/AdminDashboard.js
import React, { useEffect } from "react";
import { View, Text, Pressable, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../store/userSlice";
import PageHeader from "../components/PageHeader";
import Icon from 'react-native-vector-icons/FontAwesome5'; // Import the icon library
import { useNavigation } from "@react-navigation/native";

  const AdminDashboard = () => {
    const navigation = useNavigation();
  const dispatch = useDispatch();
  const { allUsers, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  const totalUsers = allUsers.length;
  const professors = allUsers.filter(
    (user) => user.designation === "Professor"
  ).length;
  const students = allUsers.filter(
    (user) => user.designation === "Student"
  ).length;
  const visitingFaculty = allUsers.filter(
    (user) => user.designation === "Visiting Faculty"
  ).length;

  return (
    <>
      <PageHeader name='Admin Dashboard' navigation={navigation}/>
      <View className="flex-1 p-4 bg-gray-100">
        <View className="flex justify-around flex-row mb-8">
          <View className="bg-blue p-4 w-[44vw] rounded-lg flex flex-col gap-2 justify-center items-center">
            <Icon name="users" size={30} color="white" />
            <Text className="text-lg font-semibold  mb-[-6px]  text-white">Total</Text>
            <Text className="text-lg font-semibold mb-2 text-white">{totalUsers}</Text>
          </View>
          <View className="bg-blue p-4 w-[44vw] rounded-lg flex flex-col gap-2 justify-center items-center">
            <Icon name="user-tie" size={30} color="white" />
            <Text className="text-lg font-semibold  mb-[-6px]  text-white">Professors</Text>
            <Text className="text-lg font-semibold mb-2 text-white">{professors}</Text>
          </View>
        </View>
        <View className="flex justify-around flex-row">
          <View className="bg-blue w-[44vw] p-4 rounded-lg flex flex-col gap-2 justify-center items-center">
            <Icon name="user" size={30} color="white" />
            <Text className="text-lg font-semibold mb-[-6px] text-white">Students</Text>
            <Text className="text-lg font-semibold mb-2 text-white">{students}</Text>
          </View>
          <View className="bg-blue w-[44vw] p-4 rounded-lg flex flex-col gap-2 justify-center items-center">
            <Icon name="user-plus" size={30} color="white" />
            <Text className="text-lg font-semibold  mb-[-6px] text-white">V.F.</Text>
            <Text className="text-lg font-semibold mb-2 text-white">{visitingFaculty}</Text>
          </View>
        </View>

        <Text className='mt-12 text-2xl font-semibold underline text-red'>
          More actions
        </Text>

        <View className="flex-1 mt-4">
          <Pressable
            className="bg-blue p-6 rounded-lg shadow-md mb-4"
            onPress={() => navigation.navigate("AddProfessor")}
          >
            <View className="flex-row items-center justify-between">
              <Text className="text-white text-lg">Add Professor</Text>
              <Icon name="user-tie" size={24} color="white" />
            </View>
          </Pressable>

          <Pressable
            className="bg-green-500 p-6 rounded-lg shadow-md mb-4"
            onPress={() => navigation.navigate("AddStudent")}
          >
            <View className="flex-row items-center justify-between">
              <Text className="text-white text-lg">Add Student</Text>
              <Icon name="user-graduate" size={24} color="white" />
            </View>
          </Pressable>

          <Pressable
            className="bg-yellow-500 p-6 rounded-lg shadow-md"
            onPress={() => navigation.navigate("AddVisitingFaculty")}
          >
            <View className="flex-row items-center justify-between">
              <Text className="text-white text-lg">Add Visiting Faculty</Text>
              <Icon name="user-plus" size={24} color="white" />
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default AdminDashboard;
