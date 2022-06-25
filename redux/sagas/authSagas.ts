import { call, takeLatest, all, put } from "redux-saga/effects";
import { login, loginError, loginSuccess } from "redux/actions/auth";
import { loginApi } from "redux/query";

function* loginSaga(action) {
  try {
    const res = yield call(loginApi, action.payload);
    //Throwing if error
    if (res.data.hasOwnProperty("errors")) {
      throw res.data.errors;
    } else {
      yield put(loginSuccess(res));
    }
  } catch (error) {
    yield put(loginError(error));
  }
}

export default function* authSagas() {
  yield all([takeLatest(login, loginSaga)]);
}
