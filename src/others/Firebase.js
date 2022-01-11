import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCc5rHxBhN4IyrC7GKr3fvWkHa4lPvugTk",
    authDomain: "todo-b3327.firebaseapp.com",
    databaseURL: "https://todo-b3327-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todo-b3327",
    storageBucket: "todo-b3327.appspot.com",
    messagingSenderId: "433169995773",
    appId: "1:433169995773:web:1d532cb3f89b284cb06b94",
};

const app = initializeApp(firebaseConfig);
var db = getDatabase(app);

export default db;