// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo90riKSUYbqdhWY7pdXtZrUsVuorIly4",
  authDomain: "inventory-management-3ddd8.firebaseapp.com",
  projectId: "inventory-management-3ddd8",
  storageBucket: "inventory-management-3ddd8.appspot.com",
  messagingSenderId: "274956259528",
  appId: "1:274956259528:web:10eca9e1a20cbc6c8e15fd",
  measurementId: "G-L47ND0EC1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};