import React, { useState } from "react";
import "./Todo.css";

function TodoApp() {
  const [todos, setTodos] = useState([
    { text: "Learn React", isCompleted: false },
    { text: "Learn CSS", isCompleted: false },
    { text: "Learn HTML", isCompleted: false }
  ]);
  const [input, setInput] = useState("");

  const handleInput = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addTodo(input);
    setInput("");
  };

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const editTodo = (index, text) => {
    const newTodos = [...todos];
    newTodos[index].text = text;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <div className="header">
        <form onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={handleInput} placeholder="Add a todo" />
          <button type="submit">Add Todo</button>
        </form>
      </div>
      <div className="todos">
        {todos.map((todo, index) => (
          <div className="todo" key={index}>
            <div
              className={`todo-text ${todo.isCompleted ? "completed" : ""}`}
            >
              {todo.text}
            </div>
            <div className="buttons">
              <button onClick={() => completeTodo(index)}>Complete</button>
              <button onClick={() => editTodo(index, "Edited Todo")}>
                Edit
              </button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
