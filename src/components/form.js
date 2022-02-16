import React from "react";
import Search from "./Search";
import TodoItems from "./TodoItems";

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputText: "",
            todos: [],
            filter: "all"
        }
        this.valueHandler = this.valueHandler.bind(this);
        this.addListHandler = this.addListHandler.bind(this);
    }

    valueHandler(e){
        this.setState({inputText : e.target.value});
    }

    addListHandler(e){
        e.preventDefault();
        const todos = this.state.todos;
        this.setState({todos: [...todos, {text: this.state.inputText, completed: false, id: Math.random() * 1000, date: new Date} ]});
        this.setState({inputText: ""});
    }

    filterHandler(e){
        this.setState({filter: this.target.value})
    }

  render() {
    return (
      <div>
        <Search
        inputText={this.state.inputText}
        valueHandler = {this.valueHandler}
        addListHandler = {this.addListHandler}
        filterHandler = {this.filterHandler} 
        />
        <TodoItems 
        todos = {this.state.todos}
        />
      </div>
    );
  }
}

export default Form;