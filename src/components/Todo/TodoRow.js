import React from 'react'
import { TouchableWithoutFeedbackBase } from 'react-native'

export const TodoRow = () => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })
  return todos.map((todo, index) => {
    <div 
    className={todo.isComplete ? 'todo-row-complete' : 'todo-row'} 
    key ={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
       
      
    </div>
  });
  
  
}
