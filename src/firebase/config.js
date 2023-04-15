import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyA8xLZi05mph80ISYyaiikXQhD5Q8kA9Lk",
  authDomain: "auth-with-firebase-fbedd.firebaseapp.com",
  projectId: "auth-with-firebase-fbedd",
  storageBucket: "auth-with-firebase-fbedd.appspot.com",
  messagingSenderId: "621029986717",
  appId: "1:621029986717:web:56c5b93360208205631f74"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);