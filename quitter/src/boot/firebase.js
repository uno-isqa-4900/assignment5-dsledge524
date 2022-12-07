import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files

import firebase from 'firebase/app' 
import 'firebase/firestore' 
const firebaseConfig = { 
  apiKey: "AIzaSyAiz8AC0kNQ4RA7Bl5xz9EqhfvabQT8qrA", 
  authDomain: "quitter-7f4e0.firebaseapp.com", 
  projectId: "quitter-7f4e0", 
  storageBucket: "quitter-7f4e0.appspot.com", 
  messagingSenderId: "681299529751", 
  appId: "1:681299529751:web:19d84a0692d94109cb4c52" };

// Initialize Firebase 
firebase.initializeApp(firebaseConfig) 
// access firebase database with db variable 
const db = firebase.firestore() 
export default db