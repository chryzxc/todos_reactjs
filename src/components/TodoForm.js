import React, { useState } from "react";
import db from "../others/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ref, set, push } from "firebase/database";

toast.configure();

const TodoForm = () => {
  var userId = "1";
  const path = "users/" + userId + "/todo/";

  const [taskName, setTaskName] = useState("");

  const createTodo = (e) => {
    e.preventDefault();
   
   
    const todo = {
      task_name: taskName,
      date_created: Date.now(),
      completed: false,
    };

    const dbRef = ref(db, path);
    const newTaskRef = push(dbRef);


    set(newTaskRef, todo)
      .then(() => {
    
       
        toast(taskName + " added");
       // setTaskName("");
       
      })
      .catch((error) => {
        toast(error);
     
      });

  
  };


  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={createTodo}>
        <input
          type="text"
          placeholder="Enter task name..."
          className="task-input"
          value={taskName}
          required
          onChange={handleChange}
        ></input>
        <button className="button-add-todo" type="submit"> Add </button>

         
       
   
      </form>

     
    </div>
  );
};
export default TodoForm;
