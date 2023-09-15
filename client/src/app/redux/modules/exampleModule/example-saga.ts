import { getExample } from 'app/services/exampleServices';
import { call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_EXAMPLE } from './example-constants';
import { errorData, recievedData } from './example-slice';

function* fetchExample(): object {
  try {
    const res = yield call(getExample);
    yield put(recievedData(res.data));
  } catch (e) {
    yield put(errorData());
  }
}

function* exampleWatcherSaga() {
  yield takeLatest(REQUEST_EXAMPLE, fetchExample);
}

export default exampleWatcherSaga;
