import React from "react";
import Card from "react-bootstrap/Card";
import ImageButton from "react-image-button";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";


export const TodoRow = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <div style={{
      display: 'flex'
    }}>
      <div style={{
      
          flex: "50%"
        
      }}>
        <h1>test</h1>
      </div>
      <div style={{
      
      flex: "50%"
    
  }}>
        <h1>test</h1>
      </div>

      <p>{todos.task_name}</p>
      {todos.completed ? <p>Done</p> : <p>Not done</p>}
      <p>{new Date(todos.date_created).toString()}</p>
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
