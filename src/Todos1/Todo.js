import React from "react";
import { deleteTodo } from "../actions";
import { getTodo } from "../reducer";
import { connect, useDispatch } from "react-redux";

function Todo({ todo, id }) {
  const { content } = todo;
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteTodo(String(id)));
  }

  console.log("render 1");

  return (
    <div style={{ width: 100, border: "2px solid black", margin: "20px auto" }}>
      <h3>{content}</h3>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    todo: getTodo(state, ownProps.id),
  };
}

export default connect(mapStateToProps)(Todo);
