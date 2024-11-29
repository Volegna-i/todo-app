import { Component } from "react";

import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";

export default class App extends Component {
  maxId = 1;

  state = {
    todoData: [],
    filter: 'All',
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

  createTodoItem(label) {
    return {
      label,
      completed: false,
      id: this.maxId++,
      createdAt: new Date(),
    };
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

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
        todoData: updatedTasks,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((elem) => elem.id === id);
      const oldItem = todoData[idx];

      const newItem = {
        ...oldItem,
        completed: !oldItem.completed,
      };

      const newArr = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: newArr,
      };
    });
  };

  filterTasks = () => {
    const { todoData, filter } = this.state;

    switch (filter) {
      case 'Active':
        return todoData.filter((task) => !task.completed);
      case 'Completed':
        return todoData.filter((task) => task.completed);
      default:
        return todoData;
    }
  };

  filterChange = (filter) => {
    this.setState({ filter });
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const activeTasks = todoData.filter((task) => !task.completed);

      return {
        todoData: activeTasks,
      };
    });
  };

  render() {
    const { todoData } = this.state;
    const activeTodoCount = todoData.filter((el) => !el.completed).length;
    const filteredTasks = this.filterTasks();

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onItemAdded={this.addItem} />
        </header>
        <TaskList
          todos={filteredTasks}
          updateLabel={this.updateLabel}
          deleteItem={this.deleteItem}
          onToggleDone={this.onToggleDone}
        />
        <Footer
          toDo={activeTodoCount}
          filter={this.state.filter}
          filterChange={this.filterChange}
          clearCompleted={this.clearCompleted}
        />
      </section>
    );
  }
}
