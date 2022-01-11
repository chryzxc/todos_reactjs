import React, { useState, useEffect } from "react";

import { ref, onValue } from "firebase/database";
import db from "../../others/Firebase";
import { toast } from "react-toastify";

export default function TodoList() {
    /*
        const [todoList, setTodoList] = useState();
        useEffect(() => {
          const todoRef = firebase.database().ref("todo");
          todoRef.on("value", (snapshot) => {
            const todos = snapshot.value;
            const todoList = [];
            for (let id in todos) {
              todoList.push({
                id,
                ...todos[id],
              });
            }
            setTodoList(todoList);
          });
        });
        */

    //test
    const dbRef = ref(db, "/a/b/c");

    onValue(
        dbRef,
        (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                toast(childKey);
                // ...
            });
        }, {
            onlyOnce: true,
        }
    );
}