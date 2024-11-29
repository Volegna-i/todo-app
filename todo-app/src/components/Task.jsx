import { Component } from "react";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

export default class Task extends Component {
  state = {
    editing: false,
    editText: this.props.label,
  };

  onEditingClick = () => {
    this.setState((prevState) => ({
      editing: !prevState.editing,
    }));
  };

  onEditChange = (event) => {
    this.setState({ editText: event.target.value });
  };

  onEditKeyDown = (event) => {
    if (event.key === "Enter") {
      this.saveChanges();
    } else if (event.key === "Escape") {
      this.cancelEditing();
    }
  };

  saveChanges = () => {
    const { editText } = this.state;

    if (editText.trim()) {
      this.props.updateLabel(editText);
    }

    this.setState({ editing: false });
  };

  cancelEditing = () => {
    this.setState({
      editing: false,
      editText: this.props.label,
    });
  };

  onDeleteClick = () => {
    this.props.deleteItem();
  };

  onBlur = () => {
    this.saveChanges();
  };

  render() {
    const { label, createdAt, onToggleDone, completed } = this.props;
    const { editing } = this.state;

    const classNames = `
    ${completed ? "completed" : ""} 
    ${editing ? "editing" : ""}
    `.trim();

    return (
      <li className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={onToggleDone}
          />
          <label>
            <span className="description">{label}</span>
            <span className="created">
              created{' '}
              {formatDistanceToNow(new Date(createdAt), {
                addSuffix: true,
                includeSeconds: true,
              })}
            </span>
          </label>
          <button
            className="icon icon-edit"
            onClick={this.onEditingClick}
          ></button>
          <button
            className="icon icon-destroy"
            onClick={this.onDeleteClick}
          ></button>
        </div>
        {editing && (
          <input
            type="text"
            className="edit"
            defaultValue={label}
            autoFocus
            onChange={this.onEditChange}
            onKeyDown={this.onEditKeyDown}
            onBlur={this.onBlur}
          />
        )}
      </li>
    );
  }
}

Task.propTypes = {
  label: PropTypes.string,
  editing: PropTypes.bool,
  completed: PropTypes.bool,
  updateLabel: PropTypes.func,
  deleteItem: PropTypes.func,
  createdAt: PropTypes.instanceOf(Date).isRequired,
};
