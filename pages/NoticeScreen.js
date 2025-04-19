import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Linking, ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotices } from "../store/announcementDataSlice";

const NoticesScreen = () => {
  const dispatch = useDispatch();
  const { notices, status, error } = useSelector(state => state.announcements);

  useEffect(() => {
    dispatch(fetchNotices());
  }, [dispatch]);

  const handleOpenLink = url => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.tab} onPress={() => handleOpenLink(item.link)}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  if (status === "loading") return <ActivityIndicator size="large" color="#000" />;
  if (status === "failed") return <Text>Error: {error}</Text>;

  return (
    <FlatList
      data={notices}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  tab: {
    backgroundColor: "#d9f3ff",
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default NoticesScreen;
