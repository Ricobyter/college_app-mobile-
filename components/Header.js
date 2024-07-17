import { Text, View, Image, Pressable, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/userSlice';
import { useNavigation } from '@react-navigation/native';


const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const { uid, username, photoURL, isLoading, userEmail } = useSelector((state) => state.user);
  useEffect(() => {
    if (uid) {
      dispatch(getUser(uid));
    }
  }, [dispatch, uid]);

  return (
    <>
      <View className="flex-row justify-between items-center px-4 py-3 bg-white">
        <View className=''>
          <Icon name="bars" size={24} className="" />
        </View>
        <View>
          <Image
            source={require('../assets/images/logo.png')} // replace with your logo path
            style={{ width: 50, height: 50 }} // adjust size as needed
          />
        </View>
        <View>
          {isLoading ? (
            <ActivityIndicator size="small" className='text-red' />
          ) : uid ? (
            <Pressable onPress={() => navigation.navigate('UserProfile')}>
              {photoURL ? (
                <Image
                  source={{ uri: photoURL }}
                  style={{ width: 50, height: 50, borderRadius: 20 }}
                />
              ) : (
                <Text className="text-gray-900 text-md font-medium">{username || userEmail}</Text>
              )}
            </Pressable>
          ) : (
            <Pressable
              className="bg-red py-2 px-3 rounded-xl"
              onPress={() => navigation.navigate('Login')}
            >
              <Text className="text-gray-200 text-md font-medium">Login</Text>
            </Pressable>
          )}
        </View>
      </View>
    </>
  );
};

export default Header;
