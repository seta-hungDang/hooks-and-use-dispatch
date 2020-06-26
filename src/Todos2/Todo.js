import React from "react";
import { deleteTodo } from "../actions";
import { getTodo } from "../reducer";
import { useDispatch, useSelector } from "react-redux";

function Todo({ id }) {
  const todo = useSelector((state) => getTodo(state, id));
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteTodo(String(id)));
  }

  console.log("render useSelector");

  return (
    <div
      style={{
        width: 200,
        border: "2px solid black",
        margin: "20px auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3 style={{ marginLeft: 10 }}>{todo.content}</h3>

      <button style={{ height: 30, marginRight: 10 }} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Todo;
