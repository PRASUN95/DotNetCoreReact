import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoItem } from "../components/Todo/TodoTypes";

interface TodoState {
  todos: TodoItem[];
}

export const newTodoAction: string = "ADD_TODO";

const initialState: TodoState = {
  todos: [],
};

const TodoSLice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<TodoItem>) {
      state.todos.push(action.payload);
    },  
  },
});

export const { addTodo } = TodoSLice.actions;

export default TodoSLice.reducer;