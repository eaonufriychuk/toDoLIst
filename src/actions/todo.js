import {
  createAction
} from 'redux-actions';

import {
  ADD_TODO,
  REMOVE_TODO,
  GET_TODO_REQUEST,
  GET_TODO_COMPLETED,
  GET_TODO_FAILED,
} from '../constants/todo';

export const addTodo = createAction(ADD_TODO);
export const removeTodo = createAction(REMOVE_TODO);
export const getTodoRequest = createAction(GET_TODO_REQUEST);
export const getTodoCompleted = createAction(GET_TODO_COMPLETED);
export const getTodoFailed = createAction(GET_TODO_FAILED);

export const getTodo = (dispatch) => {
  dispatch(getTodoRequest());
  fetch(`http://localhost:3005/todo`)
    .then(res => res.json())
    .then(todo => {
      dispatch(getTodoCompleted(todo));
    })
    .catch(error => {
      dispatch(getTodoFailed(error));
    })
}

export const postTodo = (dispatch, todo) => {
  return (fetch('http://localhost:3005/todo', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(todo => dispatch(addTodo(todo)))
    .catch(error => {
      dispatch(getTodoFailed(error));
    }))
}

export const deleteTodo = (dispatch, id) => {
  return (fetch(`http://localhost:3005/todo/${id}`, {
      method: 'DELETE'
    })
    .then(res => dispatch(removeTodo(id)))
    .catch(error => {
      dispatch(getTodoFailed(error));
    }))
}