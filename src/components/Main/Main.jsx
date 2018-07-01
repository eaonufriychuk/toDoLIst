import React, { Component, Fragment } from 'react';

import { v1 } from 'uuid';
import { formatDate } from '../../constants';

import TaskBar from '../TaskBar/TaskBar';
import TaskListContainer from '../../containers/TaskListContainer';
import SideBar from '../SideBar/SideBar';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorted: false,
      search: '',
      filters: {
        priority: [],
        category: [],
      }
    };
  }

  handleSubmit = (event) => {
    if (event.target.task.value && event.target.priority.value &&
      event.target.category.value) {
      const newItem = {
        id: v1(),
        text: event.target.task.value.trim(),
        priority: event.target.priority.value,
        category: event.target.category.value,
        date: formatDate(new Date()),
      };

      this.props.handleAddToDO(newItem);
      event.preventDefault();
    };
  };

  upDateSearch = (event) => {
    this.setState(({ search: event.target.value }));
  };

  onPriorityClear = () => {
    this.setState(({ filters }) => ({ filters: { ...filters, priority: [] } }));
  };

  onPriorityChange = (priorityValue) => () => {
    this.setState(({ filters }) => ({
      filters: {
        ...filters,
        priority: filters.priority.includes(priorityValue)
          ? filters.priority.filter(value => value !== priorityValue)
          : [...filters.priority, priorityValue]
      }
    }));
  };

  onCategoryClear = () => {
    this.setState(({ filters }) => ({ filters: { ...filters, category: [] } }));
  };

  onCategoryChange = (categoryValue) => () => {
    this.setState(({ filters }) => ({
      filters: {
        ...filters,
        category: filters.category.includes(categoryValue)
          ? filters.category.filter(value => value !== categoryValue)
          : [...filters.category, categoryValue]
      }
    }));
  };

  onSortDate = () => {
    this.setState({ sorted: !this.state.sorted })
  };

  render() {
    const { priority, category } = this.state.filters;
    const { sorted, search } = this.state;

    return (
      <Fragment>
        <TaskBar
          handleSubmit={this.handleSubmit}
          onPriorityChange={this.onPriorityChange}
          onPriorityClear={this.onPriorityClear}
          onCategoryChange={this.onCategoryChange}
          onCategoryClear={this.onCategoryClear}
          priority={priority}
          category={category}
          sorted={sorted}
          onSortDate={this.onSortDate}
          upDateSearch={this.upDateSearch}
        />
        <div className="row row-centered">
          <div className="col-sm-3">
            <SideBar
              upDateSearch={this.upDateSearch}
              onPriorityChange={this.onPriorityChange}
              onPriorityClear={this.onPriorityClear}
              onCategoryChange={this.onCategoryChange}
              onCategoryClear={this.onCategoryClear}
              category={category}
              priority={priority}
              onSortDate={this.onSortDate}
              sorted={sorted}
            />
          </div>
          <div className="col-sm-9">
            <TaskListContainer
              onPriorityChange={this.onPriorityChange}
              onPriorityClear={this.onPriorityClear}
              search={search}
              priority={priority}
              category={category}
              sorted={sorted}
            />
          </div>
        </div>
      </Fragment >
    );
  };
}