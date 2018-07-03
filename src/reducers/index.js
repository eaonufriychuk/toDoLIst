import {
  combineReducers
} from 'redux';

import todo from './todo';
import priority from './priority';
import category from './category';

export default combineReducers({
  todo,
  priority,
  category
});