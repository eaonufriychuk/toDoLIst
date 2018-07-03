import React, { Component } from 'react';

import { connect } from 'react-redux';

import { removeTodoFromServer } from '../actions/toDoLIst';
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
  handeleRemove = (id) => () => {
    const { onRemoveFromServer, loadPriorityFilter, loadCategoryFilter } = this.props;
    onRemoveFromServer(id).then(() => loadPriorityFilter()).then(() => loadCategoryFilter())
  }
  render() {
    const { toDoList, onPriorityChange, onPriorityClear, priority, search } = this.props;
    const { showPriorityFilter } = this.state;
    return (
      <TaskList
        toDoList={toDoList}
        onRemove={this.handeleRemove}
        search={search}
      />
    )
  }
};

export default connect(
  (state, { search, priority, category, sorted }) =>
    ({
      toDoList: state.todo.todoList.filter(({ text }) => text.toLowerCase().indexOf(search.toLowerCase()) !== -1)
        .filter(task => priority.length !== 0 ? priority.includes(task.priority) : true)
        .filter(task => category.length !== 0 ? category.includes(task.category) : true)
        .sort((a, b) => sorted ? (new Date(a.date) - new Date(b.date)) : null)
    }),
  (dispatch) => ({
    onRemoveFromServer: (id) => removeTodoFromServer(dispatch, id)
  })
)(TaskListContainer);