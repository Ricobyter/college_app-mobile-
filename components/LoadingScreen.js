// pages/LoadingPage.js

import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const LoadingPage = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <ActivityIndicator size='large' color="#e33b38" />
      <Text className="mt-4 text-gray-500">Loading...</Text>
    </View>
  );
};

export default LoadingPage;
