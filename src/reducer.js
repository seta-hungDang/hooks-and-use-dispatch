import { ADD_TODO, DELETE_TODO } from "./actions";

const initialState = {
  todos: [
    { id: "1", content: "Get up" },
    { id: "2", content: "Run" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        todos: [...state.todos, action.payload],
      };
    }

    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

export function getTodos(state) {
  return state.todos;
}

export function getTodo(state, id) {
  return state.todos.find((todo) => todo.id === id);
}

export default reducer;
