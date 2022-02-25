import React, { useState, useEffect } from "react";

import { ref, onValue,remove,update } from "firebase/database";
import db from "../../others/Firebase";
import { TodoRow } from "./TodoRow";
import { toast } from "react-toastify";


export default function TodoList() {
  var userId = "1";

  const dbRef = ref(db, "users/" + userId + "/todo/");
  const [todoList, setTodoList] = useState();

 


  const deleteTodo = (todoId,todoName) => {
  
    remove(ref(db, "users/" + userId + "/todo/" + todoId))
    .then(() => {
      toast(todoName + "deleted")
    })
    .catch((error) => {
      toast(error)
    });
  }


  const completeTodo = (todoId,todoName) => {
    update(ref(db, "users/" + userId + "/todo/" + todoId), {
      completed: true,
    })
    .then(() => {
      toast(todoName + " completed")
    })
    .catch((error) => {
      toast(error)
    });
    
  }

 
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
     {todoList? todoList.map((todos) => <TodoRow todos = {todos} deleteTodo={deleteTodo} completeTodo={completeTodo} ></TodoRow>) :  <h2>Loading</h2>}
      
    </div>
  );
  
}
