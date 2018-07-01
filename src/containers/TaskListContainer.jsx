import React, { Component } from 'react';

import { connect } from 'react-redux';

import { removeToDo } from '../actions/toDoLIst';
import TaskList from '../components/TaskList/TaskList';

class TaskListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPriorityFilter: false
    }
  };

  handleShowFilter = () => {
    this.setState({ showPriorityFilter: !this.state.showPriorityFilter })
  };

  render() {
    const { toDoList, onRemove, onPriorityChange, onPriorityClear, priority } = this.props;
    const { showPriorityFilter } = this.state;
    return (
      <TaskList
        toDoList={toDoList}
        onRemove={onRemove}
        showPriorityFilter={showPriorityFilter}
        handleShowFilter={this.handleShowFilter}
        onPriorityChange={onPriorityChange}
        onPriorityClear={onPriorityClear}
        priority={priority}
      />
    )
  }
};

export default connect(
  (state, { search, priority, category, sorted }) =>
    ({
      toDoList: state.filter(({ text }) => text.toLowerCase().indexOf(search.toLowerCase()) !== -1)
        .filter(task => priority.length !== 0 ? priority.includes(task.priority) : true)
        .filter(task => category.length !== 0 ? category.includes(task.category) : true)
        .sort((a, b) => sorted ? (new Date(a.date) - new Date(b.date)) : null)
    }),
  (dispatch) => ({
    onRemove: (id) => () => dispatch(removeToDo(id))
  })
)(TaskListContainer);