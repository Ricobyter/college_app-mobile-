// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN,FIREBASE_DATABASE_URL, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID } from '@env';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';
// import jsonData from './userdata/formatted_students_data1.json'

// Firebase configuration
const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    databaseURL: FIREBASE_DATABASE_URL
};

// Initialize Firebase
let FIREBASE_APP;
if (!FIREBASE_APP) {
  FIREBASE_APP = initializeApp(firebaseConfig);
}

// Initialize Auth with persistence
let FIREBASE_AUTH;
if (!FIREBASE_AUTH) {
  FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
}

// Initialize Firestore
let FIREBASE_DB;
if (!FIREBASE_DB) {
  FIREBASE_DB = getFirestore(FIREBASE_APP);
}

let FIREBASE_REALTIME_DB;
if (!FIREBASE_REALTIME_DB) {
    FIREBASE_REALTIME_DB = getDatabase(FIREBASE_APP);
}

const storage = getStorage(FIREBASE_APP)

// const uploadDataToUsers = async () => {
//   try {
//     const usersCollection = collection(FIREBASE_DB, 'usersss'); // Reference to the "users" collection

//     for (let user of jsonData.users) {
//       const userDocRef = doc(usersCollection, user.rollNo); // Use rollNo as the document ID
//       const userDocSnapshot = await getDoc(userDocRef);

//       if (!userDocSnapshot.exists()) {
//         // If document does not already exist, upload it
//         await setDoc(userDocRef, user);
//         console.log(`Uploaded: ${user.username}`);
//       } else {
//         console.log(`Document for Roll No: ${user.rollNo} already exists. Skipping...`);
//       }
//     }

//     console.log('Data upload completed!');
//   } catch (error) {
//     console.error('Error uploading data to Firestore:', error);
//   }
// };



export { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB, serverTimestamp, storage, FIREBASE_REALTIME_DB};
