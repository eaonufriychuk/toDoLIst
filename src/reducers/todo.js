import {
  handleActions
} from 'redux-actions';

import {
  addTodo,
  removeTodo,
  getTodoRequest,
  getTodoCompleted,
  getTodoFailed
} from '../actions/todo';

const initialState = {
  todoList: [],
  fetching: false,
  error: null,
};

export default handleActions({
    [addTodo]: (state, action) => {
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };
    },
    [removeTodo]: (state, action) => {
      return {
        ...state,
        todoList: state.todoList.filter(task => task._id !== action.payload),
      };
    },
    [getTodoRequest]: (state) => {
      return {
        ...state,
        fetching: true,
        error: null,
      };
    },
    [getTodoCompleted]: (state, action) => {
      return {
        ...state,
        fetching: false,
        todoList: [...state.todoList, ...action.payload],
      };
    },
    [getTodoFailed]: (state, action) => {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }
    }
  },
  initialState);