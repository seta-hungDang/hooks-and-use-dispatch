import React from "react";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";
import { addTodo } from "../actions";
import { getTodos } from "../reducer";
import { connect } from "react-redux";

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleAddTodo() {
    const payload = {
      id: uuid(),
      content: this.state.text,
    };
    this.props.addTodo(payload);
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <br />
          <div>
            Add a task:
            <button onClick={this.handleAddTodo}>+</button>
          </div>
        </div>

        {this.props.todos.map((todo) => (
          <Todo key={String(todo.id)} id={todo.id} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: getTodos(state),
  };
}

export default connect(mapStateToProps, {
  addTodo,
})(Todos);
