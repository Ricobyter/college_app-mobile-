import { Text, View, Image, Pressable, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/userSlice';
import { useNavigation } from '@react-navigation/native';


const Header = () => {
  const navigation = useNavigation()
  const { uid } = useSelector((state) => state.user);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    if (uid) {
      setIsLoggedIn(true)
    }
    setIsLoggedIn(false)
  }, [uid]);

  return (
    <>
      <View className="flex-row justify-between items-center px-4 py-3 bg-white">
        <View className=''>
          <Pressable
           onPress={() => navigation.toggleDrawer()}>
          <Icon name="bars" size={24} className="" />
          </Pressable>
        </View>
        <View>
          <Image
            source={require('../assets/images/logo.png')} // replace with your logo path
            style={{ width: 50, height: 50 }} // adjust size as needed
          />
        </View>
        <View>
{!isLoggedIn ? (<Pressable onPress={()=> navigation.navigate('Login')}>
  <Text className='text-white hover:scale-105 bg-red py-2 px-3 rounded-md'>
    Login
  </Text>
</Pressable>): (<View></View>)}
        </View>
      </View>
    </>
  );
};

export default Header;
