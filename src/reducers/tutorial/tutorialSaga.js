import { take, put } from 'redux-saga/effects';
import { FETCH_NUMBER, setNumber } from './tutorialReducer';
import { getRandom } from '../../lib/helpers/commonHelper';
import {
  TUTORIAL_MAX_NUMBER,
  TUTORIAL_MIN_NUMBER,
} from '../../lib/constants/tutorialConstants';

/*
 * 튜토리얼 코드이므로 axios 를 통한 통신 대신해 랜덤 값을 가져온다.
 */
// eslint-disable-next-line import/prefer-default-export
export function* fetchNumber() {
  while (true) {
    yield take(FETCH_NUMBER);

    const number = getRandom(TUTORIAL_MAX_NUMBER, TUTORIAL_MIN_NUMBER);

    try {
      yield put(setNumber(number));
    } catch (err) {
      // 예외 처리
    }
  }
}
