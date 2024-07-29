import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  RefreshControl,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { FIREBASE_DB } from "../FirebaseConfig";
import Header from "../components/Header";
import Toast from "react-native-toast-message";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AdminOnly } from "../utils";

const News = () => {
  const navigation = useNavigation();
  const [showCurrent, setShowCurrent] = useState(true); // State to track current or archive view
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchEvents = async () => {
    try {
      const querySnapshot = await getDocs(collection(FIREBASE_DB, "events"));
      const eventsData = [];
      querySnapshot.forEach((doc) => {
        eventsData.push({ ...doc.data(), id: doc.id });
      });
      setEvents(eventsData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching events: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchEvents().then(() => setRefreshing(false));
  };

  const handleLinkPress = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const handleDelete = (eventId) => {
    Alert.alert(
      "Delete Event",
      "Are you sure you want to delete this event?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            try {
              await deleteDoc(doc(FIREBASE_DB, "events", eventId));
              fetchEvents();
              Toast.show({
                type: "success",
                text1: "Event deleted successfully",
              });
            } catch (error) {
              console.error("Error deleting event: ", error);
              Toast.show({
                type: "error",
                text1: "Failed to delete event",
              });
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  const currentEvents = events.filter((event) => event.type === "Current");
  const archiveEvents = events.filter((event) => event.type === "Archive");

  return (
    <>
      <Header />
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>News & Events</Text>
        </View>

        <View style={styles.section}>
          <TouchableOpacity
            onPress={() => setShowCurrent(true)}
            style={[
              styles.tab,
              showCurrent ? styles.activeTab : styles.inactiveTab,
            ]}
          >
            <Text
              style={[
                styles.tabTitle,
                showCurrent ? styles.activeTabText : styles.inactiveTabText,
              ]}
            >
              Current
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setShowCurrent(false)}
            style={[
              styles.tab,
              !showCurrent ? styles.activeTab : styles.inactiveTab,
            ]}
          >
            <Text
              style={[
                styles.tabTitle,
                !showCurrent ? styles.activeTabText : styles.inactiveTabText,
              ]}
            >
              Archive
            </Text>
          </TouchableOpacity>

          {showCurrent && (
            <View style={styles.subsection}>
              {loading ? (
                <ActivityIndicator size="large" />
              ) : (
                currentEvents.map((item, index) => (
                  <View key={index} style={styles.newsItem}>
                    <View style={styles.newsHeader}>
                      <Text style={styles.newsTitle}>{item.title}</Text>
                      <AdminOnly>
                        <TouchableOpacity onPress={() => handleDelete(item.id)}>
                          <Icon name="delete" size={24} color="#d32f2f" />
                        </TouchableOpacity>
                      </AdminOnly>
                    </View>
                    <Text style={styles.newsDate}>
                      {item.date.toDate().toDateString()}
                    </Text>
                    <Text style={styles.newsDescription}>
                      {item.description}
                    </Text>
                    {item.link && (
                      <TouchableOpacity
                        onPress={() => handleLinkPress(item.link)}
                        style={styles.linkButton}
                      >
                        <Text style={styles.linkText}>Read More</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                ))
              )}
            </View>
          )}

          {!showCurrent && (
            <View style={styles.subsection}>
              {loading ? (
                <ActivityIndicator size="large" />
              ) : (
                archiveEvents.map((item, index) => (
                  <View key={index} style={styles.newsItem}>
                    <View style={styles.newsHeader}>
                      <Text style={styles.newsTitle}>{item.title}</Text>
                      <AdminOnly>
                        <TouchableOpacity onPress={() => handleDelete(item.id)}>
                          <Icon name="delete" size={24} color="#d32f2f" />
                        </TouchableOpacity>
                      </AdminOnly>
                    </View>
                    <Text style={styles.newsDate}>
                      {item.date.toDate().toDateString()}
                    </Text>
                    <Text style={styles.newsDescription}>
                      {item.description}
                    </Text>
                    {item.link && (
                      <TouchableOpacity
                        onPress={() => handleLinkPress(item.link)}
                        style={styles.linkButton}
                      >
                        <Text style={styles.linkText}>Read More</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                ))
              )}
            </View>
          )}
        </View>
      </ScrollView>
      <Toast />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 50,
    backgroundColor: "#e0f2f1", // Matching overall theme background
    paddingHorizontal: 20,
    paddingVertical: 24,
    marginTop: -20,
  },
  headerContainer: {
    marginBottom: 20,
    backgroundColor: "#fff", // Header background color
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00796b",
  },
  addButton: {
    backgroundColor: "#00796b", // Add button background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  section: {
    backgroundColor: "#ffffff", // Section background color
    borderRadius: 8,
    elevation: 3, // Shadow effect for Android
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#004d40", // Border color
    marginBottom: 8,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#e0f2f1", // Background color for active tab
  },
  inactiveTab: {
    backgroundColor: "#ffffff", // Background color for inactive tab
  },
  tabTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  activeTabText: {
    color: "#00796b", // Active tab text color
  },
  inactiveTabText: {
    color: "#004d40", // Inactive tab text color
  },
  subsection: {
    marginBottom: 16,
  },
  newsItem: {
    marginBottom: 12,
  },
  newsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  newsDate: {
    fontSize: 14,
    color: "#777",
    marginBottom: 8,
  },
  newsDescription: {
    fontSize: 16,
    color: "#555",
  },
  linkButton: {
    marginTop: 8,
    padding: 10,
    backgroundColor: "#00796b", // Link button background color
    borderRadius: 5,
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default News;