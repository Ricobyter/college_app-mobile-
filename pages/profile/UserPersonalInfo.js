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
          <Text className="text-xl font-bold text-blue">{isUpgrading ? <Pressable onPress={saveProfile} className="bg-blue-500 p-3 rounded mt-6">
          <Text className="text-red text-xl font-bold">Update Profile</Text>
        </Pressable> : 'Edit Profile'}</Text>
        </Pressable>
        <Text className="text-blue text-lg"></Text>
      </View>
      <View className="w-full items-center">
        {isLoading ? <LoadingPage /> : 
        
        <Image
          source={{ uri: formState.photoURL || photoURL }}
          style={{ width: 200, height: 200 }}
          className="rounded-full mt-[50px]"
        />
      }
        {isUpgrading && (
          <Pressable onPress={handleImageChange}>
            <Text className="text-blue mt-2">Change Photo</Text>
          </Pressable>
        )}
      </View>

        <View className="mt-10 px-6">
        <Text className="text-gray-700 mb-2">Name</Text>
        <TextInput
          placeholder="Name"
          value={formState.username}
          editable={isUpgrading}
          onChangeText={(value) => handleInputChange('username', value)}
          className={`border-b  border-gray-300 rounded ${!isUpgrading ? 'text-gray-700' : 'text-blue'}`} 
          />
        
        <Text className="text-gray-700 mb-2 mt-4">Email</Text>
        <TextInput
          placeholder="Email"
          value={formState.userEmail}
          editable={false}
          className={`border-b  border-gray-300 rounded ${!isUpgrading ? 'text-gray-700' : 'text-blue'}`}
        />

<Text className="text-gray-700 mb-2 mt-4">Designation</Text>
        <TextInput
          placeholder="Phone"
          value={formState.designation}
          onChangeText={(value) => handleInputChange('phone', value)}
          className={`border-b  border-gray-300 rounded text-gray-500`}
          editable={false}
        />
        
        <Text className="text-gray-700 mb-2 mt-4">Phone</Text>
        <TextInput
          placeholder="Phone"
          value={formState.phone}
          onChangeText={(value) => handleInputChange('phone', value)}
          className={`border-b  border-gray-300 rounded ${!isUpgrading ? 'text-gray-700' : 'text-blue'}`}
          editable={isUpgrading}
        />

        
        <Text className="text-gray-700 mb-2 mt-4">Bio</Text>
        <TextInput
          placeholder="Bio"
          value={formState.bio}
          onChangeText={(value) => handleInputChange('bio', value)}
          multiline
          editable={isUpgrading}
          numberOfLines={4}
          className={`border-b  border-gray-300 rounded ${!isUpgrading ? 'text-gray-700' : 'text-blue'}`}
        />
        
        {/* <Pressable onPress={saveProfile} className="bg-blue-500 p-3 rounded mt-6">
          <Text className="text-red text-center">Update Profile</Text>
        </Pressable> */}
      </View>
      

    </ScrollView>
  );
};

export default UserPersonalInfo;
