import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';

const Publications = () => {
  const [expanded, setExpanded] = useState(null);
  const [selectedYear, setSelectedYear] = useState('2022');

  const years = ['2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007'];

  const publications = {
    2022: {
      journals: [
        {
          title: 'A novel multi-scale based deep convolutional neural network for detecting COVID-19 from X-rays',
          authors: 'Mohan Karnati, Ayan Seal, Geet Sahu, Yazidi, Ondrej Krejcar',
          journal: 'Applied Soft Computing',
          volume: '125',
          doi: 'https://doi.org/10.1016/j.asoc.2022.109109',
        },
      ],
      conferences: [
        {
          title: 'Analysis of Hatchetman Attack in RPL Based IoT Networks',
          authors: 'Girish Sharma, Jyoti Grover, Abhishek Verma, Rajat Kumar, Rahul Lahre',
          conference: 'International Conference on Emerging Technologies in Computer Engineering',
          year: '2022',
          pages: '666-678',
          publisher: 'Springer',
          location: 'Cham',
          doi: 'https://doi.org/10.1007/978-3-031-07012-9_55',
        },
      ],
    },
    2021: {
      journals: [
        {
          title: 'SD-WAN Flood Tracer: Tracking the Entry Points of DDoS Attack Flows',
          authors: 'Neelam Dayal, Shashank Srivastava',
          journal: 'WAN',
          volume: '186',
          doi: 'http://dx.doi.org/https://doi.org/10.1016/j.comnet.2021.107813',
        },
      ],
      conferences: [
        {
          title: 'Capturing the Aesthetic Design Intention in Product Design',
          authors: 'S. Soni S., P. Khanna , P. Tandon',
          conference: 'International Conference on Emerging Technologies in Computer Engineering',
          year: '2012',
          location: 'Karlsruhe, Germany',
        },
      ],
    },
    // Add other years' data here
  };

  const handlePress = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleLinkPress = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Publications</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Year</Text>
          <TouchableOpacity onPress={() => handlePress(0)} style={styles.dropdownHeader}>
            <Text style={styles.dropdownTitle}>{selectedYear}</Text>
            <Icon name={expanded === 0 ? 'chevron-up' : 'chevron-down'} size={20} color="#004d40" />
          </TouchableOpacity>
          {expanded === 0 && (
            <View style={styles.dropdownContent}>
              {years.map((year) => (
                <TouchableOpacity key={year} onPress={() => setSelectedYear(year)} style={styles.yearItem}>
                  <Text style={styles.yearText}>{year}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Journals ({selectedYear})</Text>
          {publications[selectedYear]?.journals.map((journal, index) => (
            <View key={index} style={styles.publicationItem}>
              <Text style={styles.publicationTitle}>{journal.title}</Text>
              <Text style={styles.publicationAuthors}>Authors: {journal.authors}</Text>
              <Text style={styles.publicationDetail}>Journal: {journal.journal}</Text>
              <Text style={styles.publicationDetail}>Volume: {journal.volume}</Text>
              <Text style={styles.publicationDetail}>DOI: <Text style={styles.doiLink} onPress={() => handleLinkPress(journal.doi)}>{journal.doi}</Text></Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Conferences ({selectedYear})</Text>
          {publications[selectedYear]?.conferences.map((conf, index) => (
            <View key={index} style={styles.publicationItem}>
              <Text style={styles.publicationTitle}>{conf.title}</Text>
              <Text style={styles.publicationAuthors}>Authors: {conf.authors}</Text>
              <Text style={styles.publicationDetail}>Conference: {conf.conference}</Text>
              <Text style={styles.publicationDetail}>Year: {conf.year}</Text>
              <Text style={styles.publicationDetail}>Pages: {conf.pages}</Text>
              <Text style={styles.publicationDetail}>Publisher: {conf.publisher}</Text>
              <Text style={styles.publicationDetail}>Location: {conf.location}</Text>
              <Text style={styles.publicationDetail}>DOI: <Text style={styles.doiLink} onPress={() => handleLinkPress(conf.doi)}>{conf.doi}</Text></Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 20, // Adjusted to provide space for the Header
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004d40',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d40',
    marginBottom: 10,
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#e0f2f1',
    borderRadius: 5,
  },
  dropdownTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004d40',
  },
  dropdownContent: {
    paddingVertical: 10,
    backgroundColor: '#e0f2f1',
    borderRadius: 5,
  },
  yearItem: {
    padding: 10,
  },
  yearText: {
    fontSize: 16,
    color: '#004d40',
  },
  publicationItem: {
    marginBottom: 10,
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 5,
    elevation: 3,
  },
  publicationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  publicationAuthors: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  publicationDetail: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  doiLink: {
    color: '#00796b',
  },
});

export default Publications;
