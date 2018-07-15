import {
  handleActions,
} from 'redux-actions';

import {
  getPriorityRequest,
  getPriorityCompleted,
  getPriorityFailed,
} from '../actions/priority';

const initialState = {
  priorityValues: [],
  fetching: false,
  error: null,
};

export default handleActions({
  [getPriorityRequest]: state => ({
    ...state,
    fetching: true,
    error: null,
  }),
  [getPriorityCompleted]: (state, action) => ({
    ...state,
    fetching: false,
    priorityValues: action.payload,
  }),
  [getPriorityFailed]: (state, action) => ({
    ...state,
    fetching: false,
    error: action.payload,
  }),
}, initialState);
