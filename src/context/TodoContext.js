import { createContext, useEffect, useReducer } from "react";
import TodoReducer from "./TodoReducer";

const initialState = {
  todos: [],
};

export const TodoContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState, () => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  const addTodo = (text) => {
    dispatch({
      type: "ADD_TODO",
      payload: text,
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  const completeTodo = (id) => {
    dispatch({
      type: "COMPLETE_TODO",
      payload: id,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        deleteTodo,
        completeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
