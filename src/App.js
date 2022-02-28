import React, { Component } from "react";
import "./index.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import waves from "./assets/wave.svg";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: #0099ff;
`;

function App() {
  return (
    <div className="App">
      <img src={waves} />

      <div>
        <Title>My TodoList</Title>
        <div>
          <TodoForm />
        </div>
      </div>

      <div
        style={{
          marginBottom: 100,
        }}
      >
        <TodoList />
      </div>
    </div>
  );
}
export default App;
