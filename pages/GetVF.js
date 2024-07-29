import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVFaculties, deleteUser } from "../store/userSlice"; // Adjust the path as necessary
import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library
import { useNavigation } from "@react-navigation/native";
import { AdminOnly } from "../utils";

const GetVF = () => {
  const dispatch = useDispatch();
  const { vFaculties, loading, error } = useSelector((state) => state.user);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredvFaculties, setFilteredvFaculties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); // Number of items per page
  const navigation = useNavigation();

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
    setCurrentPage(1); // Reset to first page on new search
  }, [searchQuery, vFaculties]);

  const handleDelete = (professorId) => {
    Alert.alert(
      "Delete Professor",
      "Are you sure you want to delete this professor?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => {
            dispatch(deleteUser(professorId));
          }
        }
      ]
    );
  };

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentvFaculties = filteredvFaculties.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredvFaculties.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00796b" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centeredView}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <>
      <ScrollView style={styles.container} >
        {/* Search Input with Icon */}
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            size={20}
            color="#004d40"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search Visiting Faculties"
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
          />
        </View>

        {currentvFaculties && currentvFaculties.length > 0 ? (
          currentvFaculties.map((professor) => (
            <TouchableOpacity
              key={professor.id}
              style={styles.professorCard}
              onPress={() => navigation.navigate("ProfessorProfile", { professorId: professor.id })}
            >
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: professor.photoURL || "https://via.placeholder.com/100" }}
                  style={styles.profileImage}
                />
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.professorName}>{professor.username}</Text>
                <Text style={styles.professorEmail}>{professor.designation}</Text>
              </View>
              <AdminOnly>
                <TouchableOpacity onPress={() => handleDelete(professor.id)}>
                  <Icon name="delete" size={24} color="red" />
                </TouchableOpacity>
              </AdminOnly>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.novFacultiesText}>No Visiting Faculties found</Text>
        )}
      </ScrollView>

      <View style={styles.paginationContainer}>
        <TouchableOpacity
          onPress={handlePreviousPage}
          disabled={currentPage === 1}
          style={[
            styles.paginationButton,
            currentPage === 1 && styles.paginationButtonDisabled,
          ]}
        >
          <Text style={styles.paginationButtonText}>Previous</Text>
        </TouchableOpacity>
        <Text style={styles.pageNumberText}>{currentPage} / {totalPages}</Text>
        <TouchableOpacity
          onPress={handleNextPage}
          disabled={currentPage === totalPages}
          style={[
            styles.paginationButton,
            currentPage === totalPages && styles.paginationButtonDisabled,
          ]}
        >
          <Text style={styles.paginationButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
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
    justifyContent: 'space-between'
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
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e0f2f1',
  },
  paginationButton: {
    backgroundColor: '#00796b', // Shade of green
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  paginationButtonDisabled: {
    backgroundColor: '#b2dfdb', // Lighter shade of green for disabled state
  },
  paginationButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  pageNumberText: {
    marginHorizontal: 20,
    fontSize: 16,
    color: '#004d40',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f2f1',
  },
});

export default GetVF;
