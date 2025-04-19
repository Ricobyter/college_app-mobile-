import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../store/announcementDataSlice";

const EventsScreen = () => {
  const dispatch = useDispatch();
  const { events, status, error } = useSelector((state) => state.announcements);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);



  const handleOpenLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {status === "loading" && <ActivityIndicator size="large" color="#000" />}
      {status === "failed" && <Text>Error: {error}</Text>}

      {events.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tab}
          onPress={() => handleOpenLink(item.link)}
        >
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 60,
  },
  tab: {
    backgroundColor: "#e3e3e3",
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  statusText: {
    marginBottom: 8,
    color: "#666",
  },
});

export default EventsScreen;
