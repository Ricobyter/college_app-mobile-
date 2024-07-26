import React, { useEffect, useState } from 'react';
import { Text, View, Image, Pressable, TextInput, ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, updateUser } from '../../store/userSlice';
import * as ImagePicker from 'expo-image-picker';
import Toast from 'react-native-toast-message';

const UserPersonalInfo = ({ navigation }) => {
  const dispatch = useDispatch();
  const { uid, username, photoURL, designation, userEmail, phone, bio, error } = useSelector((state) => state.user);

  const [formState, setFormState] = useState({
    username: '',
    userEmail: '',
    phone: '',
    bio: '',
    photoURL: '',
    designation: '',
  });

  const [isUpgrading, setIsUpgrading] = useState(false);

  useEffect(() => {
    if (uid) {
      dispatch(getUser(uid));
    }
  }, [dispatch, uid]);

  useEffect(() => {
    setFormState({
      username,
      userEmail,
      phone,
      bio,
      photoURL,
      designation
    });
  }, [username, userEmail, phone, bio, photoURL, designation]);

  const handleInputChange = (name, value) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleImageChange = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setFormState({ ...formState, photoURL: result.assets[0].uri });
    }
  };

  const saveProfile = async () => {
    dispatch(updateUser({ uid, userData: formState }));

    if (error) {
      Toast.show({
        type: "error",
        text1: "Updation Error",
        text2: "Error Updating User",
      });
      return;
    } else {
      Toast.show({
        type: "success",
        text1: "Updation Success",
        text2: "Profile Updated Successfully",
      });
      setIsUpgrading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Personal Details</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: formState.photoURL || photoURL ||"https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" }}
          style={styles.profileImage}
        />
        {isUpgrading && (
          <Pressable onPress={handleImageChange} style={styles.changePhotoButton}>
            <Text style={styles.changePhotoText}>Change Photo</Text>
          </Pressable>
        )}
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          placeholder="Name"
          value={formState.username}
          editable={isUpgrading}
          onChangeText={(value) => handleInputChange('username', value)}
          style={[styles.input, isUpgrading ? styles.inputEditable : styles.inputNonEditable]}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Email"
          value={formState.userEmail}
          editable={false}
          style={[styles.input, styles.inputNonEditable]}
        />
        <Text style={styles.label}>Designation</Text>
        <TextInput
          placeholder="Designation"
          value={formState.designation}
          editable={false}
          style={[styles.input, styles.inputNonEditable]}
        />
        <Text style={styles.label}>Phone</Text>
        <TextInput
          placeholder="Phone"
          value={formState.phone}
          editable={isUpgrading}
          onChangeText={(value) => handleInputChange('phone', value)}
          style={[styles.input, isUpgrading ? styles.inputEditable : styles.inputNonEditable]}
        />
        <Text style={styles.label}>Bio</Text>
        <TextInput
          placeholder="Bio"
          value={formState.bio}
          onChangeText={(value) => handleInputChange('bio', value)}
          multiline
          editable={isUpgrading}
          numberOfLines={3}
          style={[styles.input, isUpgrading ? styles.inputEditable : styles.inputNonEditable]}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => {
          if (isUpgrading) {
            saveProfile();
          } else {
            setIsUpgrading(true);
          }
        }} style={styles.editButton}>
          <Text style={styles.editButtonText}>{isUpgrading ? 'Save Profile' : 'Edit Profile'}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: '#e0f2f1',
  },
  headerContainer: {
    backgroundColor: '#00796b',
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 50,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  changePhotoButton: {
    marginTop: 15,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00796b',
  },
  changePhotoText: {
    color: '#00796b',
    fontSize: 16,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    color: '#004d40',
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    fontSize: 16,
    paddingVertical: 8,
  },
  inputEditable: {
    color: '#00796b',
  },
  inputNonEditable: {
    color: '#004d40',
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  editButton: {
    backgroundColor: '#00796b',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserPersonalInfo;
