import React from "react";


export const TodoRow = ({todos, deleteTodo, completeTodo}) => {
 


  return ( 
    <div>
      <p>{todos.task_name}</p>
      {todos.completed ? <p>Done</p> : <p>Not done</p>}
      <p>{new Date(todos.date_created).toString()}</p>
      <button onClick={() => deleteTodo(todos.id,todos.task_name)}>Delete</button>
      {todos.completed ?  <p></p> :<button onClick={() => completeTodo(todos.id,todos.task_name)}>Done</button>}
     
    </div>
   
  );
};
