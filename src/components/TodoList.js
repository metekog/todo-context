import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoList = () => {
  const { todos, deleteTodo, completeTodo } = useContext(TodoContext);

  return (
    <>
      {todos?.map((todo) => (
        <div>
          <div
            style={{
              textDecoration: todo.complete ? "line-through" : "",
              background: todo.complete ? "#23d41d" : "#e74242",
            }}
            className="list"
            key={todo.id}
          >
            <li>{todo.text}</li>
          </div>
          <div >
            <button className="btn" onClick={() => completeTodo(todo.id)}>
              Complete
            </button>
            <button className="btn" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
