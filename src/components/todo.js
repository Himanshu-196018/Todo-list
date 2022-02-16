import React from "react";

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.deleteHandler = this.deleteHandler.bind(this);
    }
    deleteHandler(){
        this.props.todos = this.props.todos.filter(el => el.id !== this.props.todo.id)
    }

  render() {
      const todo = this.props.todo;
    return (
      <li className={`card`} >
        <div className="date">{todo.date.toLocaleDateString()}</div>
        <button className="done btn">
          <i className="fa fa-check fa-xl"></i>
        </button>
        <button className="delete btn" onClick={this.deleteHandler}>
          <i className="fa fa-xmark fa-xl"></i>
        </button>
        <hr />
        <div className="text" >{todo.text}</div>
      </li>
    );
  }
}

export default Todo;
