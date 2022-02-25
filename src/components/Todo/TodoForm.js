import React, { useState } from "react";
import db from "../../others/Firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ref, set, push } from "firebase/database";

toast.configure();

const TodoForm = () => {
  var userId = "1";

  const [taskName, setTaskName] = useState("");

  const createTodo = (e) => {
    e.preventDefault();

    const todo = {
      task_name: taskName,
      date_created: Date.now(),
      completed: false,
    };

    const dbRef = ref(db, "users/" + userId + "/todo/");
    const newTaskRef = push(dbRef);
    set(newTaskRef, todo)
      .then(() => {
        toast("Saved");
        setTaskName("");
      })
      .catch((error) => {
        toast(error);
      });

    // set(ref(db, dbRef + "/"), todo)
  };
  /*
  const test = (e) => {
    e.preventDefault();
    const dbRef = ref(db, "users/" + userId + "/todo/");
    console.log("test");

    onValue(dbRef, (snapshot) => {
      let newUserState = [];
      snapshot.forEach((data) => {
        const dataVal = data.val();
        newUserState.push({
          id: data.key,
          name: dataVal.name,
          account: dataVal.account,
        });
        console.log(dataVal.task_name);
      });
    });

    // onValue(dbRef, (snapshot) => {
    ///    toast(snapshot.val().task_name);
    //  });
  };
*/

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={createTodo}>
        <input
          type="text"
          placeholder="Enter task name..."
          className="task-input"
          value={taskName}
          required
          onChange={handleChange}
        ></input>
        <button className="button-add-todo" type="submit">
          Add
        </button>
      </form>

     
    </div>
  );
};
export default TodoForm;
