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
  } = props;

  return (<Fragment>
    <FilterPriority
      onPriorityChange={onPriorityChange}
      onPriorityClear={onPriorityClear}
      priority={priority}
    />
    <FilterCategory
      onCategoryChange={onCategoryChange}
      onCategoryClear={onCategoryClear}
      category={category}
    />
    <button onClick={onSortDate} className="btn btn-outline-primary btn-sm sort-filter">
      {!sorted ? 'Sort by date' : 'Reset Sorting'}
    </button>
  </Fragment>)
}