import React, { useState } from "react";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";
import { addTodo } from "../actions";
import { getTodos } from "../reducer";
import { connect } from "react-redux";

function Todos({ todos, addTodo }) {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }
  function handleAddTodo() {
    const payload = {
      id: uuid(),
      content: text,
    };
    addTodo(payload);
  }
  
  return (
    <div>
      <div>
        <input type="text" value={text} onChange={handleChange} />
        <div>
          Add a task:
          <button onClick={handleAddTodo}>+</button>
        </div>
      </div>

      {todos.map((todo) => (
        <Todo key={String(todo.id)} id={todo.id} />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: getTodos(state),
  };
}

export default connect(mapStateToProps, {
  addTodo,
})(Todos);
