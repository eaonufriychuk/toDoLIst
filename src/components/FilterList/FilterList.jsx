import './FilterList.css';

import React, { Fragment } from 'react';

import Filter from '../Filter/Filter';
import Button from '../Button/Button';

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
    <Filter
      onFilterChange={onPriorityChange}
      onFilterClear={onPriorityClear}
      filterValues={priority}
      filter={priority_filter}
      filterLabel='priority'
    />
    <Filter
      onFilterChange={onCategoryChange}
      onFilterClear={onCategoryClear}
      filterValues={category}
      filter={category_filter}
      filterLabel='category'
    />
    <Button
      handleClick={onSortDate}
      parametr={sorted}
      className='btn btn-outline-primary sort-filter'
      textContent1='Reset Sorting'
      textContent2='Sort by date'
    />
  </Fragment>)
}