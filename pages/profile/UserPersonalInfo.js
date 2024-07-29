import React, { useEffect, useState } from 'react';
import { Text, View, Image, Pressable, TextInput, ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, updateUser } from '../../store/userSlice';
import * as ImagePicker from 'expo-image-picker';
import Toast from 'react-native-toast-message';
import Header from '../../components/Header';

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
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Edit Profile</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: formState.photoURL || photoURL }}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  headerContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#004d40',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  changePhotoButton: {
    marginTop: 10,
    backgroundColor: '#ffffff',
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
    marginVertical: 20,
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
