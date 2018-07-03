import React, { Component } from 'react';

import { connect } from 'react-redux';

import Main from '../components/Main/Main';

import { loadTodo, addTodoOnServer } from "../actions/toDoLIst";

import { loadPriorityFilter } from "../actions/priority";
import { loadCategoryFilter } from "../actions/category";

class MainContainer extends Component {

  componentDidMount() {
    const { load, loadPriorityFilter, loadCategoryFilter } = this.props;
    load();
    loadCategoryFilter();
    loadPriorityFilter();
  };

  render() {
    const { loadOnServer, loadPriorityFilter, loadCategoryFilter, priority, category } = this.props;
    return (
      <Main
        loadOnServer={loadOnServer}
        loadPriorityFilter={loadPriorityFilter}
        loadCategoryFilter={loadCategoryFilter}
        priority_filter={priority}
        category_filter={category}
      />
    );
  }
}

export default connect(
  (state, props) => {
    return {
      ...props,
      priority: state.priority.priority_filter,
      category: state.category.category_filter
    }
  },
  (dispatch, props) => {
    return {
      ...props,
      loadPriorityFilter: () => loadPriorityFilter(dispatch),
      loadCategoryFilter: () => loadCategoryFilter(dispatch),
      load: () => loadTodo(dispatch),
      loadOnServer: (todo) => addTodoOnServer(dispatch, todo)
    }
  }
)(MainContainer);