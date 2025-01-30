import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudents, deleteUser } from "../store/userSlice";
import LoadingScreen from "../components/LoadingScreen";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, RefreshControl, FlatList, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
import { AdminOnly } from "../utils";

const GetStudents = () => {
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector((state) => state.user);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [visibleStudents, setVisibleStudents] = useState(10); // Number of students initially shown

  const navigation = useNavigation();

  const fetchStudents = async () => {
    setRefreshing(true);
    await dispatch(getStudents());
    setRefreshing(false);
  };

  useEffect(() => {
    fetchStudents();
  }, [dispatch]);

  useEffect(() => {
    let sortedStudents = [...students].sort((a, b) =>
      a.username.toLowerCase().localeCompare(b.username.toLowerCase())
    );

    if (searchQuery) {
      setFilteredStudents(
        sortedStudents.filter(student =>
          student.username.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredStudents(sortedStudents);
    }
  }, [searchQuery, students]);

  const handleDelete = (studentId) => {
    dispatch(deleteUser(studentId));
  };

  // Load more students when scrolled to bottom
  const loadMoreStudents = () => {
    if (visibleStudents < filteredStudents.length) {
      setVisibleStudents((prev) => prev + 10); // Load 10 more students
    }
  };

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
          placeholder="Search Students"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
      </View>

      {/* Student List */}
      <FlatList
        data={filteredStudents.slice(0, visibleStudents)}
        keyExtractor={(student) => student.id}
        renderItem={({ item }) => (
          <View style={styles.studentCard}>
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
                <Text style={styles.studentName}>{item.username}</Text>
                <Text style={styles.studentEmail}>{item.designation}</Text>
              </View>
            </TouchableOpacity>

            {/* Admin Delete Option */}
            {/* <AdminOnly>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Icon name="delete" size={24} color="red" />
              </TouchableOpacity>
            </AdminOnly> */}
          </View>
        )}
        ListFooterComponent={() =>
          visibleStudents < filteredStudents.length ? (
            <ActivityIndicator size="large" color="#00796b" style={styles.loader} />
          ) : null
        }
        onEndReached={loadMoreStudents} // Load more when user reaches the end
        onEndReachedThreshold={0.5} // Trigger loading earlier
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchStudents} colors={["#00796b"]} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  studentCard: {
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
  studentName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004d40',
  },
  studentEmail: {
    fontSize: 16,
    color: '#004d40',
  },
  loader: {
    marginVertical: 20,
    alignSelf: "center",
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

export default GetStudents;
