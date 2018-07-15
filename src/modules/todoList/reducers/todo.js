import {
  handleActions,
} from 'redux-actions';

import {
  addTodo,
  removeTodo,
  getTodoRequest,
  getTodoCompleted,
  getTodoFailed,
} from '../actions/todo';

const initialState = {
  todoList: [],
  fetching: false,
  error: null,
};

export default handleActions({
  [addTodo]: (state, action) => ({
    ...state,
    todoList: [...state.todoList, action.payload],
  }),
  [removeTodo]: (state, action) => ({
    ...state,
    todoList: state.todoList.filter(task => task._id !== action.payload),
  }),
  [getTodoRequest]: state => ({
    ...state,
    fetching: true,
    error: null,
  }),
  [getTodoCompleted]: (state, action) => ({
    ...state,
    fetching: false,
    todoList: [...state.todoList, ...action.payload],
  }),
  [getTodoFailed]: (state, action) => ({
    ...state,
    fetching: false,
    error: action.payload,
  }),
}, initialState);
