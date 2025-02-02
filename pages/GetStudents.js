import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudents, deleteUser } from "../store/userSlice";
import LoadingScreen from "../components/LoadingScreen";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, RefreshControl, FlatList, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';

import { AdminOnly } from "../utils";

const GetStudents = () => {
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector((state) => state.user);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [visibleStudents, setVisibleStudents] = useState(10); // Number of students initially shown
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedDegree, setSelectedDegree] = useState("B.Tech");
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

    let filteredByYear = sortedStudents.filter(student =>
      student.rollNo.toLowerCase().startsWith(selectedYear.slice(2) + "b")
    );

    if (searchQuery) {
      setFilteredStudents(
        filteredByYear.filter(student =>
          student.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.rollNo.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredStudents(filteredByYear);
    }
  }, [searchQuery, students, selectedYear]);

  const handleDelete = (studentId) => {
    dispatch(deleteUser(studentId));
  };

  const loadMoreStudents = () => {
    if (visibleStudents < filteredStudents.length) {
      setVisibleStudents((prev) => prev + 10);
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
          placeholder="Enter name or roll no."
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
      </View>
      <View style={styles.filterContainer}>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedYear}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedYear(itemValue)}
          >
            <Picker.Item label="2024" value="2024" />
            <Picker.Item label="2023" value="2023" />
            <Picker.Item label="2022" value="2022" />
            <Picker.Item label="2021" value="2021" />
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedDegree}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedDegree(itemValue)}
          >
            <Picker.Item label="B.Tech" value="B.Tech" />
            <Picker.Item label="M.Tech" value="M.Tech" />
            <Picker.Item label="PhD" value="PhD" />
          </Picker>
        </View>
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
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  pickerContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 5,
    elevation: 1,
    marginHorizontal: 5,
  },
});

export default GetStudents;
