import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPmT0Y0yXZNJDMzpz9odDnyLnm2u3LSRI",
  authDomain: "chat-6cc7f.firebaseapp.com",
  projectId: "chat-6cc7f",
  storageBucket: "chat-6cc7f.appspot.com",
  messagingSenderId: "799728449634",
  appId: "1:799728449634:web:33aaebe161fe9e78f3b93b",
  measurementId: "G-4JM19R8E7X"
};


export const app = initializeApp(firebaseConfig);
export const databaseApp = getFirestore(app);






