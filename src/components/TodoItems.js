import React from "react";
import Todo from "./todo";

class TodoItems extends React.Component {
  render() {
      const todos = this.props.todos;
    return (
      <div>
        <ul className="container">
          {todos.map(todo =>(
              <Todo todo = {todo} key={todo.id} todos={todos} 
              completionHandler = {this.props.completionHandler}
              deleteHandler = {this.props.deleteHandler} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoItems;
