import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBL0SBvQF5aoNcteI0j9GpbPZNepB6IeVA",
    authDomain: "todolist-19964.firebaseapp.com",
    projectId: "todolist-19964",
    storageBucket: "todolist-19964.appspot.com",
    messagingSenderId: "951347713941",
    appId: "1:951347713941:web:57a216df5d53a1891e089c",
    measurementId: "G-2MWHM4Y71X"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;