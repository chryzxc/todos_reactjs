import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyBL0SBvQF5aoNcteI0j9GpbPZNepB6IeVA",
    authDomain: "todolist-19964.firebaseapp.com",
    databaseURL: "https://todolist-19964-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todolist-19964",
    storageBucket: "todolist-19964.appspot.com",
    messagingSenderId: "951347713941",
    appId: "1:951347713941:web:57a216df5d53a1891e089c",
    measurementId: "G-2MWHM4Y71X"
};

const app = initializeApp(firebaseConfig);
var firebase = getDatabase(app);

export default firebase;