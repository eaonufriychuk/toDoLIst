import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTodo } from '../modules/todoList/actions/todo';
import { getPriority } from '../modules/filters/actions/priority';
import { getCategory } from '../modules/filters/actions/category';
import TaskList from '../components/TaskList/TaskList';

class TaskListContainer extends Component {
  handeleRemove = id => () => {
    const { deleteTask, getPriorityValues, getCategoryValues } = this.props;

    deleteTask(id)
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
    );
  }
}

TaskListContainer.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  getPriorityValues: PropTypes.func.isRequired,
  getCategoryValues: PropTypes.func.isRequired,
  todoList: PropTypes.instanceOf(Array).isRequired,
  search: PropTypes.string.isRequired,
};

export default connect(
  (state, {
    search,
    priority,
    category,
    sorted,
  }) => ({
    todoList: state.todo.todoList
      .filter(({ text }) => text.toLowerCase().indexOf(search.toLowerCase()) !== -1)
      .filter(task => (priority.length !== 0 ? priority.includes(task.priority) : true))
      .filter(task => (category.length !== 0 ? category.includes(task.category) : true))
      .sort((a, b) => (sorted ? (new Date(a.date) - new Date(b.date)) : null)),
  }),
  (dispatch, props) => (
    {
      ...props,
      deleteTask: id => dispatch(deleteTodo(id)),
      getPriorityValues: () => dispatch(getPriority()),
      getCategoryValues: () => dispatch(getCategory()),
    }
  ),
)(TaskListContainer);
