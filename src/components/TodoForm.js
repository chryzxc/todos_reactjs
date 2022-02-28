import React, { useState } from "react";
import db from "../others/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ref, set, push } from "firebase/database";
import styled from "styled-components";

toast.configure();

const AddButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #0099ff;
  color: #0099ff;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const InputAdd = styled.input`
  border: 2px solid #0099ff;
  margin: 10px;
  border-radius: 4px;
`;

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
         setTaskName("");
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
        <InputAdd
          type="text"
          placeholder="Enter task name..."
          className="task-input"
          value={taskName}
          required
          onChange={handleChange}
        ></InputAdd>
        <AddButton type="submit"> Add task</AddButton>
      </form>
    </div>
  );
};
export default TodoForm;
