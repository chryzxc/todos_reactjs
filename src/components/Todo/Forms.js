import React, { useState } from "react";
import db from "../../others/Firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ref, set, onValue } from "firebase/database";

toast.configure();

const Forms = () => {
  var userId = "123456";

  const [task_name, setTaskName] = useState("");

  const createTodo = (e) => {
    e.preventDefault();

    const dbRef = "users/" + userId + "/Todo";
    const todo = {
      task_name,
      date_created: Date.now(),
      completed: false,
    };

    set(ref(db, dbRef), todo)
      .then(() => {
        toast("Saved");
      })
      .catch((error) => {
        toast(error);
      });

    /*
                                                                                        const todoRef = db.ref("Users/chan/Todo");
                                                                                        const todo ={
                                                                                            taskName,
                                                                                            dateCreated: new Date(),
                                                                                            completed: false
                                                                                        }
                                                                                        todoRef.push(todo);
                                                                                    */
  };

  const test = (e) => {
    e.preventDefault();
    const dbRef = ref(db, "users/" + userId + "/Todo");

    onValue(dbRef, (snapshot) => {
      toast(snapshot.val().task_name);
    });
  };

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <form onSubmit={test}>
      <input
        type="text"
        placeholder="Enter task name..."
        className="task-input"
        value={task_name}
        required
        onChange={handleChange}
      ></input>{" "}
      <button className="button-add-todo" type="submit">
        Add{" "}
      </button>{" "}
    </form>
  );
};

export default Forms;
