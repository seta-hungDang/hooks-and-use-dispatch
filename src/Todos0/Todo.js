import React from "react";
import { deleteTodo } from "../actions";
import { getTodo } from "../reducer";
import { connect } from "react-redux";

const Todo = ({ todo, deleteTodo, id }) => {
  const { content } = todo;

  function handleDelete() {
    deleteTodo(String(id));
  }

  console.log("render 0");

  return (
    <div style={{ width: 100, border: "2px solid black", margin: "20px auto" }}>
      <h3>{content}</h3>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    todo: getTodo(state, ownProps.id),
  };
}

export default connect(mapStateToProps, {
  deleteTodo,
})(Todo);
