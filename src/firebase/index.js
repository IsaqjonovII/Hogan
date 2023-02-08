// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0OmbiyUC2MWt3_Qiuz5cO02UClzj6ysM",
  authDomain: "hogan-rebuild.firebaseapp.com",
  projectId: "hogan-rebuild",
  storageBucket: "hogan-rebuild.appspot.com",
  messagingSenderId: "978921144599",
  appId: "1:978921144599:web:8ae525077cd45edf093752",
  measurementId: "G-23B5JV2S58",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


