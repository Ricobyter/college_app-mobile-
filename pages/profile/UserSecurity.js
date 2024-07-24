import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const UserSecurity = () => {
  const navigation = useNavigation();

  const handleNavigateToChangePassword = () => {
    navigation.navigate('ChangePassword'); // Ensure 'ChangePassword' matches the route name in your navigator
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#e0f2f1', // Background color matching the theme
  },
  headerContainer: {
    marginBottom: 30,
    backgroundColor: '#00796b', // Header background color matching the Gallery header
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
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
