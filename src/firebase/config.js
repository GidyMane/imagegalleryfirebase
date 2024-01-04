// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtgQIkpGdjBD8ODHNgPQgtGEIWYOF9HMA",
  authDomain: "react-firebase-gallery-d-bc1a1.firebaseapp.com",
  projectId: "react-firebase-gallery-d-bc1a1",
  storageBucket: "react-firebase-gallery-d-bc1a1.appspot.com",
  messagingSenderId: "583022527158",
  appId: "1:583022527158:web:291e17cd07ab3f83879c17"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();
