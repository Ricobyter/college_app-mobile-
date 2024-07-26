import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getvFaculties, getVFaculties } from "../store/userSlice"; // Adjust the path as necessary
import LoadingScreen from "../components/LoadingScreen"; // Adjust the path as necessary
import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

const GetVF = ({ navigation }) => {
  const dispatch = useDispatch();
  const { vFaculties, loading, error } = useSelector((state) => state.user);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredvFaculties, setFilteredvFaculties] = useState([]);

  useEffect(() => {
    dispatch(getVFaculties());
  }, [dispatch]);

  useEffect(() => {
    // Filter vFaculties based on search query
    if (searchQuery) {
      setFilteredvFaculties(
        vFaculties.filter(professor =>
          professor.username.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredvFaculties(vFaculties);
    }
  }, [searchQuery, vFaculties]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <View style={styles.centeredView}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} >
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Visting Faculties</Text>
      </View>

      {/* Search Input with Icon */}
      <View style={styles.searchContainer}>
        <Icon
          name="search"
          size={20}
          color="#004d40"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search vFaculties"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
      </View>

      {filteredvFaculties && filteredvFaculties.length > 0 ? (
        filteredvFaculties.map((professor) => (
          <TouchableOpacity
            key={professor.id}
            style={styles.professorCard}
            onPress={() => navigation.navigate("ProfessorProfile", { professorId: professor.id })}
            className =''
          >
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: professor.photoURL || "https://via.placeholder.com/100" }}
                style={styles.profileImage}
              />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.professorName}>{professor.username}</Text>
              <Text style={styles.professorEmail}>{professor.email}</Text>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.novFacultiesText}>No vFaculties found</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#e0f2f1',
    paddingBottom: 50
  },
  headerContainer: {
    marginBottom: 20,
    backgroundColor: '#00796b', // Header background color matching Gallery
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24, // Same as in Gallery
    fontWeight: 'bold',
    color: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#004d40',
  },
  professorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  imageContainer: {
    marginRight: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  detailsContainer: {
    flex: 1,
  },
  professorName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004d40',
  },
  professorEmail: {
    fontSize: 16,
    color: '#004d40',
  },
  novFacultiesText: {
    fontSize: 16,
    color: '#004d40',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f2f1',
  },
  errorText: {
    fontSize: 18,
    color: '#004d40',
  },
});

export default GetVF;
