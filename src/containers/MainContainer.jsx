import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Main from '../components/Main/Main';
import { getTodo, postTodo } from '../modules/todoList/actions/todo';
import { getPriority } from '../modules/filters/actions/priority';
import { getCategory } from '../modules/filters/actions/category';

class MainContainer extends Component {
  componentDidMount() {
    const { getTasks, getPriorityValues, getCategoryValues } = this.props;

    getTasks()
      .then(() => getPriorityValues())
      .then(() => getCategoryValues());
  }

  render() {
    const {
      postTask,
      getPriorityValues,
      getCategoryValues,
      priorityValues,
      categoryValues,
    } = this.props;

    return (
      <Main
        postTodo={postTask}
        getPriorityValues={getPriorityValues}
        getCategoryValues={getCategoryValues}
        priorityValues={priorityValues}
        categoryValues={categoryValues}
      />
    );
  }
}

MainContainer.propTypes = {
  getTasks: PropTypes.func.isRequired,
  getPriorityValues: PropTypes.func.isRequired,
  getCategoryValues: PropTypes.func.isRequired,
  postTask: PropTypes.func.isRequired,
  priorityValues: PropTypes.instanceOf(Array).isRequired,
  categoryValues: PropTypes.instanceOf(Array).isRequired,
};

export default connect(
  (state, props) => ({
    ...props,
    priorityValues: state.priority.priorityValues,
    categoryValues: state.category.categoryValues,
  }),
  (dispatch, props) => ({
    ...props,
    getPriorityValues: () => dispatch(getPriority()),
    getCategoryValues: () => dispatch(getCategory()),
    getTasks: () => dispatch(getTodo()),
    postTask: todo => dispatch(postTodo(todo)),
  }),
)(MainContainer);
