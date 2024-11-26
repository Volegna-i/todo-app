import Task from "./Task";
import PropTypes from "prop-types";

const TaskList = ({ todos }) => {

  const elements = todos.map(( item ) => {
    return (
      <Task
        key={item.id}
        { ...item }
      />
    );
  });

  return (
    <section className="main">
      <ul className="todo-list">
        {elements}
      </ul>
    </section>
  );
};

TaskList.propTypes = {
  todos: PropTypes.array,
};

export default TaskList;
