import React, { useState, useEffect, setState } from "react";

import { ref, onValue } from "firebase/database";
import db from "../../others/Firebase";
import { toast } from "react-toastify";

export default function TodoList() {
  var userId = "123456";

  const dbRef = ref(db, "users/" + userId + "/todo/");
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      const todoList = [];
      snapshot.forEach((data) => {
        const dataVal = data.val();

        todoList.push({
          id: data.key,
          completed: dataVal.completed,
          date_created: dataVal.date_created,
          task_name: dataVal.task_name,
        });
      });
      //  setTodoList(todoList);
      console.log(todoList);
    });
  });

  /*
  const [todoList, setTodoList] = useState();
  useEffect(() => {
    onValue(
      dbRef,
      (snapshot) => {
        toast(snapshot.value);
        const todos = snapshot.value;
        const todoList = [];
        for (let id in todos) {
          toast(todos[id]);
      //    todoList.push({
            id,
            ...todos[id],
          });
        }
        setTodoList(todoList);
      },
      {
        onlyOnce: true,
      }
    );
  }, []);
    */
  return ( {
   
  });
};
