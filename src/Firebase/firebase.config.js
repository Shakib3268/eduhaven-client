// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4QOtn1jWjr48WpHamvPSJZyLsPKgBsRo",
  authDomain: "eduhaven-client.firebaseapp.com",
  projectId: "eduhaven-client",
  storageBucket: "eduhaven-client.appspot.com",
  messagingSenderId: "158003437631",
  appId: "1:158003437631:web:030c75a022729941c2d88a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;