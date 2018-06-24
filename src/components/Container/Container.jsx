import React, { Component, Fragment } from 'react';
import TaskList from '../TaskList/TaskList';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';

import './Container.css';

export default class Container extends Component {
  state = {
    sorted: false,
    filters: {
      priority: [],
      category: []
    },
    search: ''
  };

  upDateSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  onPriorityClear = () => {
    this.setState(({ filters }) => ({ filters: { ...filters, priority: [] } }));
  };

  onPriorityChange = (prior) => () => {
    this.setState(({ filters }) => ({
      filters: {
        ...filters,
        priority: filters.priority.includes(prior)
          ? filters.priority.filter(x => x !== prior)
          : [...filters.priority, prior]
      }

    }));
  };

  onCategoryClear = () => {
    this.setState(({ filters }) => ({ filters: { ...filters, category: [] } }));
  };

  onCategoryChange = (type) => () => {
    this.setState(({ filters }) => ({
      filters: {
        ...filters,
        category: filters.category.includes(type)
          ? filters.category.filter(x => x !== type)
          : [...filters.category, type]
      }
    }));
  };

  onSortDate = () => {
    this.setState({ sorted: !this.state.sorted })
  };

  render() {
    const { sorted, filters, search } = this.state;

    return (
      <Fragment>
        <div className="assortment row">
          <div className="col-4">
            <Search upDateSearch={this.upDateSearch} />
            <button onClick={this.onSortDate} className="btn btn-primary sort-date">
                {!sorted ? 'Сортировать по дате' : 'Сбросить сортировку'}
                </button>
          </div>
          <Filter
            onPriorityChange={this.onPriorityChange}
            priority={filters.priority}
            onPriorityClear={this.onPriorityClear}
            onCategoryChange={this.onCategoryChange}
            category={filters.category}
            onCategoryClear={this.onCategoryClear}
          />
        </div>
        <TaskList
          search={search}
          priority={filters.priority}
          category={filters.category}
          sorted={sorted}
        />
      </Fragment>
    )
  }
}