import { View, Text, Image, Pressable, Alert } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/userSlice";
import Icon from "react-native-vector-icons/Entypo"; // Import Entypo icons
import FontAwesome from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons
import LoadingPage from "../components/LoadingScreen";
import { signOut } from 'firebase/auth'; // Import Firebase signOut
import { FIREBASE_AUTH } from '../FirebaseConfig'; // Import your Firebase configuration
import { clearUser } from '../store/userSlice'; // Import clearUser action

const UserProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { uid, username, photoURL, isLoading, designation } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (uid) {
      dispatch(getUser(uid));
    }
  }, [dispatch, uid]);

  if(uid === ''){
    <View className='flex justify-center items-center h-screen'>
      <Text>You are not logged in</Text>
      <Pressable className='px-3 py-2 rounded-md bg-red' onPress={()=> navigation.navigate('Login')}>
        <Text className='text-gray-100'>Login Now</Text>
      </Pressable>
    </View>

  }

  const handleSignOut = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      navigation.navigate("Login"); // Navigate to login page
      dispatch(clearUser()); // Clear user data from Redux store
    } catch (error) {
      Alert.alert("Sign Out Error", error.message);
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <View className="flex-col min-h-screen py-4">
      <View className="flex-row justify-between py-6 px-6">
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="#10d1b2" />
        </Pressable>

        <Text className="text-xl font-bold">Profile</Text>
        <Text className="text-blue text-lg"></Text>
      </View>
      <View className="w-full items-center">
        <Image
          source={{ uri: photoURL }}
          style={{ width: 180, height: 180 }}
          className="rounded-full mt-[50px]"
        />
      </View>

      <View className="mt-2 mb-10">
        <Text className="text-red text-2xl text-center">{username}</Text>
        <Text className="text-gray-700 text-sm text-center">{designation}</Text>
      </View>
      <View className="px-4 mt-12 flex-col gap-4 ">
        <Pressable
          className="py-6 px-3 rounded-lg bg-gray-50 flex-row justify-between items-center"
          onPress={() => navigation.navigate("UserPersonalInfo")}
        >
          <View className="flex-row items-center">
            <Icon name="user" size={24} color="#10d1b2" className="mr-2" />
            <Text className="text-md font-semibold ml-3 text-blue">
              Personal Details
            </Text>
          </View>
          <FontAwesome name="chevron-right" size={20} color="#10d1b2" />
        </Pressable>

        <Pressable
          className="py-6 px-3 rounded-lg bg-gray-50 flex-row justify-between items-center"
          onPress={() => navigation.navigate("UserEducation")}
        >
          <View className="flex-row items-center">
            <Icon
              name="graduation-cap"
              size={24}
              color="#10d1b2"
              className="mr-2"
            />
            <Text className="text-md font-semibold ml-3 text-blue">
              Education
            </Text>
          </View>
          <FontAwesome name="chevron-right" size={20} color="#10d1b2" />
        </Pressable>
        <Pressable
          className="py-6 px-3 rounded-lg bg-gray-50 flex-row justify-between items-center"
          onPress={() => navigation.navigate("UserSecurity")}
        >
          <View className="flex-row items-center">
            <Icon name="key" size={24} color="#10d1b2" className="mr-2" />
            <Text className="text-md font-semibold ml-3 text-blue">
              Security
            </Text>
          </View>
          <FontAwesome name="chevron-right" size={20} color="#10d1b2" />
        </Pressable>
        <Pressable
          className="py-6 px-3 rounded-lg bg-gray-50 flex-row justify-between items-center"
          onPress={handleSignOut}
        >
          <View className="flex-row items-center">
            <Icon name="cog" size={24} color="#10d1b2" className="mr-2" />
            <Text className="text-md font-semibold ml-3 text-blue">
              Signout
            </Text>
          </View>
          <FontAwesome name="chevron-right" size={20} color="#10d1b2" />
        </Pressable>
      </View>
    </View>
  );
};

export default UserProfile;
