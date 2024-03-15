import produce from "../util/produce";

export const initialState = {
  loadListsLoading: false,
  loadListsDone: false,
  loadListsError: null,
  addListsLoading: false,
  addListsDone: false,
  addListsError: null,
  changeMainLoading: false,
  changeMainDone: false,
  changeMainError: null,
  changeAboutLoading: false,
  changeAboutDone: false,
  changeAboutError: null,
  deleteListLoading: false,
  deleteListDone: false,
  deleteListError: null,
  lists: null,
};

export const LOAD_LISTS_REQUEST = "LOAD_LISTS_REQUEST";
export const LOAD_LISTS_SUCCESS = "LOAD_LISTS_SUCCESS";
export const LOAD_LISTS_FAILURE = "LOAD_LISTS_FAILURE";

export const ADD_LISTS_REQUEST = "ADD_LISTS_REQUEST";
export const ADD_LISTS_SUCCESS = "ADD_LISTS_SUCCESS";
export const ADD_LISTS_FAILURE = "ADD_LISTS_FAILURE";

export const CHANGE_MAIN_REQUEST = "CHANGE_MAIN_REQUEST";
export const CHANGE_MAIN_SUCCESS = "CHANGE_MAIN_SUCCESS";
export const CHANGE_MAIN_FAILURE = "CHANGE_MAIN_FAILURE";

export const CHANGE_ABOUT_REQUEST = "CHANGE_ABOUT_REQUEST";
export const CHANGE_ABOUT_SUCCESS = "CHANGE_ABOUT_SUCCESS";
export const CHANGE_ABOUT_FAILURE = "CHANGE_ABOUT_FAILURE";

export const DELETE_LIST_REQUEST = "DELETE_LIST_REQUEST";
export const DELETE_LIST_SUCCESS = "DELETE_LIST_SUCCESS";
export const DELETE_LIST_FAILURE = "DELETE_LIST_FAILURE";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_LISTS_REQUEST:
        draft.loadListsLoading = true;
        draft.loadListsError = null;
        draft.loadListsDone = false;
        break;
      case LOAD_LISTS_SUCCESS:
        draft.loadListsLoading = false;
        draft.lists = action.data;
        draft.loadListsDone = true;
        break;
      case LOAD_LISTS_FAILURE:
        draft.loadListsLoading = false;
        draft.loadListsError = action.error;
        break;
      case ADD_LISTS_REQUEST:
        draft.addListsLoading = true;
        draft.addListsError = null;
        draft.addListsDone = false;
        break;
      case ADD_LISTS_SUCCESS:
        draft.addListsLoading = false;
        draft.addListsDone = true;
        break;
      case ADD_LISTS_FAILURE:
        draft.addListsLoading = false;
        draft.addListsError = action.error;
        break;
      case CHANGE_MAIN_REQUEST:
        draft.changeMainLoading = true;
        draft.changeMainError = null;
        draft.changeMainDone = false;
        break;
      case CHANGE_MAIN_SUCCESS:
        draft.changeMainLoading = false;
        draft.changeMainDone = true;
        break;
      case CHANGE_MAIN_FAILURE:
        draft.changeListsLoading = false;
        draft.changeListsError = action.error;
        break;
      case CHANGE_ABOUT_REQUEST:
        draft.changeAboutLoading = true;
        draft.changeAboutError = null;
        draft.changeAboutDone = false;
        break;
      case CHANGE_ABOUT_SUCCESS:
        draft.changeAboutLoading = false;
        draft.changeAboutDone = true;
        break;
      case CHANGE_ABOUT_FAILURE:
        draft.changeLAboutLoading = false;
        draft.changeLAboutError = action.error;
        break;
      case DELETE_LIST_REQUEST:
        draft.deleteListLoading = true;
        draft.deleteListError = null;
        draft.deleteListDone = false;
        break;
      case DELETE_LIST_SUCCESS:
        draft.deleteListLoading = false;
        draft.lists = draft.lists.filter((item) => item.id !== action.data.id);
        draft.deleteListDone = true;
        break;
      case DELETE_LIST_FAILURE:
        draft.deleteListLoading = false;
        draft.deleteListError = action.error;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
