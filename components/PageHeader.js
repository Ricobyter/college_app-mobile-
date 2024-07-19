import { View, Text, Pressable } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo'; // Import Entypo icons

const PageHeader = ({ name, navigation }) => {
  return (
    <View className="flex-row justify-between items-center py-6 px-6 bg-white shadow-md">
      <Pressable onPress={() => navigation.goBack()} className="flex-row items-center ">
        <Icon name="chevron-left" size={26} color="#10d1b2" />
      </Pressable>
      <Text className="text-xl text-red font-bold">{name}</Text>
      <View></View>
       {/* Empty Text to balance the layout */}
    </View>
  );
};

export default PageHeader;
