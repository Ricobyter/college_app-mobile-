import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchUserDegrees } from '../store/userSlice'; // Adjust the path as necessary
import { getUser } from '../store/professorSlice';
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';

const ProfessorProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const route = useRoute();
  const { professorId } = route.params;
  const [imageLoading, setImageLoading] = useState(true);
  const [selectedBio, setSelectedBio] = useState('');
  const [isBioExpanded, setIsBioExpanded] = useState(false);
  const [isEducationExpanded, setIsEducationExpanded] = useState(false);

  const { username, photoURL, userEmail, isLoading, designation, bio, phone, error } = useSelector((state) => state.professor);
  const {degrees} = useSelector((state) => state.user);

  useEffect(() => {
    if (professorId) {
      dispatch(getUser(professorId));
      dispatch(fetchUserDegrees(professorId)); 
    }
  }, [dispatch, professorId]);

  useEffect(() => {
    if (bio) {
      setSelectedBio(bio);
    } else {
      setSelectedBio('No relevant information found');
    }
  }, [bio]);

  const toggleBioExpansion = () => {
    setIsBioExpanded(!isBioExpanded);
  };

  const toggleEducationExpansion = () => {
    setIsEducationExpanded(!isEducationExpanded);
  };

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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

          <TouchableOpacity onPress={toggleBioExpansion} style={[styles.sectionHeader, styles.bioSection]}>
            <Text style={styles.sectionTitle}>Bio:</Text>
            <Icon name={isBioExpanded ? "expand-less" : "expand-more"} size={24} color="#004d40" />
          </TouchableOpacity>

          {isBioExpanded && (
            <View style={styles.expandedContent}>
              <Text style={styles.bioText}>{selectedBio}</Text>
            </View>
          )}

          <TouchableOpacity onPress={toggleEducationExpansion} style={[styles.sectionHeader, styles.educationSection]}>
            <Text style={styles.sectionTitle}>Education Qualifications:</Text>
            <Icon name={isEducationExpanded ? "expand-less" : "expand-more"} size={24} color="#004d40" />
          </TouchableOpacity>

          {isEducationExpanded && (
            <View style={styles.expandedContent}>
              {degrees && degrees.length > 0 ? (
                degrees.map((degree) => (
                  <View key={degree.id} style={styles.degreeCard}>
                    <Text style={styles.degreeName}>{degree.degreeName}</Text>
                    <Text style={styles.institution}>{degree.institution}</Text>
                    <Text style={styles.year}>{degree.startYear} - {degree.endYear}</Text>
                  </View>
                ))
              ) : (
                <Text style={styles.noDegreesText}>No degrees found</Text>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e0f2f1',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  bioSection: {
    backgroundColor: '#b2dfdb',
    marginTop: 10,
  },
  educationSection: {
    backgroundColor: '#80cbc4',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d40',
  },
  expandedContent: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  bioText: {
    fontSize: 16,
    color: '#004d40',
  },
  degreeCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  degreeName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004d40',
  },
  institution: {
    fontSize: 16,
    color: '#004d40',
  },
  year: {
    fontSize: 14,
    color: '#004d40',
  },
  noDegreesText: {
    fontSize: 18,
    color: '#004d40',
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f2f1',
  },
});

export default ProfessorProfile;
