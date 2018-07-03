import {
  createAction
} from 'redux-actions';

export const loadPrioritiesCompleted = createAction('LOAD_PRIORITIES_COMPLETED');
export const loadPrioritiesFailed = createAction('LOAD_PRIORITIES_FAILED');

export const loadPriorityFilter = (dispatch) => {
  fetch(`http://localhost:3005/todo/priorities`)
    .then(res => res.json())
    .then(priority => {
      dispatch(loadPrioritiesCompleted(priority));
    })
    .catch(error => {
      dispatch(loadPrioritiesFailed(error));
    })
}