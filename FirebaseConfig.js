// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID } from '@env';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID
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

const storage = getStorage(FIREBASE_APP)

export { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB, serverTimestamp, storage };
