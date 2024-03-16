// components/TodoList.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../Redux/store';
import { newTodoAction, addTodo } from '../../features/TodoSlice';
import { TodoItem } from './TodoTypes';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = () => {
    console.log("whoaooooaa");
    if (newTodo.trim() !== '') {
      const todo: TodoItem = {
        id: String(Date.now()),
        description: newTodo.trim(),
      };
      dispatch({ type: newTodoAction, payload: todo });
      setNewTodo('');
    }
  };

//   const handleEditTodo = (id: string, newText: string) => {
//     dispatch(editTodo({ id, todo: { id, text: newText, priority: Priority.Normal } }));
//   };

//   const handleDeleteTodo = (id: string) => {
//     dispatch(deleteTodo(id));
//   };

//   const handleSetPriority = (id: string, priority: Priority) => {
//     dispatch(setPriority({ id, priority }));
//   };

  return (
    <div className="todo-list">
      <h2>TODOs</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
