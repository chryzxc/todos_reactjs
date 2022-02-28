import React from "react";
import { format } from "date-fns";
import styled from "styled-components";

import IconButton from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskFinished = styled.h3`
  text-decoration-line: line-through;
  color: #0099ff;
`;
const TaskUnfinished = styled.h3`
  text-decoration-line: none;
  color: #0099ff;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #0099ff;
  color: #0099ff;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const Container = styled("div")({
  width: "100%",
  height: 50,
  "min-height": "100vh",
  overflow: "auto",
  display: "flex",
  "flex-direction": "column",
  "align-items": "flex-start",
  "justify-content": "flex-start",
});

const Container1 = styled("div")({
  display: "flex",
  width: "100%",
  "align-items": "flex-start",
  flex: "0 0 auto",
  position: "relative",
  "list-style-type": "square",
  "list-style-position": "outside",
  "list-style-image": "none",
  "border-width": "1px",
});

const Checkbox = styled("input")({
  "align-self": "center",
  "margin-left": "20px",
});

const Container2 = styled("div")({
  display: "flex",
  "flex-direction": "column",
  "align-items": "center",
  flex: "0 0 auto",
  "justify-content": "flex-start",
  width: "242px",
});

const Container3 = styled("div")({
  display: "flex",
  "flex-direction": "column",
  "align-items": "center",
  flex: "0 0 auto",
  "justify-content": "center",
});

const Container4 = styled("div")({
  display: "flex",
  "flex-direction": "column",
  width: "200px",
  height: "100px",
  "align-items": "flex-start",
  flex: "0 0 auto",
  "justify-content": "center",
});

const Container5 = styled("div")({
  display: "flex",
  "flex-direction": "column",
  width: "200px",
  height: "100px",
  "align-items": "center",
  flex: "0 0 auto",
  top: "1px",
  position: "absolute",
  right: "0px",
  "justify-content": "center",
});

export const TodoRow = ({
  todos,
  deleteTodo,
  completeTodo,
  unfinishedTodo,
}) => {
  return (
    <Container>
      <Container1>
        {todos.completed ? (
          <Checkbox type="checkbox" checked="true" />
        ) : (
          <Checkbox type="checkbox" checked="true" disabled="disabled"/>
        )}

        <Container2>
          <Container3>
            <Container4>
              {todos.completed ? (
                <TaskFinished>{todos.task_name}</TaskFinished>
              ) : (
                <TaskUnfinished>{todos.task_name}</TaskUnfinished>
              )}
              <label>
                {format(
                  new Date(todos.date_created),
                  "eee · hh:m a · MMM dd, yyyy"
                ).toString()}
              </label>
            </Container4>
          </Container3>
        </Container2>
        <Container5>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={() => deleteTodo(todos.id, todos.task_name)}
          >
            <DeleteIcon />
          </IconButton>
          {todos.completed ? (
            <Button onClick={() => unfinishedTodo(todos.id, todos.task_name)}>
              Mark as unfinished
            </Button>
          ) : (
            <Button onClick={() => completeTodo(todos.id, todos.task_name)}>
              Mark as complete
            </Button>
          )}
        </Container5>
      </Container1>
    </Container>
  );
};
