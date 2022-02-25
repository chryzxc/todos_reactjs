import React, { useState, useEffect } from "react";

import { ref, onValue } from "firebase/database";
import db from "../../others/Firebase";


export default function TodoList() {
  var userId = "123456";

  const dbRef = ref(db, "users/" + userId + "/todo/");
  const [todoList, setTodoList] = useState("");

  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      const todoList = [];
      snapshot.forEach((data) => {
        const dataVal = data.val();

        todoList.push({
          id: data.key,
          completed: dataVal.completed,
          date_created: dataVal.date_created,
          task_name: dataVal.task_name,
        });
      });
     
      setTodoList(todoList);
    //  todoList.map((todos) => console.log(todos.completed));
      console.log(todoList);
    });
  }, []);

  
  
  return (
    <div>
     {todoList && todoList.map((todos) => 
     <div>
     <h2>{todos.task_name}</h2>
     <p>Date created: {todos.date_created}</p>
     </div>
     )}
      
    </div>
  );
  
}
