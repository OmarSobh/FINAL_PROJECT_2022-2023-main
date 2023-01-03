import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyASjJtxWn_WMHy-NAdOESBaIP7BqtJrwWQ",
  authDomain: "besmart-2022.firebaseapp.com",
  projectId: "besmart-2022",
  storageBucket: "besmart-2022.appspot.com",
  messagingSenderId: "844322624640",
  appId: "1:844322624640:web:3cd25a2f82be8ab49d4265",
  measurementId: "G-ZH2YPJ0JRK"
});

export const auth = app.auth();
export default app;
