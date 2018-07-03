import {
  handleActions
} from 'redux-actions';

import {
  loadPrioritiesCompleted,
  loadPrioritiesFailed
} from '../actions/priority';

const initialState = {
  priority_filter: [],
  error: null,
};

export default handleActions({
  [loadPrioritiesCompleted]: (state, action) => {
    return {
      ...state,
      priority_filter: action.payload
    }
  },
  [loadPrioritiesFailed]: (state, action) => {
    return {
      ...state,
      error: action.payload
    }
  }
}, initialState);