import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import Header from '../../components/Header';

const UserSecurity = () => {
  const navigation = useNavigation();

  const handleNavigateToChangePassword = () => {
    navigation.navigate('ChangePassword'); // Ensure 'ChangePassword' matches the route name in your navigator
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Security</Text>
        </View>
        <View style={styles.content}>
          <TouchableOpacity 
            onPress={handleNavigateToChangePassword} 
            style={styles.button}
          >
            <Icon name="key" size={24} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1', // Background color matching the theme
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  headerContainer: {
    marginBottom: 30,
    backgroundColor: '#ffffff', // Header background color matching the UserProfile header
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#004d40',
  },
  content: {
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#00796b', // Button color consistent with header
    borderWidth: 1,
    borderColor: '#004d40', // Consistent border color
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default UserSecurity;
