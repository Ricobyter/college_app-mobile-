import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStaff, deleteUser } from "../store/userSlice"; // Adjust path as necessary
import LoadingScreen from "../components/LoadingScreen"; // Adjust path as necessary
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity, Alert, RefreshControl } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
import { AdminOnly } from "../utils";

const GetStaff = () => {
  const dispatch = useDispatch();
  const { staff, loading, error } = useSelector((state) => state.user);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStaff, setFilteredStaff] = useState([]);
  const [visibleStaff, setVisibleStaff] = useState(10);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getStaff());
  }, [dispatch]);

  useEffect(() => {
    let updatedStaff = staff.filter(member =>
      member.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
    updatedStaff = updatedStaff.sort((a, b) => a.username.localeCompare(b.username));
    setFilteredStaff(updatedStaff);
    setVisibleStaff(10);
  }, [searchQuery, staff]);

  const handleDelete = (staffId) => {
    Alert.alert(
      "Delete Staff Member",
      "Are you sure you want to delete this staff member?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: () => dispatch(deleteUser(staffId)) }
      ]
    );
  };

  const handleLoadMore = () => {
    if (visibleStaff < filteredStaff.length) {
      setVisibleStaff(prevCount => prevCount + 10);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getStaff()).then(() => setRefreshing(false));
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
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#004d40" style={styles.searchIcon} />
        <TextInput
          placeholder="Search Staff"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
      </View>

      <FlatList
        data={filteredStaff.slice(0, visibleStaff)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.staffCard}>
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
                <Text style={styles.staffName}>{item.username}</Text>
                <Text style={styles.staffEmail}>{item.designation}</Text>
              </View>
            </TouchableOpacity>

            <AdminOnly>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Icon name="delete" size={24} color="red" />
              </TouchableOpacity>
            </AdminOnly>
          </View>
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListEmptyComponent={<Text style={styles.noStaffText}>No staff found</Text>}
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
  staffCard: {
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
  staffName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004d40',
  },
  staffEmail: {
    fontSize: 16,
    color: '#004d40',
  },
  noStaffText: {
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

export default GetStaff;
