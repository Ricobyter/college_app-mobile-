// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUz9aKZBfvdKWfy8bJnGVLcMubRkbK1zU",
    authDomain: "college-app-a3c13.firebaseapp.com",
    projectId: "college-app-a3c13",
    storageBucket: "college-app-a3c13.appspot.com",
    messagingSenderId: "21661257405",
    appId: "1:21661257405:web:ac5f8dca2b758fe7afb1d4"
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

export { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB, serverTimestamp };
