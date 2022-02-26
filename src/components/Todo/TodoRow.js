import React from "react";
import { format } from 'date-fns'

export const TodoRow = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <div key={todos.id} style={{ display: "flex", justifyContent: "center"}}>
      <div>
        <p>{todos.task_name}</p>
        <label>{format(new Date(todos.date_created), 'MMM dd yyyy hh:m a').toString()}</label>
      </div>

      {todos.completed ? <p>Done</p> : <p>Not done</p>}

      <button onClick={() => deleteTodo(todos.id, todos.task_name)}>
        Delete
      </button>
      {todos.completed ? (
        <p></p>
      ) : (
        <button onClick={() => completeTodo(todos.id, todos.task_name)}>
          Done
        </button>
      )}
    </div>
  );
};
