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
    this.completionHandler = this.completionHandler.bind(this);
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

  deleteHandler(id) {
    const newTodos = this.state.todos.filter(
      (el) => el.id !== id
    );
    this.setState({todos: newTodos});
  }

  completionHandler(id) {
    const newTodos = this.state.todos.map(
      (el) => {
        if(el.id === id){
          el.completed = !el.completed;
        }
        return el;
      }
    );
    this.setState({todos: newTodos});
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
