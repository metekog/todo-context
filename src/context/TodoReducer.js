export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      localStorage.setItem("todos", JSON.stringify(state.todos));
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    case "DELETE_TODO":
      localStorage.setItem("todos", JSON.stringify(state.todos));
      return {
        ...state,
        todos: state.todos.filter((todos) => todos.id !== action.payload),
      };

    case "COMPLETE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              complete: !todo.complete,
            };
          } else {
            return { ...todo };
          }
        }),
      };

    default:
      return state;
  }
};
