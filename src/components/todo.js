import React from "react";

class Todo extends React.Component {
  render() {
    const completed = this.props.todo.completed;
    const date = new Date();
    return (
      <li className={`card ${completed === true ? " complete" : " "}`}>
        <div className="date">{date.toLocaleDateString()}</div>
        <button className="done btn" onClick={() => this.props.completionHandler(this.props.todo.id)}>
          <i className="fa fa-check fa-xl"></i>
        </button>
        <button className="delete btn" onClick={() => this.props.deleteHandler(this.props.todo.id)}>
          <i className="fa fa-xmark fa-xl"></i>
        </button>
        <hr />
        <div className="text">{this.props.todo.text}</div>
      </li>
    );
  }
}

export default Todo;
