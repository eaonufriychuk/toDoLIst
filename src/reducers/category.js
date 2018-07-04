import {
  handleActions
} from 'redux-actions';

import {
  getCategoryRequest,
  getCategoryCompleted,
  getCategoryFailed,
} from '../actions/category';

const initialState = {
  categoryValues: [],
  fetching: false,
  error: null,
};

export default handleActions({
  [getCategoryRequest]: (state) => {
    return {
      ...state,
      fetching: true,
      error: null,
    }
  },
  [getCategoryCompleted]: (state, action) => {
    return {
      ...state,
      fetching: false,
      categoryValues: action.payload,
    }
  },
  [getCategoryFailed]: (state, action) => {
    return {
      ...state,
      fetching: false,
      error: action.payload,
    }
  }
}, initialState);