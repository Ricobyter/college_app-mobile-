import React, { useEffect } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../store/userSlice";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Using MaterialIcons
import { useNavigation } from "@react-navigation/native";
import Header from '../components/Header';

const AdminDashboard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

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
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Admin Dashboard</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Icon name="people" size={30} color="#00796b" />
            <Text style={styles.statTitle}>Total</Text>
            <Text style={styles.statValue}>{totalUsers}</Text>
          </View>
          <View style={styles.statItem}>
            <Icon name="person" size={30} color="#00796b" />
            <Text style={styles.statTitle}>Professors</Text>
            <Text style={styles.statValue}>{professors}</Text>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Icon name="person" size={30} color="#00796b" />
            <Text style={styles.statTitle}>Students</Text>
            <Text style={styles.statValue}>{students}</Text>
          </View>
          <View style={styles.statItem}>
            <Icon name="person-add" size={30} color="#00796b" />
            <Text style={styles.statTitle}>V.F.</Text>
            <Text style={styles.statValue}>{visitingFaculty}</Text>
          </View>
        </View>

        <Text style={styles.actionsTitle}>More actions</Text>

        <View style={styles.actionsContainer}>
          <Pressable
            style={styles.actionButtonBlue}
            onPress={() => navigation.navigate("AddProfessor")}
          >
            <View style={styles.actionButtonContent}>
              <Text style={styles.actionButtonText}>Add Professor</Text>
              <Icon name="person-add" size={24} color="white" />
            </View>
          </Pressable>

          <Pressable
            style={styles.actionButtonGreen}
            onPress={() => navigation.navigate("AddStudent")}
          >
            <View style={styles.actionButtonContent}>
              <Text style={styles.actionButtonText}>Add Student</Text>
              <Icon name="person-add" size={24} color="white" />
            </View>
          </Pressable>

          <Pressable
            style={styles.actionButtonYellow}
            onPress={() => navigation.navigate("AddVisitingFaculty")}
          >
            <View style={styles.actionButtonContent}>
              <Text style={styles.actionButtonText}>Add Visiting Faculty</Text>
              <Icon name="person-add" size={24} color="white" />
            </View>
          </Pressable>
          <Pressable
  style={styles.actionButtonBlue}
  onPress={() => navigation.navigate("AddAnnouncement")}
>
  <View style={styles.actionButtonContent}>
    <Text style={styles.actionButtonText}>Add Announcement</Text>
    <Icon name="announcement" size={24} color="white" />
  </View>
</Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1', // Light teal background
  },
  scrollContainer: {
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff', // Matching Programs header background
    paddingVertical: 10,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 26, // Matching Programs header text size
    fontWeight: 'bold',
    color: '#004d40',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statItem: {
    backgroundColor: '#ffffff', // White background
    padding: 15,
    borderRadius: 10,
    width: '44%',
    alignItems: 'center',
    elevation: 3, // Shadow effect
  },
  statTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 5,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
  },
  actionsTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004d40', // Dark teal
    textDecorationLine: 'underline',
  },
  actionsContainer: {
    marginTop: 10,
  },
  actionButtonBlue: {
    backgroundColor: '#00796b', // Dark teal
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3, // Shadow effect
  },
  actionButtonGreen: {
    backgroundColor: '#4CAF50', // Green
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3, // Shadow effect
  },
  actionButtonYellow: {
    backgroundColor: '#FF9800', // Orange
    padding: 15,
    borderRadius: 10,
    elevation: 3, // Shadow effect
  },
  actionButtonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default AdminDashboard;
