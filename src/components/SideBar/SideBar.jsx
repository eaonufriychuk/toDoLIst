import './SideBar.css';
import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search/Search';
import FilterListContainer from '../../containers/FilterListContainer';

function SideBar(props) {
  const {
    onFilterChange,
    onFilterClear,
    upDateSearch,
    category,
    priority,
    onSortDate,
    sorted,
  } = props;

  return (
    <div className="side-bar">
      <Search upDateSearch={upDateSearch} />
      <FilterListContainer
        onFilterChange={onFilterChange}
        onFilterClear={onFilterClear}
        priority={priority}
        category={category}
        sorted={sorted}
        onSortDate={onSortDate}
      />
    </div>
  );
}

SideBar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onFilterClear: PropTypes.func.isRequired,
  upDateSearch: PropTypes.func.isRequired,
  category: PropTypes.instanceOf(Array).isRequired,
  priority: PropTypes.instanceOf(Array).isRequired,
  onSortDate: PropTypes.func.isRequired,
  sorted: PropTypes.bool.isRequired,
};

export default SideBar;
