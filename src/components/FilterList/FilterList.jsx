import './FilterList.css';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Filter from '../Filter/Filter';
import Button from '../Button/Button';

function FilterList(props) {
  const {
    onFilterChange,
    onFilterClear,
    priority,
    category,
    sorted,
    onSortDate,
    priorityValues,
    categoryValues,
  } = props;

  return (
    <Fragment>
      <Filter
        onFilterChange={onFilterChange}
        onFilterClear={onFilterClear}
        filterAddedValues={priority}
        filterValues={priorityValues}
        filterLabel="priority"
      />
      <Filter
        onFilterChange={onFilterChange}
        onFilterClear={onFilterClear}
        filterAddedValues={category}
        filterValues={categoryValues}
        filterLabel="category"
      />
      <Button
        handleClick={onSortDate}
        parametr={sorted}
        className="btn btn-outline-primary sort-filter"
        textContent1="Reset Sorting"
        textContent2="Sort by date"
      />
    </Fragment>
  );
}

FilterList.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onFilterClear: PropTypes.func.isRequired,
  priority: PropTypes.instanceOf(Array).isRequired,
  category: PropTypes.instanceOf(Array).isRequired,
  sorted: PropTypes.bool.isRequired,
  onSortDate: PropTypes.func.isRequired,
  priorityValues: PropTypes.instanceOf(Array).isRequired,
  categoryValues: PropTypes.instanceOf(Array).isRequired,
};

export default FilterList;
