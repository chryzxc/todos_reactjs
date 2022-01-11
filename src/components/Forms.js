import React, {useState} from 'react'
import firebase from "../others/Firebase"
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

 const Forms = () => {
   
    const [taskName,setTaskName] = useState("");

    const createTodo = (e) => {
        toast("ok");
        e.preventDefault();
      
/*
        const todoRef = firebase.database().ref("Users/chan/Todo");
        const todo ={
            taskName,
            dateCreated: new Date(),
            completed: false
        }
        todoRef.push(todo);
        */

    };
    const handleChange = (e) => {
        setTaskName(e.target.value);
    };

    return (
       <form>
           <input onSubmit={createTodo}
           type="text"
           placeholder="Enter task name"
           className="task-input"
           value={taskName}
           required
           onChange={handleChange}>
           </input>

           <button className="button-add-todo" type="submit">
               Add
           </button>
       </form>
    )
}

export default Forms;
