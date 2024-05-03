import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvDcY_iazk6hrbzlsXRKo9WxSxL3nozOY",
  authDomain: "loginapp-e9efc.firebaseapp.com",
  projectId: "loginapp-e9efc",
  storageBucket: "loginapp-e9efc.appspot.com",
  messagingSenderId: "922694240481",
  appId: "1:922694240481:web:54a62ee208a49e3d534fa0",
  measurementId: "G-STDDCHD4Z6"
};


const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();