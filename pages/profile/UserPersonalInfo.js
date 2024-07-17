import { Text, View, Image, Pressable, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, updateUser } from '../../store/userSlice';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Entypo';
import LoadingPage from '../../components/LoadingScreen';
import Toast from 'react-native-toast-message';

const UserPersonalInfo = ({ navigation }) => {
  const dispatch = useDispatch();
  const { uid, username, photoURL, isLoading, designation, userEmail, phone, bio, error } = useSelector((state) => state.user);

  const [formState, setFormState] = useState({
    username: '',
    userEmail: '',
    phone: '',
    bio: '',
    photoURL: '',
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
    });
  }, [username, userEmail, phone, bio, photoURL]);

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
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFormState({ ...formState, photoURL: result.assets[0].uri });
    }
  };

  const saveProfile = async () => {
    dispatch(updateUser({ uid, userData: formState }));

    if(error){
        Toast.show({
            type: "error",
            text1: "Updation Error",
            text2: "Error Updating User",
          });
          return;
    }else{
        Toast.show({
            type: "success",
            text1: "Updation Sucess",
            text2: "Profile Updated Successfully",
          });
        setIsUpgrading(false);
    }


  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <ScrollView className="flex-col min-h-screen py-4">
      <View className="flex-row justify-between py-6 px-6">
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => setIsUpgrading(!isUpgrading)}>
          <Text className="text-xl font-bold text-blue">{isUpgrading ? 'Update Profile' : 'Edit Profile'}</Text>
        </Pressable>
        <Text className="text-blue text-lg"></Text>
      </View>
      <View className="w-full items-center">
        <Image
          source={{ uri: formState.photoURL || photoURL }}
          style={{ width: 200, height: 200 }}
          className="rounded-full mt-[50px]"
        />
        {isUpgrading && (
          <Pressable onPress={handleImageChange}>
            <Text className="text-blue mt-2">Change Photo</Text>
          </Pressable>
        )}
      </View>
      {isUpgrading ? (
        <View className="mt-10 px-6">
          <TextInput
            placeholder="Name"
            value={formState.username}
            onChangeText={(value) => handleInputChange('username', value)}
            className="border border-gray-300 p-2 rounded"
          />
          <TextInput
            placeholder="Email"
            value={formState.userEmail}
            editable={false}
            className="border border-gray-300 p-2 rounded mt-4"
          />
          <TextInput
            placeholder="Phone"
            value={formState.phone}
            onChangeText={(value) => handleInputChange('phone', value)}
            className="border border-gray-300 p-2 rounded mt-4"
          />
          <TextInput
            placeholder="Bio"
            value={formState.bio}
            onChangeText={(value) => handleInputChange('bio', value)}
            multiline
            numberOfLines={4}
            className="border border-gray-300 p-2 rounded mt-4"
          />
          <Pressable onPress={saveProfile} className="bg-blue-500 p-3 rounded mt-6">
            <Text className="text-red text-center">Update Profile</Text>
          </Pressable>
        </View>
      ) : (
        <View className="mt-10 px-6">
          <Text className="text-red text-2xl">{username}</Text>
          <Text className="text-gray-700 text-sm">{designation}</Text>
          <Text className="text-gray-700 text-sm mt-2">{userEmail}</Text>
          <Text className="text-gray-700 text-sm mt-2">{phone}</Text>
          <Text className="text-gray-700 text-sm mt-2">{bio}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default UserPersonalInfo;
