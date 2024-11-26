import { Component } from "react";
import PropTypes from "prop-types";

export default class NewTaskForm extends Component {

  state = {
    task: ''
  };

  handleChange = (event) => {
    this.setState({ 
      task: event.target.value 
    });
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const { task } = this.state;

      if (task.trim()) {
        this.props.onItemAdded(task);
        this.setState({ task: '' });
      }
    }
  };
  
  render() {
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={this.state.task}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  };
};

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func,
};
