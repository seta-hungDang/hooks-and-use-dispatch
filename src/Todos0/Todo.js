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
    <h3 style={{ marginLeft: 10 }}>{content}</h3>

    <button style={{ height: 30, marginRight: 10 }} onClick={handleDelete}>
      Delete
    </button>
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
