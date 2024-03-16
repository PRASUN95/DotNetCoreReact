// reducers.ts
import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './../features/TodoSlice'

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
