import {
  createAction
} from 'redux-actions';

export const loadCompleted = createAction('LOAD_COMPLETED');
export const loadFailed = createAction('LOAD_FAILED');
export const addToDo = createAction('ADD_TODO');
export const removeToDo = createAction('REMOVE_TODO');
export const loadTodoOnServer = createAction('LOAD_TODO');

export const loadTodo = (dispatch) => {
  fetch(`http://localhost:3005/todo`)
    .then(res => res.json())
    .then(todo => {
      dispatch(loadCompleted(todo));
    })
    .catch(error => {
      dispatch(loadFailed(error));
    })
}

export const addTodoOnServer = (dispatch, item) => {
  return (fetch('http://localhost:3005/todo', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(todo => dispatch(addToDo(todo)))
    .catch(error => {
      dispatch(loadFailed(error));
    }))
}

export const removeTodoFromServer = (dispatch, id) => {
  return (fetch(`http://localhost:3005/todo/${id}`, {
      method: 'DELETE'
    })
    .then(res => dispatch(removeToDo(id)))
    .catch(error => {
      dispatch(loadFailed(error));
    }))
}