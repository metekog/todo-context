import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoList = () => {
  const { todos, deleteTodo, completeTodo } = useContext(TodoContext);
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div
            onClick={() => completeTodo(todo.id)}
            style={{
              textDecoration: todo.complete ? "line-through" : "",
              background: todo.complete ? "#23d41d" : "#e74242",
              cursor: "pointer",
            }}
            className="list"
          >
            <li>{todo.text}</li>
          </div>
          <div className="btns">
            <button className="btn comp" onClick={() => completeTodo(todo.id)}>
              {todo.complete ? "Not Complete" : "Complete"}
            </button>
            <button className="btn del" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
