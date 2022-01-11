import React, {useState} from 'react'
import db from "../others/Firebase"
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ref, set} from "firebase/database"
toast.configure()

 const Forms = () => {

    var userId = "123456"
   
    const [taskName,setTaskName] = useState("");

    const createTodo = (e) => {
        e.preventDefault();

        const todoRef = "Users/"+userId+"/Todo"
        const todo ={
            taskName,
            dateCreated: new Date(),
            completed: false
        }

        set(ref(db, todoRef), todo);
       
/*
        const todoRef = db.ref("Users/chan/Todo");
        const todo ={
            taskName,
            dateCreated: new Date(),
            completed: false
        }
        todoRef.push(todo);
    */
        toast("ok");
 

    };
    const handleChange = (e) => {
        setTaskName(e.target.value);
    };

    return (
       <form onSubmit={createTodo}>
           <input 
           type="text"
           placeholder="Enter task name..."
           className="task-input"
           value={taskName}
           required
           onChange={handleChange}>
           </input>

           <button className="button-add-todo" type='submit'>
               Add
           </button>
       </form>
    )
}

export default Forms;
