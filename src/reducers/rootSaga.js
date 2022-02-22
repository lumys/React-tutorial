import { fork } from 'redux-saga/effects';
import { fetchNumber } from './tutorial/tutorialSaga';

export default function* rootSaga() {
  // tutorial
  yield fork(fetchNumber);
}
