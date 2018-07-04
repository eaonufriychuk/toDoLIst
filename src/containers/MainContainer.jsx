import React, { Component } from 'react';

import { connect } from 'react-redux';

import Main from '../components/Main/Main';

import { getTodo, postTodo } from "../actions/todo";

import { getPriority } from "../actions/priority";
import { getCategory } from "../actions/category";

class MainContainer extends Component {

  componentDidMount() {
    const { getTodo, getPriorityValues, getCategoryValues } = this.props;

    getTodo();
    getPriorityValues();
    getCategoryValues();
  };

  render() {
    const {
      postTodo,
      getPriorityValues,
      getCategoryValues,
      priorityValues,
      categoryValues,
    } = this.props;

    return (
      <Main
        postTodo={postTodo}
        getPriorityValues={getPriorityValues}
        getCategoryValues={getCategoryValues}
        priorityValues={priorityValues}
        categoryValues={categoryValues}
      />
    );
  }
}

export default connect(
  (state, props) => {
    return {
      ...props,
      priorityValues: state.priority.priorityValues,
      categoryValues: state.category.categoryValues,
    }
  },
  (dispatch, props) => {
    return {
      ...props,
      getPriorityValues: () => getPriority(dispatch),
      getCategoryValues: () => getCategory(dispatch),
      getTodo: () => getTodo(dispatch),
      postTodo: (todo) => postTodo(dispatch, todo)
    }
  }
)(MainContainer);