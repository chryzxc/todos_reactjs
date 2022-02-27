import React from "react";

import { ref,remove,update } from "firebase/database";
import db from "../../others/firebase";
import { TodoRow } from "./TodoRow";
import { toast } from "react-toastify";
import  useFetchData  from "../../others/useFetchData";


export default function TodoList() {
  var userId = "1";
  const path = "users/" + userId + "/todo/";
  const dbRef = ref(db,path);
  
  const {fetchData: todoList , isStillFetching} = useFetchData(dbRef);



  const deleteTodo = (todoId,todoName) => {
  
    remove(ref(db, path + todoId))
    .then(() => {
      toast(todoName + " deleted")
    })
    .catch((error) => {
      toast(error)
    });
  }


  const completeTodo = (todoId,todoName) => {
    update(ref(db,path + todoId), {
      completed: true,
    })
    .then(() => {
      toast(todoName + " completed")
    })
    .catch((error) => {
      toast(error)
    });
    
  }

  const unfinishedTodo = (todoId,todoName) => {
    update(ref(db,path + todoId), {
      completed: false,
    })
    .then(() => {
      toast('undo '+todoName)
    })
    .catch((error) => {
      toast(error)
    });
    
  }

  return (
    <div>

      {isStillFetching ? <p>Loading</p> : ""}
      {todoList && todoList.map((todos) => <TodoRow todos = {todos} deleteTodo={deleteTodo} completeTodo={completeTodo} unfinishedTodo={unfinishedTodo}></TodoRow>) }
      
    </div>
  );
  
}
