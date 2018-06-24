import React, { Fragment } from 'react';

import './Filter.css';

const PRIORITY_LABEL = {
  0: '+2',
  1: '+1',
  2: '0',
  3: '-1'
};

const CATEGORY_LABEL = {
  4: 'Do now',
  5: 'Do tomorrow',
  6: 'Do soon',
  7: 'Do when you get some extra time'
};

export default ({ onPriorityChange, priority, onPriorityClear, onCategoryChange, category, onCategoryClear }) => {
  return (<Fragment>
    <div className="col-3">
      <div className="card">
        <div className="card-header">Сортировка по приоритету</div>
        <div className="card-body priority">
          <label className="checkbox" htmlFor="all" key="all" style={{ display: 'block' }}>
            <input
                type="checkbox"
                name='all'
                id="all"
                checked={priority.length === 0}
                onChange={onPriorityClear} /> All
                </label>
          {Object.keys(PRIORITY_LABEL).sort((a, b) => a - b).map(prior => (
            <label className="checkbox" htmlFor={prior} key={prior} style={{ display: 'block' }}>
              <input
                  type="checkbox"
                  name='prior'
                  value={prior}
                  id={prior}
                  checked={priority.includes(PRIORITY_LABEL[prior])}
                  onChange={onPriorityChange(PRIORITY_LABEL[prior])}
              /> {PRIORITY_LABEL[prior]}
            </label>
          ))}
        </div>
      </div>
    </div>
    <div className="col-4">
      <div className="card">
        <div className="card-header">Сортировка по категории</div>
        <div className="card-body">
          <label htmlFor="all" key="all" style={{ display: 'block' }}>
            <input
                className="checkbox"
                type="checkbox"
                name='all'
                id="all"
                checked={category.length === 0}
                onChange={onCategoryClear} /> All
                </label>
          {Object.keys(CATEGORY_LABEL).sort((a, b) => a - b).map(type => (
            <label htmlFor={type} key={type} style={{ display: 'block' }}>
              <input
                  className="checkbox"
                  type="checkbox"
                  name='type'
                  value={type}
                  id={type}
                  checked={category.includes(CATEGORY_LABEL[type])}
                  onChange={onCategoryChange(CATEGORY_LABEL[type])}
              /> {CATEGORY_LABEL[type]}
            </label>
          ))}
        </div>
      </div>
    </div>
  </Fragment>)
}