import React from "react";
import { TouchableWithoutFeedbackBase } from "react-native";

export const TodoRow = () => {
  const [row, setRow] = useState({
    id: null,
    value: "",
    task_name: "",
  });
  return todos.map((todo, index) => {
    <div>
      <h1>Test12</h1>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
    </div>;
  });
};
