import {
  createAction
} from 'redux-actions';

import {
  GET_PRIORITY_REQUEST,
  GET_PRIORITY_COMPLETED,
  GET_PRIORITY_FAILED,
} from '../constants/priority';

export const getPriorityRequest = createAction(GET_PRIORITY_REQUEST);
export const getPriorityCompleted = createAction(GET_PRIORITY_COMPLETED);
export const getPriorityFailed = createAction(GET_PRIORITY_FAILED);

export const getPriority = (dispatch) => {
  dispatch(getPriorityRequest());
  fetch(`http://localhost:3005/todo/priorities`)
    .then(res => res.json())
    .then(priority => {
      dispatch(getPriorityCompleted(priority));
    })
    .catch(error => {
      dispatch(getPriorityFailed(error));
    });
}