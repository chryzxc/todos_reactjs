import React from "react";
import { format } from "date-fns";

export const TodoRow = ({
  todos,
  deleteTodo,
  completeTodo,
  unfinishedTodo,
}) => {
  return (
    <div style={{
      width: 'auto',
      flexWrap: 'wrap',
    }}>
      <hr class="solid"></hr>
      <div key={todos.id} style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <p>{todos.task_name}</p>
          <label>
            {format(
              new Date(todos.date_created),
              "eee · hh:m a · MMM dd, yyyy"
            ).toString()}
          </label>
        </div>
        <div>
          {todos.completed ? <p>Done</p> : <p>Not done</p>}

          <button onClick={() => deleteTodo(todos.id, todos.task_name)}>
            Delete
          </button>
          {todos.completed ? (
            <button onClick={() => unfinishedTodo(todos.id, todos.task_name)}>
              Mark as unfinished
            </button>
          ) : (
            <button onClick={() => completeTodo(todos.id, todos.task_name)}>
              Mark as complete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
