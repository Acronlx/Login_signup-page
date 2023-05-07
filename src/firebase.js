import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC56QZQhXn-i8LGUkxbKkr3iq9iZCkkDzw",
  authDomain: "login-d4c38.firebaseapp.com",
  projectId: "login-d4c38",
  storageBucket: "login-d4c38.appspot.com",
  messagingSenderId: "202748730719",
  appId: "1:202748730719:web:7a8ccbaff10bc55a1f6aea",
  measurementId: "G-KTLLB2RW5P"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };