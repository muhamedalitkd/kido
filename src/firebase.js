// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB7Nq7s-SaTvtnil-sskqI_mysN-BUJ6tI",
    authDomain: "clone-c3df9.firebaseapp.com",
    databaseURL: "https://clone-c3df9.firebaseio.com",
    projectId: "clone-c3df9",
    storageBucket: "clone-c3df9.appspot.com",
    messagingSenderId: "472235944713",
    appId: "1:472235944713:web:36c75e99688cbeb3c041d8",
    measurementId: "G-DBMZFL5XMJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };