import React from "react";
import Search from "./Search";
import TodoItems from "./TodoItems";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      todos: [],
      filter: "all",
    };
    this.valueHandler = this.valueHandler.bind(this);
    this.addListHandler = this.addListHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.completionHandler = this.completionHandler(this);
  }

  valueHandler(e) {
    this.setState({ inputText: e.target.value });
  }

  addListHandler(e) {
    e.preventDefault();
    const todos = this.state.todos;
    this.setState({
      todos: [
        ...todos,
        {
          text: this.state.inputText,
          completed: false,
          id: Math.random() * 1000,
        },
      ],
    });
    this.setState({ inputText: "" });
  }

  filterHandler(e) {
    this.setState({ filter: this.target.value });
  }

  deleteHandler() {
    this.props.todos = this.props.todos.filter(
      (el) => el.id !== this.props.todo.id
    );
  }

  completionHandler() {
    console.log("hello");
  }

  render() {
    return (
      <div>
        <Search
          inputText={this.state.inputText}
          valueHandler={this.valueHandler}
          addListHandler={this.addListHandler}
          filterHandler={this.filterHandler}
        />
        <TodoItems
          todos={this.state.todos}
          deleteHandler={this.deleteHandler}
          completionHandler = {this.completionHandler}
        />
      </div>
    );
  }
}

export default Form;
