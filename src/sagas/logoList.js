import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  LOAD_LOGO_LISTS_REQUEST,
  LOAD_LOGO_LISTS_SUCCESS,
  LOAD_LOGO_LISTS_FAILURE,
} from "../reducers/logoList";

function loadLogoListsAPI() {
  return axios.post("/logo/load");
}

function* loadLogoLists() {
  try {
    const result = yield call(loadLogoListsAPI);
    yield put({
      type: LOAD_LOGO_LISTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_LOGO_LISTS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchloadLogoLists() {
  yield takeLatest(LOAD_LOGO_LISTS_REQUEST, loadLogoLists);
}

export default function* logoListSaga() {
  yield all([fork(watchloadLogoLists)]);
}
