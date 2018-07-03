import './FilterList.css';

import React, { Fragment } from 'react';

import FilterPriority from '../FilterPriority/FilterPriority';
import FilterCategory from '../FilterCategory/FilterCategory';

export default (props) => {
  const {
    onPriorityChange,
    priority,
    onPriorityClear,
    onCategoryChange,
    category,
    sorted,
    onCategoryClear,
    onSortDate,
    priority_filter,
    category_filter
  } = props;

  return (<Fragment>
    <FilterPriority
      onPriorityChange={onPriorityChange}
      onPriorityClear={onPriorityClear}
      priority={priority}
      priority_filter={priority_filter}
    />
    <FilterCategory
      onCategoryChange={onCategoryChange}
      onCategoryClear={onCategoryClear}
      category={category}
      category_filter={category_filter}
    />
    <button onClick={onSortDate} className="btn btn-outline-primary sort-filter">
      {!sorted ? 'Sort by date' : 'Reset Sorting'}
    </button>
  </Fragment>)
}