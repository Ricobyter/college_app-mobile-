import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfessors } from "../store/userSlice"; // Adjust the path as necessary
import LoadingScreen from "../components/LoadingScreen"; // Adjust the path as necessary
import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

const GetProfessors = ({navigation}) => {
  const dispatch = useDispatch();
  const { professors, loading, error } = useSelector((state) => state.user);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProfessors, setFilteredProfessors] = useState([]);

  useEffect(() => {
    dispatch(getProfessors());
  }, [dispatch]);

  useEffect(() => {
    // Filter professors based on search query
    if (searchQuery) {
      setFilteredProfessors(
        professors.filter(professor =>
          professor.username.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProfessors(professors);
    }
  }, [searchQuery, professors]);

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
        
        {/* Search Input with Icon */}
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            size={20}
            color="#999" // Adjust color as needed
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search Professors"
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
          />
        </View>

        {filteredProfessors && filteredProfessors.length > 0 ? (
          filteredProfessors.map((professor) => (
            <TouchableOpacity
              key={professor.id}
              className="bg-white p-6 mb-8 rounded-lg shadow-lg shadow-gray-600"
              onPress={() => navigation.navigate("ProfessorProfile", {professorId: professor.id})}
            >
              <View className="flex flex-col items-center mb-2">
                <Image
                  source={{
                    uri:
                      professor.photoURL || "https://via.placeholder.com/100",
                  }}
                  className="w-32 h-32 rounded-full"
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
            </TouchableOpacity>
          ))
        ) : (
          <Text className="text-center text-gray-500">No professors found</Text>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
});

export default GetProfessors;
