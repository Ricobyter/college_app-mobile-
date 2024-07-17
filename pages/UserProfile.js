import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/userSlice";
import Icon from 'react-native-vector-icons/Entypo';  // Import Entypo icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';  // Import FontAwesome icons

const UserProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const { uid, username, photoURL, isLoading, userEmail, designation } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (uid) {
      dispatch(getUser(uid));
    }
  }, [dispatch, uid]);

  return (
    <View className="flex-col min-h-screen py-4">
      <View className="flex-row justify-between py-6 px-6">
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="black" />
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
      <View className="px-4 mt-12 flex-col gap-4">
        <Pressable className="py-6 px-3 rounded-lg bg-gray-50 flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Icon name="user" size={24} color="black" className="mr-2" />
            <Text className="text-md ml-2">Personal Details</Text>
          </View>
          <FontAwesome name="chevron-right" size={20} color="gray" />
        </Pressable>
        <Pressable className="py-6 px-3 rounded-lg bg-gray-50 flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Icon name="graduation-cap" size={24} color="black" className="mr-2" />
            <Text className="text-md ml-2">Education</Text>
          </View>
          <FontAwesome name="chevron-right" size={20} color="gray" />
        </Pressable>
        <Pressable className="py-6 px-3 rounded-lg bg-gray-50 flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Icon name="key" size={24} color="black" className="mr-2" />
            <Text className="text-md ml-2">Security</Text>
          </View>
          <FontAwesome name="chevron-right" size={20} color="gray" />
        </Pressable>
        <Pressable className="py-6 px-3 rounded-lg bg-gray-50 flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Icon name="cog" size={24} color="black" className="mr-2" />
            <Text className="text-md ml-2">Other</Text>
          </View>
          <FontAwesome name="chevron-right" size={20} color="gray" />
        </Pressable>
      </View>
    </View>
  );
};

export default UserProfile;
