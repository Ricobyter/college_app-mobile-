import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/userSlice'; // Adjust the path as necessary
import LoadingScreen from '../components/LoadingScreen'; // Adjust the path as necessary
import { View, Text, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from '../components/Header';

const ProfessorProfile = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const { professorId } = route.params;
  useEffect(() => {
    if (professorId) {
      dispatch(getUser(professorId));
    }
  }, [dispatch, professorId]);

  const { username, photoURL, educationQualifications,userEmail, birthPlace, designation, bio, phone, loading, error } = useSelector((state) => state.user);


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
        <View className="flex flex-col items-center">
          <Image
            source={{
              uri: photoURL || 'https://via.placeholder.com/150',
            }}
            className="w-40 h-40 rounded-full mb-6"
          />
          <Text className="text-3xl font-bold text-center text-red-600 mb-2">
            {username}
          </Text>
          <Text className="text-xl font-medium text-center text-blue-600 mb-4">
            {designation}
          </Text>
          <Text className="text-lg text-center text-gray-700 mb-2">
            {bio}
          </Text>
          <Text className="text-lg text-center text-gray-700 mb-2">
            Email: {userEmail}
          </Text>
          <Text className="text-lg text-center text-gray-700 mb-2">
            Phone: {phone}
          </Text>
          <Text className="text-lg text-center text-gray-700 mb-2">
            Birth Place: {birthPlace}
          </Text>
          <Text className="text-lg font-medium text-center text-gray-700 mb-4">
            Education Qualifications:
          </Text>
          {educationQualifications && educationQualifications.length > 0 ? (
            educationQualifications.map((qualification, index) => (
              <Text key={index} className="text-center text-gray-600">
                {qualification}
              </Text>
            ))
          ) : (
            <Text className="text-center text-gray-600">No qualifications listed</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default ProfessorProfile;
