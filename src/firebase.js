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
  apiKey: "AIzaSyBy3kpE-cis6x7siMgqlriaEc1oVf9ulCc",
  authDomain: "react-auth-5ba14.firebaseapp.com",
  databaseURL: "http://react-auth-5ba14.firebaseio.com",
  projectId: "react-auth-5ba14",
  storageBucket: "react-auth-5ba14.appspot.com",
  messagingSenderId: "142394748794",
  appId: "1:142394748794:web:2d8c7f3534aaa0ecb0b0c3",
  measurementId: "G-GWB14N7D3Z",
});

export const auth = app.auth();
export default app;
