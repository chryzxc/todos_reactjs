import React, { useState } from "react";
import db from "../../others/Firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ref, set, onValue, push } from "firebase/database";

toast.configure();

const TodoForm = () => {
  var userId = "123456";

  const [task_name, setTaskName] = useState("");

  const createTodo = (e) => {
    e.preventDefault();

    const todo = {
      task_name,
      date_created: Date.now(),
      completed: false,
    };

    const dbRef = ref(db, "users/" + userId + "/todo/");
    const newTaskRef = push(dbRef);
    set(newTaskRef, todo).then(() => {
      toast("Saved");
      setTaskName("");
    })
    .catch((error) => {
      toast(error);
    });;

  
   // set(ref(db, dbRef + "/"), todo)
      
  };

  /*
  const test = (e) => {
    e.preventDefault();
    const dbRef = ref(db, "users/" + userId + "/Todo");

    onValue(dbRef, (snapshot) => {
      toast(snapshot.val().task_name);
    });
  };
  */

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <form onSubmit={createTodo}>
      <input
        type="text"
        placeholder="Enter task name..."
        className="task-input"
        value={task_name}
        required
        onChange={handleChange}
      ></input>
      <button className="button-add-todo" type="submit">
        Add
      </button>
    </form>
  );
};
export default TodoForm;