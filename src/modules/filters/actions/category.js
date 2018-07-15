import {
  createAction,
} from 'redux-actions';

export const getCategoryRequest = createAction('GET_CATEGORY_REQUEST');
export const getCategoryCompleted = createAction('GET_CATEGORY_COMPLETED');
export const getCategoryFailed = createAction('GET_CATEGORY_FAILED');

export const getCategory = () => (dispatch) => {
  dispatch(getCategoryRequest());
  fetch('http://localhost:3005/todo/categories')
    .then(res => res.json())
    .then((category) => {
      dispatch(getCategoryCompleted(category));
    })
    .catch((error) => {
      dispatch(getCategoryFailed(error));
    });
};
