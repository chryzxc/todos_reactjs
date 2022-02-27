import React, { Component } from "react";
import "./index.css";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";
import waves from "./assets/wave.svg";

function App() {
  return (
    <div className="App">
      <img src={waves} />

      <div>
        <h1>My TodoList</h1>
        <div>
          <TodoForm />
        </div>
      </div>

      <div style={{
        marginBottom: 100,
      }}>
        <TodoList />
      </div>
    </div>
  );
}
export default App;
