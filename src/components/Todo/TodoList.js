import React, { useState, useEffect } from "react";

import { ref, onValue } from "firebase/database";
import db from "../../others/Firebase";
import { toast } from "react-toastify";

export default function TodoList() {
  var userId = "123456";

  const dbRef = ref(db, "users/" + userId );
 
  onValue(dbRef, (snapshot) => {
    toast(snapshot.val());
  });
  
 
  /*
  const [todoList, setTodoList] = useState();
  useEffect(() => {
    onValue(
      dbRef,
      (snapshot) => {
        toast(snapshot.value);
        const todos = snapshot.value;
        const todoList = [];
        for (let id in todos) {
          toast(todos[id]);
          todoList.push({
            id,
            ...todos[id],
          });
        }
        setTodoList(todoList);
      },
      {
        onlyOnce: true,
      }
    );
  }, []);
  
  return (
    <div>
      {todoList ? todoList.map((todo) => <h1>{todo.task_name}</h1>) : ""}
    </div>
  );
  */
}
