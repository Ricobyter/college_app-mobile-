import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../store/userSlice";
import Icon from "react-native-vector-icons/MaterialIcons"; // Using MaterialIcons
import { useNavigation } from "@react-navigation/native";

const AdminDashboard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.user);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const onRefresh = async () => {
    setRefreshing(true);
    await dispatch(getAllUsers());
    setRefreshing(false);
  };

  const totalUsers = allUsers.length;
  const professors = allUsers.filter(
    (user) => user.designation === "Professor"
  ).length;
  const students = allUsers.filter(
    (user) => user.designation === "Student"
  ).length;
  const visitingFaculty = allUsers.filter(
    (user) => user.designation === "V. Faculty"
  ).length;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
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
          <TouchableOpacity
            onPress={() => navigation.navigate("GetProfessors")}
            className="flex justify-center items-center"
          >
            <Icon name="person" size={30} color="#00796b" />
            <Text style={styles.statTitle}>Professors</Text>
            <Text style={styles.statValue}>{professors}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <TouchableOpacity
            onPress={() => navigation.navigate("GetStudents")}
            className="flex justify-center items-center"
          >
            <Icon name="person" size={30} color="#00796b" />
            <Text style={styles.statTitle}>Students</Text>
            <Text style={styles.statValue}>{students}</Text>
          </TouchableOpacity>
        </View>

        <Pressable
          style={styles.statItem}
          onPress={() => navigation.navigate("GetVF")}
        >
          <Icon name="person-add" size={30} color="#00796b" />
          <Text style={styles.statTitle}>V.F.</Text>
          <Text style={styles.statValue}>{visitingFaculty}</Text>
        </Pressable>
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
          onPress={() => navigation.navigate("AddVF")}
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
        <Pressable
          style={styles.actionButtonGreen}
          onPress={() => navigation.navigate("AddEvent")}
        >
          <View style={styles.actionButtonContent}>
            <Text style={styles.actionButtonText}>Add event</Text>
            <Icon name="event" size={24} color="white" />
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#e0f2f1", // Light teal background
  },
  headerContainer: {
    marginBottom: 20,
    backgroundColor: "#00796b", // Header background color
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statItem: {
    backgroundColor: "#ffffff", // Dark teal background
    padding: 15,
    borderRadius: 10,
    width: "44%",
    alignItems: "center",
    elevation: 3, // Shadow effect
  },
  statTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00796b",
    marginBottom: 5,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00796b",
  },
  actionsTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#004d40", // Dark teal
    textDecorationLine: "underline",
  },
  actionsContainer: {
    flex: 1,
    marginTop: 10,
  },
  actionButtonBlue: {
    backgroundColor: "#00796b", // Dark teal
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    elevation: 3, // Shadow effect
  },
  actionButtonGreen: {
    backgroundColor: "#4CAF50", // Green
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3, // Shadow effect
  },
  actionButtonYellow: {
    backgroundColor: "#FF9800", // Orange
    padding: 15,
    borderRadius: 10,
    elevation: 3, // Shadow effect
  },
  actionButtonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionButtonText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default AdminDashboard;
