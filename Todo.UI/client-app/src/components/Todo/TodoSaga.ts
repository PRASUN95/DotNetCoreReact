// sagas.ts
import { put, takeLatest } from 'redux-saga/effects';
import { addTodo, newTodoAction } from '../../features/TodoSlice';

function* submitTodoAsync(action: ReturnType<typeof addTodo>) {
  // Simulate an asynchronous action (e.g., API call)
  yield new Promise((resolve) => setTimeout(resolve, 100));
  yield put(addTodo(action.payload));
}

// function* handleEditTodoAsync(action: ReturnType<typeof editTodo>) {
//   // Simulate an asynchronous action (e.g., API call)
//   yield new Promise((resolve) => setTimeout(resolve, 1000));
//   yield put(editTodo(action.payload));
// }

// function* handleDeleteTodoAsync(action: ReturnType<typeof deleteTodo>) {
//   // Simulate an asynchronous action (e.g., API call)
//   yield new Promise((resolve) => setTimeout(resolve, 1000));
//   yield put(deleteTodo(action.payload));
// }

export function* todoSaga() {
    yield takeLatest(newTodoAction, submitTodoAsync);
    // yield takeLatest(editTodo.type, handleEditTodoAsync);
    // yield takeLatest(deleteTodo.type, handleDeleteTodoAsync);
  }
