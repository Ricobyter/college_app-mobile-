import { Text, View, Image, Pressable } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; // or any other icon library you prefer
import Header from '../components/Header';

export default class MainPage extends Component {
  render() {
    return (
      <View className="flex-1">
        <Header />

        <View className="flex-1 justify-center items-center">
          <Text>MainPage</Text>
        </View>
      </View>
    );
  }
}
