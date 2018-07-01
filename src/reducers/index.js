import {
  handleActions
} from 'redux-actions';

import {
  addToDo,
  removeToDo,
} from '../actions/toDoLIst';

const initialState = [{
    id: 'id-1',
    text: 'fix file',
    priority: '+2',
    category: 'Do now',
    date: '2018-06-21',
  },
  {
    id: 'id-2',
    text: 'add comments',
    priority: '+1',
    category: 'Do now',
    date: '2018-06-12',
  },
  {
    id: 'id-3',
    text: 'pull request',
    priority: '+2',
    category: 'Do now',
    date: '2018-05-25',
  },
];

export default handleActions({
    [addToDo]: (state, action) => {
      return [...state, action.payload];
    },
    [removeToDo]: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    }
  },
  initialState);