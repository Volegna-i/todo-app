import TasksFilter from "./TasksFilter";

const Footer = ({ toDo, filter, filterChange, clearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{toDo} items left</span>
      <TasksFilter filter={filter} filterChange={filterChange} />
      <button
        className="clear-completed"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
