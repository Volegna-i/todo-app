import { Component } from "react";

import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [],
  };

  updateLabel = (id, newLabel) => {
    this.setState(({ todoData }) => {
      const updatedTasks = todoData.map((task) =>
        task.id === id ? { ...task, label: newLabel } : task
      );

      return {
        todoData: updatedTasks,
      };
    });
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      id: this.maxId++,
    };

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const updatedTasks = todoData.filter((task) => task.id !== id);

      return { 
        todoData: updatedTasks 
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
        <TaskList 
          todos={this.state.todoData} 
          updateLabel={this.updateLabel}
          deleteItem={this.deleteItem} 
        />
        <Footer />
      </section>
    );
  }
}
