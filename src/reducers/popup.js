import produce from "../util/produce";

export const initialState = {
  addPopupLoading: false,
  addPopupDone: false,
  addPopupError: null,
  deletePopupLoading: false,
  deletePopupDone: false,
  deletePopupError: null,
  popupImage: null,
};

export const ADD_POPUP_REQUEST = "ADD_POPUP_REQUEST";
export const ADD_POPUP_SUCCESS = "ADD_POPUP_SUCCESS";
export const ADD_POPUP_FAILURE = "ADD_POPUP_FAILURE";

export const DELETE_POPUP_REQUEST = "DELETE_POPUP_REQUEST";
export const DELETE_POPUP_SUCCESS = "DELETE_POPUP_SUCCESS";
export const DELETE_POPUP_FAILURE = "DELETE_POPUP_FAILURE";
