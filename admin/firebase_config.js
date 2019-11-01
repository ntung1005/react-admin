import firebase from "firebase";

try {
  firebase.initializeApp({
    apiKey: "AIzaSyBvSRx9AGXERVMI5PU0MmY3Xm6EB_SSUA4",
    authDomain: "demodb-bb9ec.firebaseapp.com",
    databaseURL: "https://demodb-bb9ec.firebaseio.com",
    projectId: "demodb-bb9ec",
    storageBucket: "demodb-bb9ec.appspot.com",
    messagingSenderId: "595974248965",
    appId: "1:595974248965:web:712d0fa9a09e2f9c291a6c",
    measurementId: "G-G48262456P"
  });
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const firebase_config = firebase;
export default firebase_config;
