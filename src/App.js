import React from "react";
import "./App.css";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";

function App() {
  return (
    <div className="App">
      <h1>My TodoList</h1>
      <div>
        <TodoForm/>
      </div>
      <div>
        <TodoList/>
      </div>
      
    </div>
  );
}
export default App;
