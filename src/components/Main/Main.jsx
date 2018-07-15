import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../constants';
import TaskBar from '../TaskBar/TaskBar';
import TaskListContainer from '../../containers/TaskListContainer';
import SideBar from '../SideBar/SideBar';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorted: false,
      search: '',
      filters: {
        priority: [],
        category: [],
      },
    };
  }

  onFilterClear = filterLabel => () => {
    this.setState(({ filters }) => ({ filters: { ...filters, [filterLabel]: [] } }));
  };


  onFilterChange = (priorityValue, filterLabel) => () => {
    this.setState(({ filters }) => ({
      filters: {
        ...filters,
        [filterLabel]: filters[filterLabel].includes(priorityValue)
          ? filters[filterLabel].filter(value => value !== priorityValue)
          : [...filters[filterLabel], priorityValue],
      },
    }));
  };

  onSortDate = () => {
    this.setState(prevState => ({ sorted: !prevState.sorted }));
  };

  upDateSearch = (event) => {
    this.setState(({ search: event.target.value.trim() }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { postTodo, getPriorityValues, getCategoryValues } = this.props;

    if (event.target.task.value && event.target.priority.value
      && event.target.category.value) {
      const newItem = {
        text: event.target.task.value.trim(),
        priority: event.target.priority.value,
        category: event.target.category.value,
        date: formatDate(new Date()),
      };

      postTodo(newItem)
        .then(() => getPriorityValues())
        .then(() => getCategoryValues());
    }
  };

  render() {
    const {
      filters,
      sorted,
      search,
    } = this.state;

    const {
      priority,
      category,
    } = filters;

    const {
      priorityValues,
      categoryValues,
    } = this.props;

    return (
      <Fragment>
        <TaskBar
          handleSubmit={this.handleSubmit}
        />
        <div className="row row-centered">
          <div className="col-sm-3">
            <SideBar
              upDateSearch={this.upDateSearch}
              onFilterChange={this.onFilterChange}
              onFilterClear={this.onFilterClear}
              category={category}
              priority={priority}
              onSortDate={this.onSortDate}
              sorted={sorted}
              priorityValues={priorityValues}
              categoryValues={categoryValues}
            />
          </div>
          <div className="col-sm-9">
            <TaskListContainer
              search={search}
              priority={priority}
              category={category}
              sorted={sorted}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

Main.propTypes = {
  postTodo: PropTypes.func.isRequired,
  getPriorityValues: PropTypes.func.isRequired,
  getCategoryValues: PropTypes.func.isRequired,
  priorityValues: PropTypes.instanceOf(Array).isRequired,
  categoryValues: PropTypes.instanceOf(Array).isRequired,
};

export default Main;
