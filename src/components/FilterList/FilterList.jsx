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
    priorityValues,
    categoryValues,
  } = props;

  return (<Fragment>
    <Filter
      onFilterChange={onPriorityChange}
      onFilterClear={onPriorityClear}
      filterAddedValues={priority}
      filterValues={priorityValues}
      filterLabel='priority'
    />
    <Filter
      onFilterChange={onCategoryChange}
      onFilterClear={onCategoryClear}
      filterAddedValues={category}
      filterValues={categoryValues}
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