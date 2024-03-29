// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import TodoList from './components/Todo/TodoList';
import Calculator from './components/Calculator/Calculator';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>TODO App</h1>
        <TodoList />
      </div>
      <div>
        <Calculator></Calculator>
      </div>
    </Provider>
  );
};

export default App;
