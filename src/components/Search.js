import React from "react";

class Search extends React.Component {

  render() {
    return (
      <div className="input-area">
        <input 
        type="text"  
        value = {this.props.inputText}
        onChange = {this.props.valueHandler}
        />
        <button className="add-todo"
            onClick={this.props.addListHandler}
            type="submit">
          <i className="fa-solid fa-plus fa-xl"></i>
        </button>
        <select name="filter" className="filter" onChange={this.props.filterHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="all">Uncomleted</option>
        </select>
      </div>
    );
  }
}

export default Search;