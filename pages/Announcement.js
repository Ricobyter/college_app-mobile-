// import React, { useEffect, useState, useCallback } from 'react';
// import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert, ActivityIndicator, RefreshControl } from 'react-native';
// import { collection, getDocs, orderBy, query, doc, deleteDoc } from 'firebase/firestore';
// import { FIREBASE_DB } from '../FirebaseConfig';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Toast from 'react-native-toast-message';
// import Header from '../components/Header';
// import { AdminOnly } from '../utils';

// const Announcement = () => {
//   const [announcements, setAnnouncements] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false); // Refresh state

//   const fetchAnnouncements = async () => {
//     try {
//       const q = query(collection(FIREBASE_DB, 'announcements'), orderBy('createdAt', 'desc'));
//       const querySnapshot = await getDocs(q);
//       const fetchedAnnouncements = [];
//       querySnapshot.forEach((doc) => {
//         fetchedAnnouncements.push({ ...doc.data(), id: doc.id });
//       });
//       setAnnouncements(fetchedAnnouncements);
//     } catch (error) {
//       console.error('Error fetching announcements: ', error);
//     } finally {
//       setLoading(false);
//       setRefreshing(false); // Stop refreshing animation
//     }
//   };

//   useEffect(() => {
//     fetchAnnouncements();
//   }, []);

//   // Pull-to-refresh function
//   const onRefresh = useCallback(() => {
//     setRefreshing(true);
//     fetchAnnouncements();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteDoc(doc(FIREBASE_DB, 'announcements', id));
//       setAnnouncements(announcements.filter((announcement) => announcement.id !== id));
//       Toast.show({
//         type: 'success',
//         text1: 'Deleted',
//         text2: 'Announcement deleted successfully!',
//       });
//     } catch (error) {
//       console.error('Error deleting announcement: ', error);
//     }
//   };

//   const confirmDelete = (id) => {
//     Alert.alert(
//       'Delete Announcement',
//       'Are you sure you want to delete this announcement?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         { text: 'Delete', onPress: () => handleDelete(id), style: 'destructive' },
//       ],
//       { cancelable: false }
//     );
//   };

//   return (
//     <>
//       <Header />
//       <View style={styles.container}>
//         <View style={styles.contentContainer}>
//           <View style={styles.headerContainer}>
//             <Text style={styles.headerText}>Announcements</Text>
//           </View>

//           {loading ? (
//             <ActivityIndicator size="large" color="#00796b" style={styles.loader} />
//           ) : (
//             <ScrollView
//               contentContainerStyle={styles.scrollContainer}
//               refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={["#00796b"]} />}
//             >
//               {announcements.length > 0 ? (
//                 announcements.map((announcement) => (
//                   <View key={announcement.id} style={styles.announcementCard}>
//                     <View style={styles.cardHeader}>
//                       <Text style={styles.announcementTitle}>{announcement.title}</Text>

//                       <AdminOnly>
//                         <TouchableOpacity onPress={() => confirmDelete(announcement.id)}>
//                           <Icon name="delete" size={24} color="#d32f2f" />
//                         </TouchableOpacity>
//                       </AdminOnly>
//                     </View>
//                     <Text style={styles.announcementDate}>{announcement.date}</Text>
//                     <Text style={styles.announcementDescription}>{announcement.description}</Text>
//                   </View>
//                 ))
//               ) : (
//                 <Text style={styles.noAnnouncements}>No announcements available.</Text>
//               )}
//             </ScrollView>
//           )}
//         </View>
//       </View>
//       <Toast />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#e0f2f1',
//   },
//   contentContainer: {
//     flex: 1,
//     padding: 20,
//   },
//   headerContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//     backgroundColor: '#ffffff',
//     paddingVertical: 10,
//     borderRadius: 10,
//   },
//   headerText: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#004d40',
//   },
//   loader: {
//     marginTop: 20,
//     alignSelf: 'center',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//   },
//   announcementCard: {
//     backgroundColor: '#ffffff',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 15,
//     elevation: 3,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   announcementTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 5,
//   },
//   announcementDate: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 10,
//   },
//   announcementDescription: {
//     fontSize: 16,
//     color: '#333',
//   },
//   noAnnouncements: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginTop: 20,
//   },
// });

// export default Announcement;


import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Linking, ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchAchievements } from "../store/announcementDataSlice";

const Announcement = () => {
  const dispatch = useDispatch();
  const { achievements, status, error } = useSelector(state => state.announcements);

  useEffect(() => {
    dispatch(fetchAchievements());
  }, [dispatch]);

  const handleOpenLink = url => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.tab} onPress={() => handleOpenLink(item.link)}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  if (status === "loading") return <ActivityIndicator size="large" color="#000" />;
  if (status === "failed") return <Text>Error: {error}</Text>;

  return (
    <FlatList
      data={achievements}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  tab: {
    backgroundColor: "#e2ffd9",
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});


export default Announcement
