import Task from "./Task";
import PropTypes from "prop-types";

const TaskList = ({ todos, updateLabel, deleteItem }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <Task
        key={id}
        {...itemProps}
        updateLabel={(newLabel) => updateLabel(id, newLabel)}
        deleteItem={() => deleteItem(id)}
      />
    );
  });

  return (
    <section className="main">
      <ul className="todo-list">{elements}</ul>
    </section>
  );
};

TaskList.propTypes = {
  todos: PropTypes.array,
  updateLabel: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default TaskList;
