import React from "react";
import { useState } from "react";

const TodoBox = () => {
  let userTodo = JSON.parse(localStorage.getItem("list")) || [];
  const [first, setfirst] = useState("");
  const [todos, setTodos] = useState(userTodo);
  const [a, seta] = useState("");
  // const onClicked = (event) =>{
  //     console.log(event);
  // }
  const setItems = (todolist) => {
    localStorage.setItem("list", JSON.stringify(todolist));
  };
  const userTodosList = () => {
    let userTodos = [...todos];
    if (first) {
      userTodos.push({ id: Date.now(), title: first, completed: false });
      console.log(todos);
      setTodos(userTodos);
      setItems(userTodos);
      setfirst("");
    }
  };
  const deleteTodo = (todoId) => {
    let userTodos = [...todos];
    const index = userTodos.findIndex((user) => user.id === todoId);
    userTodos.splice(index, 1);
    setTodos(userTodos);
    setItems(userTodos);
  };
  const markDone = (value, idx) => {
    let userTodos = [...todos];
    userTodos[idx].completed = true;

    setTodos(userTodos);
    setItems(userTodos);
    console.log(userTodos);

    // const index = userTodos.findIndex((user) => user.id === value.id)
    // console.log(index, idx);
    // seta('line-through')
  };
  return (
    <div className="border border white min-h-fit w-100 rounded flex flex-col items-center px-3 py-5 gap-5 bg-white text-black rounded-2xl border border-red-1px">
      <h1 className="text-3xl">Todobox</h1>
      <form className="flex gap-5">
        <input
          onChange={(e) => {
            setfirst(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
          value={first}
          placeholder="write your todos"
          className="px-3 py-1"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            userTodosList(e);
          }}
          className="bg-green-500 px-3 py-1 rounded w-16  active:scale-95"
        >
          add
        </button>
      </form>

      {todos.map((value, idx) => {
        return (
          <div
            key={idx}
            className="min-h-fit w-full flex justify-between p-2 gap-4"
          >
            <p className={value.completed ? "line-through" : ""}>
              {value.title}
            </p>
            <div className="flex gap-2 items-center justify-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  deleteTodo(value.id);
                }}
                className="bg-red-500 rounded px-3 py-1 w-16 active:scale-90"
              >
                Delete
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  markDone(value, idx);
                }}
                className="bg-green-500 rounded px-3 py-1 w-16 active:scale-90"
              >
                Done
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoBox;
