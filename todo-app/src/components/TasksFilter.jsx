import { Component } from "react";

export default class TasksFilter extends Component {
  render() {
    const { filter, filterChange } = this.props;

    return (
      <ul className="filters">
        <li>
          <button
            className={filter === 'All' ? 'selected' : ''}
            onClick={() => filterChange('All')}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={filter === 'Active' ? 'selected' : ''}
            onClick={() => filterChange('Active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={filter === 'Completed' ? 'selected' : ''}
            onClick={() => filterChange('Completed')}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
