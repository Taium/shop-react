// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAgWpvUEJ-i_cLeB1LIb-Jo_y7Y36FP41M",
    authDomain: "eshop-c3a52.firebaseapp.com",
    projectId: "eshop-c3a52",
    storageBucket: "eshop-c3a52.appspot.com",
    messagingSenderId: "202635599068",
    appId: "1:202635599068:web:0d7cd97e84ed93ef652819",
    measurementId: "G-GG893T4E71"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestone();

  const auth = firebase.auth();

  export { db, auth}