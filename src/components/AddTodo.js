import React, { useState, useContext, useEffect, useRef } from "react";
import { TodoContext } from "../context/TodoContext";

export const AddTodo = () => {
  const [text, setText] = useState("");

  const { addTodo, todos } = useContext(TodoContext);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      const newTodo = {
        id: Date.now(),
        text,
        complete: false,
      };
      addTodo(newTodo);
    }
    setText("");
  };

  return (
    <>
      <h3>Todo List</h3>
      <div>
        {todos.length === 0 ? (
          <h2 style={{ color: "#23d41d", fontSize: "16px" }}>
            All todos are done! Take a rest!
          </h2>
        ) : (
          <h2 style={{ color: "#e74242", fontSize: "16px" }}>
            {todos.length > 1
              ? `There are ${todos.length} todos.`
              : `There is ${todos.length} todo.`}
          </h2>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            ref={inputRef}
            placeholder="What is your plan?"
          />
          <button style={{ marginLeft: "10px", width: "100%" }} className="btn">
            Add
          </button>
        </div>
      </form>
    </>
  );
};
