// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpKQSBmb49YnRz4mOAWFkos9wxxrUZ2a8",
  authDomain: "acowale-gnews.firebaseapp.com",
  databaseURL: "https://acowale-gnews-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "acowale-gnews",
  storageBucket: "acowale-gnews.appspot.com",
  messagingSenderId: "515766510196",
  appId: "1:515766510196:web:9d530579b4228f9fb36721",
  measurementId: "G-DWN2Q8KPL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);