import { Component } from "react";

import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [],
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      editing: false,
      completed: false,
      id: this.maxId++,
    };

    console.log(newItem);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onItemAdded={this.addItem} />
        </header>
        <TaskList todos={this.state.todoData} />
        <Footer />
      </section>
    );
  }
}
