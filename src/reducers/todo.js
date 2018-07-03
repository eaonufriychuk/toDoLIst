import {
  handleActions
} from 'redux-actions';

import {
  addToDo,
  removeToDo,
  loadCompleted,
  loadFailed
} from '../actions/toDoLIst';

const initialState = {
  todoList: [],
  error: null,
};

export default handleActions({
    [addToDo]: (state, action) => {
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };
    },
    [removeToDo]: (state, action) => {
      return {
        ...state,
        todoList: state.todoList.filter(task => task._id !== action.payload),
      };
    },
    [loadCompleted]: (state, action) => {
      return {
        ...state,
        todoList: [...state.todoList, ...action.payload]
      };
    },
    [loadFailed]: (state, action) => {
      return {
        ...state,
        error: action.payload,
      }
    }
  },
  initialState);