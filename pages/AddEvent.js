import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { collection, addDoc } from "firebase/firestore";
import { FIREBASE_DB } from "../FirebaseConfig";
import Toast from "react-native-toast-message";
import Header from "../components/Header"; // Import Header component

const AddEvent = () => {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleAddEvent = async () => {
    try {
      setIsLoading(true);
      await addDoc(collection(FIREBASE_DB, "events"), {
        type,
        title,
        date,
        description,
        link,
        createdAt: new Date(),
      });
      Toast.show({
        type: "success",
        text1: "Event Added",
        text2: "Event added successfully!",
      });
      setType("");
      setTitle("");
      setDate(new Date());
      setDescription("");
      setLink("");
      setIsLoading(false);
    } catch (error) {
      console.error("Error adding event: ", error);
      setIsLoading(false);
    }
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.headerText}>Add Event</Text>
        <Picker
          selectedValue={type}
          onValueChange={(itemValue, itemIndex) => setType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Type" value="" />
          <Picker.Item label="Current" value="Current" />
          <Picker.Item label="Archive" value="Archive" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
            minimumDate={new Date(2000, 0, 1)}
            maximumDate={new Date(2100, 11, 31)}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Link"
          value={link}
          onChangeText={setLink}
        />
        <View style={styles.datePickerContainer}>
          <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
          <Text style={styles.dateText}>{date.toDateString()}</Text>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Button title="Add Event" onPress={handleAddEvent} />
        )}
        <Toast />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#e0f2f1", // Background color matching the theme
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#004d40",
    marginBottom: 20,
    textAlign: "center",
  },
  picker: {
    height: 50,
    marginBottom: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  datePickerContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  dateText: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
});

export default AddEvent;
