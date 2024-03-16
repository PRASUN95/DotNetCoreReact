// sagas.ts
import { all } from 'redux-saga/effects';
import { todoSaga } from './../components/Todo/TodoSaga';

export default function* rootSaga() {
  yield all([todoSaga()]);
}
