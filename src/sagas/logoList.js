import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  LOAD_LOGO_LISTS_REQUEST,
  LOAD_LOGO_LISTS_SUCCESS,
  LOAD_LOGO_LISTS_FAILURE,
  ADD_LOGO_LISTS_REQUEST,
  ADD_LOGO_LISTS_SUCCESS,
  ADD_LOGO_LISTS_FAILURE,
  CHANGE_LOGO_LISTS_REQUEST,
  CHANGE_LOGO_LISTS_SUCCESS,
  CHANGE_LOGO_LISTS_FAILURE,
  DELETE_LOGO_LISTS_REQUEST,
  DELETE_LOGO_LISTS_SUCCESS,
  DELETE_LOGO_LISTS_FAILURE,
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

function addLogoListsAPI(data) {
  return axios.post("/logo/add", data);
}

function* addLogoLists(action) {
  try {
    const result = yield call(addLogoListsAPI, action.data);
    yield put({
      type: ADD_LOGO_LISTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_LOGO_LISTS_FAILURE,
      error: err.response.data,
    });
  }
}

function changeLogoListsAPI(data) {
  return axios.post("/logo/change", data);
}

function* changeLogoLists(action) {
  try {
    const result = yield call(changeLogoListsAPI, action.data);
    yield put({
      type: CHANGE_LOGO_LISTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CHANGE_LOGO_LISTS_FAILURE,
      error: err.response.data,
    });
  }
}

function deleteLogoListsAPI(data) {
  return axios.post("/logo/delete", data);
}

function* deleteLogoLists(action) {
  try {
    const result = yield call(deleteLogoListsAPI, action.data);
    yield put({
      type: DELETE_LOGO_LISTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: DELETE_LOGO_LISTS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadLogoLists() {
  yield takeLatest(LOAD_LOGO_LISTS_REQUEST, loadLogoLists);
}

function* watchAddLogoLists() {
  yield takeLatest(ADD_LOGO_LISTS_REQUEST, addLogoLists);
}

function* watchChangeLogoLists() {
  yield takeLatest(CHANGE_LOGO_LISTS_REQUEST, changeLogoLists);
}

function* watchDeleteLogoLists() {
  yield takeLatest(DELETE_LOGO_LISTS_REQUEST, deleteLogoLists);
}

export default function* logoListSaga() {
  yield all([
    fork(watchLoadLogoLists),
    fork(watchAddLogoLists),
    fork(watchChangeLogoLists),
    fork(watchDeleteLogoLists),
  ]);
}
