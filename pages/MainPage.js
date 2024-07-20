// src/screens/MainPage.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../store/userSlice';
import Header from '../components/Header';
import { GestureDetector, GestureHandlerRootView, Gesture } from 'react-native-gesture-handler';

const MainPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const gesture = Gesture.Pan()
    .onStart(() => {})
    .onUpdate((e) => {
      if (e.translationX > 100) {
        navigation.toggleDrawer();
      }
    })
    .onEnd(() => {});

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={gesture}>
        <View style={{ flex: 1 }}>
          <Header />
          <View className="flex-1 min-h-screen justify-center items-center bg-white p-4">
            <Text className="text-3xl font-bold text-red mb-8">Main Page</Text>
            <Pressable onPress={() => navigation.navigate('GetProfessors')}>
              <Text>Signup</Text>
            </Pressable>
          </View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default MainPage;
