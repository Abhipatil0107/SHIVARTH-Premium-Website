
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKb6Jcr2oglnrlfdexLm12yHcByATkjA4",
  authDomain: "shivarth-a4369.firebaseapp.com",
  projectId: "shivarth-a4369",
  storageBucket: "shivarth-a4369.firebasestorage.app",
  messagingSenderId: "315061643703",
  appId: "1:315061643703:web:88ae49f60979b849532032",
  measurementId: "G-QWRMWBWHB4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
