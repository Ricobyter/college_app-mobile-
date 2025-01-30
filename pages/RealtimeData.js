import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchRealtimeData } from "../store/userSlice";

const RealtimeDataPage = () => {
  const dispatch = useDispatch();
  const { realtimeData, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    // Fetch data when the component mounts
    dispatch(fetchRealtimeData());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Realtime Database Data</Text>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.error}>Error: {error}</Text>}
      {realtimeData ? (
        <ScrollView style={styles.dataContainer}>
          <Text style={styles.data}>{JSON.stringify(realtimeData, null, 2)}</Text>
        </ScrollView>
      ) : (
        !loading && <Text style={styles.noData}>No data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  error: {
    color: "red",
    marginVertical: 10,
  },
  dataContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  data: {
    fontFamily: "monospace",
  },
  noData: {
    marginTop: 10,
    color: "#555",
  },
});

export default RealtimeDataPage;
