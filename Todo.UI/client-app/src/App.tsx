// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import TodoList from './components/Todo/TodoList';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>TODO App</h1>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
