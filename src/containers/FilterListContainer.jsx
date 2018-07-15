import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterList from '../components/FilterList/FilterList';

function FilterListContainer(props) {
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
    <FilterList
      onFilterChange={onFilterChange}
      onFilterClear={onFilterClear}
      priority={priority}
      category={category}
      sorted={sorted}
      onSortDate={onSortDate}
      priorityValues={priorityValues}
      categoryValues={categoryValues}
    />
  );
}

FilterListContainer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onFilterClear: PropTypes.func.isRequired,
  priority: PropTypes.instanceOf(Array).isRequired,
  category: PropTypes.instanceOf(Array).isRequired,
  sorted: PropTypes.bool.isRequired,
  onSortDate: PropTypes.func.isRequired,
  priorityValues: PropTypes.instanceOf(Array).isRequired,
  categoryValues: PropTypes.instanceOf(Array).isRequired,
};

export default connect(
  (state, props) => ({
    ...props,
    priorityValues: state.priority.priorityValues,
    categoryValues: state.category.categoryValues,
  }),
  () => ({}),
)(FilterListContainer);
