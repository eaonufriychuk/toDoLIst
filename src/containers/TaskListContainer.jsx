import React, { Component } from 'react';

import { connect } from 'react-redux';

import { deleteTodo } from '../actions/todo';
import { getPriority } from '../actions/priority';
import { getCategory } from '../actions/category';

import TaskList from '../components/TaskList/TaskList';

class TaskListContainer extends Component {

  handeleRemove = (id) => () => {
    const { deleteTodo, getPriorityValues, getCategoryValues } = this.props;

    deleteTodo(id)
      .then(() => getPriorityValues())
      .then(() => getCategoryValues());
  }

  render() {
    const { todoList, search } = this.props;

    return (
      <TaskList
        todoList={todoList}
        onRemove={this.handeleRemove}
        search={search}
      />
    )
  }
};

export default connect(
  (state, { search, priority, category, sorted }) =>
    ({
      todoList: state.todo.todoList.filter(({ text }) => text.toLowerCase().indexOf(search.toLowerCase()) !== -1)
        .filter(task => priority.length !== 0 ? priority.includes(task.priority) : true)
        .filter(task => category.length !== 0 ? category.includes(task.category) : true)
        .sort((a, b) => sorted ? (new Date(a.date) - new Date(b.date)) : null)
    }),
  (dispatch, props) => {
    return {
      ...props,
      deleteTodo: (id) => dispatch(deleteTodo(id)),
      getPriorityValues: () => dispatch(getPriority()),
      getCategoryValues: () => dispatch(getCategory()),
    }
  }
)(TaskListContainer);