import {
  handleActions
} from 'redux-actions';

import {
  loadCategoriesCompleted,
  loadCategoriesFailed
} from '../actions/category';

const initialState = {
  category_filter: [],
  error: null,
};

export default handleActions({
  [loadCategoriesCompleted]: (state, action) => {
    return {
      ...state,
      category_filter: action.payload
    }
  },
  [loadCategoriesFailed]: (state, action) => {
    return {
      ...state,
      error: action.payload
    }
  }
}, initialState);