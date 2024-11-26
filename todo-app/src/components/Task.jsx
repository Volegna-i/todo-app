import PropTypes from "prop-types";
import classNames from "classnames";

const Task = ({ label, editing, completed }) => {
  return (
    <li
      className={classNames({
        completed,
        editing,
      })}
    >
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{label}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  );
};

Task.propTypes = {
  label: PropTypes.string,
  editing: PropTypes.bool,
  completed: PropTypes.bool,
};

export default Task;
