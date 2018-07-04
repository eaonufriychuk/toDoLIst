import './SideBar.css';

import React from 'react';

import Search from '../Search/Search';
import FilterList from '../FilterList/FilterList';

export default (props) => {
  const {
    upDateSearch,
    onPriorityChange,
    onPriorityClear,
    onCategoryChange,
    onCategoryClear,
    category,
    priority,
    onSortDate,
    sorted,
    priorityValues,
    categoryValues,
  } = props;

  return (
    <div className="side-bar">
      <Search upDateSearch={upDateSearch} />
      <FilterList
        onPriorityChange={onPriorityChange}
        priority={priority}
        onPriorityClear={onPriorityClear}
        onCategoryChange={onCategoryChange}
        category={category}
        sorted={sorted}
        onCategoryClear={onCategoryClear}
        onSortDate={onSortDate}
        priorityValues={priorityValues}
        categoryValues={categoryValues}
      />
    </div>
  )
}