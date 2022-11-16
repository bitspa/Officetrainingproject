import React, { Component } from "react";
import TodoList1 from "./components/ToDoList/TodoRows";

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <TodoList1 />
      </div>
    );
  }
}

export default App;
