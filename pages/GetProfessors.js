import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfessors, deleteUser } from "../store/userSlice"; // Adjust path as necessary
import LoadingScreen from "../components/LoadingScreen"; // Adjust path as necessary
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity, Alert, RefreshControl } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icon library
import { useNavigation } from "@react-navigation/native";
import { AdminOnly } from "../utils";

const GetProfessors = () => {
  const dispatch = useDispatch();
  const { professors, loading, error } = useSelector((state) => state.user);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProfessors, setFilteredProfessors] = useState([]);
  const [visibleProfessors, setVisibleProfessors] = useState(10); // Initial number of items to display
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getProfessors());
  }, [dispatch]);

  useEffect(() => {
    // Filter and sort professors alphabetically by username
    let updatedProfessors = professors.filter(professor =>
      professor.username.toLowerCase().includes(searchQuery.toLowerCase())
    );

    updatedProfessors = updatedProfessors.sort((a, b) =>
      a.username.localeCompare(b.username)
    );

    setFilteredProfessors(updatedProfessors);
    setVisibleProfessors(10); // Reset visible items on new search
  }, [searchQuery, professors]);

  const handleDelete = (professorId) => {
    Alert.alert(
      "Delete Professor",
      "Are you sure you want to delete this professor?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: () => dispatch(deleteUser(professorId)) }
      ]
    );
  };

  // Load more items when scrolling
  const handleLoadMore = () => {
    if (visibleProfessors < filteredProfessors.length) {
      setVisibleProfessors(prevCount => prevCount + 10); // Load next batch of items
    }
  };

  // Refresh the list
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getProfessors()).then(() => setRefreshing(false));
  }, [dispatch]);

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
    <View style={styles.container}>
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#004d40" style={styles.searchIcon} />
        <TextInput
          placeholder="Search Professors"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
      </View>

      {/* Professor List with Infinite Scroll */}
      <FlatList
        data={filteredProfessors.slice(0, visibleProfessors)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.professorCard}>
            <TouchableOpacity
              style={styles.cardContent}
              onPress={() => navigation.navigate("ProfessorProfile", { professorId: item.id })}
            >
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.photoURL || "https://via.placeholder.com/100" }}
                  style={styles.profileImage}
                />
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.professorName}>{item.username}</Text>
                <Text style={styles.professorEmail}>{item.designation}</Text>
              </View>
            </TouchableOpacity>

            <AdminOnly>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Icon name="delete" size={24} color="red" />
              </TouchableOpacity>
            </AdminOnly>
          </View>
        )}
        onEndReached={handleLoadMore} // Load more when scrolling reaches end
        onEndReachedThreshold={0.5} // Trigger loading when 50% of remaining list is seen
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListEmptyComponent={<Text style={styles.noProfessorsText}>No professors found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    backgroundColor: '#e0f2f1',
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
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
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
  noProfessorsText: {
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

export default GetProfessors;
