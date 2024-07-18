import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfessors } from "../store/userSlice"; // Adjust the path as necessary
import LoadingScreen from "../components/LoadingScreen"; // Adjust the path as necessary
import { View, Text, Image, ScrollView } from "react-native";
import Header from "../components/Header";

const GetProfessors = () => {
  const dispatch = useDispatch();
  const { professors, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getProfessors());
  }, [dispatch]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <View className="p-4 min-h-screen flex justify-center items-center">
        <Text className="text-red-500">Error: {error}</Text>
      </View>
    );
  }

  return (
    <>
      <Header />
      <ScrollView className="p-10 bg-white">
        <Text className="text-2xl font-bold mb-4 text-center text-red mt-4">
          Professors
        </Text>
        {professors &&
          professors.map((professor) => (
            <View
              key={professor.id}
              className="bg-white p-6 mb-8 rounded-lg shadow-lg shadow-gray-600 "
            >
              <View className="flex flex-col items-center mb-2">
                <Image
                  source={{
                    uri:
                      professor.photoURL || "https://via.placeholder.com/100",
                  }}
                  className="w-32 h-32 rounded-full  "
                />
                <View className='mt-4'>
                  <Text className="text-xl font-semibold text-center text-red">
                    {professor.username}
                  </Text>
                  <Text className="text-blue italic font-semibold">
                    {professor.email}
                  </Text>
                </View>
              </View>
            </View>
          ))}
      </ScrollView>
    </>
  );
};

export default GetProfessors;
