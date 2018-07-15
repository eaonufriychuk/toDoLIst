import {
  combineReducers,
} from 'redux';

import todo from './todoList/reducers/todo';
import priority from './filters/reducers/priority';
import category from './filters/reducers/category';

export default combineReducers({
  todo,
  priority,
  category,
});
