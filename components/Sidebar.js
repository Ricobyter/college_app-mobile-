import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import {
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { clearUser } from "../store/userSlice";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const { uid, username, photoURL, isLoading, userEmail } = useSelector(
    (state) => state.user
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (uid) {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);
  }, [uid]);

  const handleSignOut = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      dispatch(clearUser());
      props.navigation.navigate("Login");
    } catch (error) {
      console.error("Sign Out Error", error.message);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
        <View className='min-h-screen relative'>

        
      <View className="flex ">
        <View>
          {!isLoggedIn ? (
            <View className="h-[300px] w-full flex justify-center items-center">
              <Text className="text-red text-xl">You are not logged in</Text>
              <Pressable className='bg-red '>
                <Text className="bg-red-500 text-white p-2 rounded-md">
                  Login Now
                </Text>
              </Pressable>
            </View>
          ) : (
            <View className="flex-row justify-around items-center h-[200px] w-full bg-red mb-6">
                <View>
                    
              <Image
                source={{ uri: photoURL }}
                // style={{ width: 50, height: 50, borderRadius: 20 }}
                className='h-32 w-32 rounded-full'
              />
              </View>
              <View className='flex flex-col gap-2 h-full justify-center items-start'>
                <Text className='text-white'>{username}</Text>
                <Text>{userEmail}</Text>

              </View>
            </View>
          )}
        </View>
      </View>
      <Pressable
          className='pl-4 flex-row w-full gap-6'
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name="home" size={28} color="#000" />
          <Text className='text-xl' >Home</Text>
        </Pressable>
        {isLoggedIn ? 
        (
          <Pressable
            className='pl-4 flex-row items-center gap-6 py-3'
            onPress={() => navigation.navigate('UserProfile')}
          >
            <Icon name="user" size={28} color="#000" />
            <Text className='text-xl'>My Profile</Text>
          </Pressable>): null}


        <Pressable
          className='pl-4 flex-row items-center gap-4 py-3'
          onPress={() => navigation.navigate('Programs')}
        >
          <Icon name="list-alt" size={28} color="#000" />
          <Text className='text-xl'>Programs</Text>
        </Pressable>
        
        <Pressable
          className='pl-4 flex-row items-center gap-4 py-3'
          onPress={() => navigation.navigate('Faculties')}
        >
          <Icon name="graduation-cap" size={28} color="#000" />
          <Text className='text-xl'>Faculties</Text>
        </Pressable>
        
        <Pressable
          className='pl-4 flex-row items-center gap-4 py-3'
          onPress={() => navigation.navigate('Galleries')}
        >
          <Icon name="photo" size={28} color="#000" />
          <Text className='text-xl'>Galleries</Text>
        </Pressable>
        <Pressable
          className='pl-4 flex-row items-center gap-4 py-3'
          onPress={() => navigation.navigate('AdminDashboard')}
        >
          <Icon name="photo" size={28} color="#000" />
          <Text className='text-xl'>Dashboard</Text>
        </Pressable>



      {/* <DrawerItemList {...props} /> */}
      <View className='absolute bottom-0 border-t-2 border-red w-full'>

      <Pressable
        className="py-2 bg-red-500 mt-4 rounded-md "
        onPress={handleSignOut}
        >
        <Text className="text-red text-center text-lg">Sign Out</Text>
      </Pressable>
          </View>
          </View>
    </DrawerContentScrollView>
  );
};

export default Sidebar;
