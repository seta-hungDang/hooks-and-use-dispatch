import React, { useState } from "react";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";
import { addTodo } from "../actions";
import { getTodos } from "../reducer";
import { useSelector, useDispatch } from "react-redux";

function Todos() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => getTodos(state));
  const dispatch = useDispatch();

  function handleChange(event) {
    setText(event.target.value);
  }
  function handleAddTodo() {
    const payload = {
      id: uuid(),
      content: text,
    };
    dispatch(addTodo(payload));
  }

  return (
    <div>
      <div>
        <input type="text" value={text} onChange={handleChange} />
        <br />
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

export default Todos;
