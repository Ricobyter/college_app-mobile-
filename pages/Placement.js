import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header'; // Import the Header component

const Placement = () => {
  const [selectedYear, setSelectedYear] = useState('2021'); // Default to a valid year
  const [expanded, setExpanded] = useState(false);

  const years = ['2021', '2020', '2019'];

  const placementData = {
    '2021': {
      totalStudents: 90,
      eligibleStudents: 82,
      interestedStudents: 82,
      totalOffers: 92,
      placedStudents: 72,
    },
    '2020': {
      totalStudents: 96,
      eligibleStudents: 67,
      interestedStudents: 67,
      totalOffers: 94,
      placedStudents: 65,
    },
    '2019': {
      totalStudents: 87,
      eligibleStudents: 68,
      interestedStudents: 68,
      totalOffers: 84,
      placedStudents: 64,
    },
  };

  const handlePress = () => {
    setExpanded(!expanded);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setExpanded(false); // Close dropdown after selection
  };

  // Get current data based on selectedYear, or default to an empty object if the year is not found
  const currentData = placementData[selectedYear] || {};

  const chartData = {
    labels: ['Total Students', 'Eligible Students', 'Interested Students', 'Total Offers', 'Placed Students'],
    datasets: [
      {
        data: [
          currentData.totalStudents || 0,
          currentData.eligibleStudents || 0,
          currentData.interestedStudents || 0,
          currentData.totalOffers || 0,
          currentData.placedStudents || 0,
        ],
      },
    ],
  };

  const chartX = new Animated.Value(-50); // Adjust this value to shift the chart left

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Placement Statistics</Text>
        </View>

        <View style={styles.dropdownSection}>
          <TouchableOpacity onPress={handlePress} style={styles.dropdownHeader}>
            <Text style={styles.dropdownTitle}>{selectedYear}</Text>
            <Icon name={expanded ? 'chevron-up' : 'chevron-down'} size={20} color="#004d40" />
          </TouchableOpacity>
          {expanded && (
            <View style={styles.dropdownContent}>
              {years.map((year) => (
                <TouchableOpacity key={year} onPress={() => handleYearSelect(year)} style={styles.yearItem}>
                  <Text style={styles.yearText}>{year}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <View style={styles.chartSection}>
          <Text style={styles.sectionTitle}>Batch {selectedYear}</Text>
          <View style={styles.statContainer}>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Total Students</Text>
              <Text style={styles.statValue}>{currentData.totalStudents || 'N/A'}</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Eligible Students</Text>
              <Text style={styles.statValue}>{currentData.eligibleStudents || 'N/A'}</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Interested Students</Text>
              <Text style={styles.statValue}>{currentData.interestedStudents || 'N/A'}</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Total Offers</Text>
              <Text style={styles.statValue}>{currentData.totalOffers || 'N/A'}</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Placed Students</Text>
              <Text style={styles.statValue}>{currentData.placedStudents || 'N/A'}</Text>
            </View>
          </View>
          <Animated.View
            style={[styles.chartContainer, { transform: [{ translateX: chartX }] }]}
          >
            <BarChart
              style={styles.chart}
              data={chartData}
              width={290} // Increase width to fit the content
              height={400}
              yAxisLabel=""
              chartConfig={chartConfig}
              verticalLabelRotation={40}
              fromZero={true}
            />
          </Animated.View>
        </View>
      </ScrollView>
    </View>
  );
};

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 0.7,
  style: {
    borderRadius: 16,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1', // Matching Programs background
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff', // Matching Programs header background
    paddingVertical: 10,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 26, // Matching Programs header text size
    fontWeight: 'bold',
    color: '#004d40',
  },
  dropdownSection: {
    marginBottom: 20,
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffffff', // Matching Programs section background
    borderRadius: 5,
  },
  dropdownTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d40', // Matching Programs text color
    marginLeft: 5,
  },
  dropdownContent: {
    paddingVertical: 10,
    backgroundColor: '#ffffff', // Matching Programs section background
    borderRadius: 5,
  },
  yearItem: {
    padding: 10,
  },
  yearText: {
    fontSize: 18,
    color: '#004d40', // Matching Programs text color
  },
  chartSection: {
    backgroundColor: '#ffffff', // Matching Programs section background
    padding: 15,
    borderRadius: 10,
    elevation: 3, // Shadow effect for Android
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  statContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  stat: {
    width: '48%',
    marginBottom: 10,
  },
  statLabel: {
    fontSize: 15,
    color: '#666',
  },
  statValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  chartContainer: {
    alignItems: 'center',
    marginLeft: 80, // Adjust this value to shift the chart left
  },
  chart: {
    borderRadius: 10,
  },
});

export default Placement;
