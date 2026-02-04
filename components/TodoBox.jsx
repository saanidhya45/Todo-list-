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
  <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6 space-y-6">

    {/* Header */}
    <h1 className="text-3xl font-bold text-center text-gray-800">
      📝 Todo Box
    </h1>

    {/* Input Section */}
    <form className="flex gap-3">
      <input
        type="text"
        value={first}
        onChange={(e) => setfirst(e.target.value)}
        placeholder="Write your todo..."
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          userTodosList();
        }}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition"
      >
        Add
      </button>
    </form>

    {/* Todo List */}
    <div className="space-y-3 max-h-72 overflow-y-auto">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">
          No todos yet ✨
        </p>
      ) : (
        todos.map((value, idx) => (
          <div
            key={value.id}
            className="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-3"
          >
            <p
              className={`flex-1 ${
                value.completed
                  ? "line-through text-gray-400"
                  : "text-gray-800"
              }`}
            >
              {value.title}
            </p>

            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  markDone(value, idx);
                }}
                className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600 active:scale-95 transition"
              >
                Done
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  deleteTodo(value.id);
                }}
                className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 active:scale-95 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
);

};

export default TodoBox;
