import { Text, View, Image, Pressable } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; // or any other icon library you prefer

export default class MainPage extends Component {
  render() {
    return (
      <View className="flex-1">
        <View className="flex-row justify-between items-center p-4 bg-white">
        <View>
          <Icon name="bars" size={24} className="text-right" />
          </View>
          <View>
          <Image
            source={require('../assets/images/logo.png')} // replace with your logo path
            style={{ width: 50, height: 50 }} // adjust size as needed
            className="mx-auto"
          />
           </View>

          <View >
            {/* This view acts as a spacer */}
            <Pressable className = 'bg-red py-2 px-3 rounded-xl'>
                <Text className="text-gray-200 text-md font-medium">Login</Text>
            </Pressable>
          </View>
        </View>
        <View className="flex-1 justify-center items-center">
          <Text>MainPage</Text>
        </View>
      </View>
    );
  }
}
