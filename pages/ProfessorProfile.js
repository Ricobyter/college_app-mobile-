import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, fetchUserDegrees } from '../store/userSlice'; // Adjust the path as necessary
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoadingPage from '../components/LoadingScreen';

const ProfessorProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const route = useRoute();
  const { professorId } = route.params;
  const [imageLoading, setImageLoading] = useState(true);
  const [selectedBio, setSelectedBio] = useState('');
  const [selectedQualification, setSelectedQualification] = useState('');

  const { username, photoURL, educationQualifications, userEmail, isLoading, designation, bio, phone, error , degrees, uid} = useSelector((state) => state.user);

  useEffect(() => {
    if (professorId) {
      dispatch(getUser(professorId));
      dispatch(fetchUserDegrees(professorId)); 
    }
  }, [dispatch, professorId]);

  useEffect(() => {
    // Assuming that user data includes bio and qualifications
    if (bio) {
      setSelectedBio(bio);
    } else {
      setSelectedBio('No relevant information found');
    }
    if (educationQualifications && educationQualifications.length > 0) {
      setSelectedQualification(educationQualifications[0]);
    }
  }, [bio, educationQualifications]);

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          {imageLoading && <ActivityIndicator size="large" color="#00796b" style={styles.activityIndicator} />}
          <Image
            source={{
              uri: photoURL || 'https://via.placeholder.com/150',
            }}
            style={styles.profileImage}
            onLoad={() => setImageLoading(false)}
            onError={() => setImageLoading(false)}
          />
        </View>
        <View style={styles.infoContainer}>
          <Icon name="person" size={24} color="#004d40" style={styles.icon} />
          <Text style={styles.username}>{username}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Icon name="work" size={24} color="#004d40" style={styles.icon} />
          <Text style={styles.designation}>{designation}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Icon name="email" size={24} color="#004d40" style={styles.icon} />
          <Text style={styles.infoText}>{userEmail}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Icon name="phone" size={24} color="#004d40" style={styles.icon} />
          <Text style={styles.infoText}>{phone}</Text>
        </View>

        <Text style={styles.sectionTitle}>Bio:</Text>
        <Picker
          selectedValue={selectedBio}
          onValueChange={(value) => setSelectedBio(value)}
          style={styles.picker}
          enabled={false}
        >
          <Picker.Item label={selectedBio} value={selectedBio} />
        </Picker>

        <Text style={styles.sectionTitle}>Education Qualifications:</Text>
        {degrees && degrees.length > 0 ? (
          <Picker
            selectedValue={selectedQualification}
            onValueChange={(value) => setSelectedQualification(value)}
            style={styles.picker}
            enabled={false}
          >
            {degrees.map((degree) => (
              <Picker.Item key={degree.id} label={degree.degreeName} value={degree.degreeName} />
            ))}
          </Picker>
        ) : (
          <Text style={styles.qualificationText}>No qualifications listed</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#e0f2f1',
  },
  headerContainer: {
    marginBottom: 20,
    backgroundColor: '#00796b',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  contentContainer: {
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    position: 'relative',
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 90,
    position: 'absolute',
  },
  activityIndicator: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d40',
  },
  designation: {
    fontSize: 18,
    color: '#004d40',
  },
  infoText: {
    fontSize: 18,
    color: '#004d40',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d40',
    marginBottom: 10,
    textAlign: 'center',
  },
  picker: {
    width: '100%',
    marginBottom: 20,
  },
  qualificationText: {
    fontSize: 16,
    color: '#004d40',
    marginBottom: 5,
    textAlign: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f2f1',
  },
  errorText: {
    fontSize: 20,
    color: '#d32f2f',
  },
});

export default ProfessorProfile;
