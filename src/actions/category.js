import {
  createAction
} from 'redux-actions';

export const loadCategoriesCompleted = createAction('LOAD_CATEGORIES_COMPLETED');
export const loadCategoriesFailed = createAction('LOAD_CATEGORIES_FAILED');

export const loadCategoryFilter = (dispatch) => {
  fetch(`http://localhost:3005/todo/categories`)
    .then(res => res.json())
    .then(category => {
      dispatch(loadCategoriesCompleted(category));
    })
    .catch(error => {
      dispatch(loadCategoriesFailed(error));
    })
}