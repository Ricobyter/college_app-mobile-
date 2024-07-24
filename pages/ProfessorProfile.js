import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/userSlice'; // Adjust the path as necessary
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ProfessorProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const route = useRoute();
  const { professorId } = route.params;
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    if (professorId) {
      dispatch(getUser(professorId));
    }
  }, [dispatch, professorId]);

  const { username, photoURL, educationQualifications, userEmail, birthPlace, designation, bio, phone, error } = useSelector((state) => state.user);

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Professor Profile</Text>
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
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.designation}>{designation}</Text>
        <Text style={styles.bio}>{bio}</Text>
        <Text style={styles.infoText}>Email: {userEmail}</Text>
        <Text style={styles.infoText}>Phone: {phone}</Text>
        <Text style={styles.infoText}>Birth Place: {birthPlace}</Text>
        <Text style={styles.sectionTitle}>Education Qualifications:</Text>
        {educationQualifications && educationQualifications.length > 0 ? (
          educationQualifications.map((qualification, index) => (
            <Text key={index} style={styles.qualificationText}>
              {qualification}
            </Text>
          ))
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
    backgroundColor: '#e0f2f1', // Background color matching the theme
  },
  headerContainer: {
    marginBottom: 20,
    backgroundColor: '#00796b', // Header background color
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
    padding: 60,
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
  username: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#004d40',
    marginBottom: 10,
  },
  designation: {
    fontSize: 18,
    color: '#004d40',
    marginBottom: 20,
  },
  bio: {
    fontSize: 16,
    color: '#004d40',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#004d40',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d40',
    marginBottom: 10,
    textAlign: 'center',
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
