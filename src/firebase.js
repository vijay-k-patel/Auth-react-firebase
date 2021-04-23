import firebase from "firebase/app";
import "firebase/auth";

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

const app = firebase.initializeApp({
  apiKey: "AIzaSyCU53HkwO0L8Zn8bdPVVeCF5YGAqWGsu40",
  authDomain: "react-auth-dacb6.firebaseapp.com",
  databaseURL: "http://react-auth-dacb6.firebaseio.com",
  projectId: "react-auth-dacb6",
  storageBucket: "react-auth-dacb6.appspot.com",
  messagingSenderId: "723591759075",
  appId: "1:723591759075:web:cf9ce3e0d96adb5d01f1d6",
});

export const auth = app.auth();
export default app;
