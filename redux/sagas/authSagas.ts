import { call, takeLatest, all, put } from "redux-saga/effects";
import {
  login,
  loginError,
  loginSuccess,
  signup,
  signupError,
  signupSuccess,
} from "redux/actions/auth";
import { loginApi, signupApi } from "redux/query";

//Login saga handler
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

//Signup saga handler
function* signupSaga(action) {
  try {
    const res = yield call(signupApi, action.payload);
    //Throwing if error
    if (res.data.hasOwnProperty("errors")) {
      throw res.data.errors;
    } else {
      yield put(signupSuccess(res));
    }
  } catch (error) {
    yield put(signupError(error));
  }
}

export default function* authSagas() {
  yield all([takeLatest(login, loginSaga), takeLatest(signup, signupSaga)]);
}
