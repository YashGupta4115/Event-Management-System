import { initializeApp } from "firebase/app";
import apiKey from '../Assests/apiKey.env';

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "event-management-system-80313.firebaseapp.com",
  projectId: "event-management-system-80313",
  storageBucket: "event-management-system-80313.firebasestorage.app",
  messagingSenderId: "572766206845",
  appId: "1:572766206845:web:6ee6c7a9d78bed5f93aa14",
  measurementId: "G-4J4F2S1JPH"
};

const app = initializeApp(firebaseConfig);