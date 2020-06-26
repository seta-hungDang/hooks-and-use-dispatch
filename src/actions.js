export const ADD_TODO = "add_todo";
export const DELETE_TODO = "delete_todo";

export function addTodo(payload) {
  return {
    type: ADD_TODO,
    payload,
  };
}

export function deleteTodo(payload) {
  return {
    type: DELETE_TODO,
    payload,
  };
}
