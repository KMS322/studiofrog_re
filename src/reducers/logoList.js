import produce from "../util/produce";

export const initialState = {
  loadLogoListsLoading: false,
  loadLogoListsDone: false,
  loadLogoListsError: null,
  addLogoListsLoading: false,
  addLogoListsDone: false,
  addLogoListsError: null,
  changeLogoListsLoading: false,
  changeLogoListsDone: false,
  changeLogoListsError: null,
  deleteLogoListsLoading: false,
  deleteLogoListsDone: false,
  deleteLogoListsError: null,
  logoLists: null,
};

export const LOAD_LOGO_LISTS_REQUEST = "LOAD_LOGO_LISTS_REQUEST";
export const LOAD_LOGO_LISTS_SUCCESS = "LOAD_LOGO_LISTS_SUCCESS";
export const LOAD_LOGO_LISTS_FAILURE = "LOAD_LOGO_LISTS_FAILURE";

export const ADD_LOGO_LISTS_REQUEST = "ADD_LOGO_LISTS_REQUEST";
export const ADD_LOGO_LISTS_SUCCESS = "ADD_LOGO_LISTS_SUCCESS";
export const ADD_LOGO_LISTS_FAILURE = "ADD_LOGO_LISTS_FAILURE";

export const CHANGE_LOGO_LISTS_REQUEST = "CHANGE_LOGO_LISTS_REQUEST";
export const CHANGE_LOGO_LISTS_SUCCESS = "CHANGE_LOGO_LISTS_SUCCESS";
export const CHANGE_LOGO_LISTS_FAILURE = "CHANGE_LOGO_LISTS_FAILURE";

export const DELETE_LOGO_LISTS_REQUEST = "DELETE_LOGO_LISTS_REQUEST";
export const DELETE_LOGO_LISTS_SUCCESS = "DELETE_LOGO_LISTS_SUCCESS";
export const DELETE_LOGO_LISTS_FAILURE = "DELETE_LOGO_LISTS_FAILURE";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_LOGO_LISTS_REQUEST:
        draft.loadLogoListsLoading = true;
        draft.loadLogoListsError = null;
        draft.loadLogoListsDone = false;
        break;
      case LOAD_LOGO_LISTS_SUCCESS:
        draft.loadLogoListsLoading = false;
        draft.logoLists = action.data;
        draft.loadLogoListsDone = true;
        break;
      case LOAD_LOGO_LISTS_FAILURE:
        draft.loadLogoListsLoading = false;
        draft.loadLogoListsError = action.error;
        break;
      case ADD_LOGO_LISTS_REQUEST:
        draft.addLogoListsLoading = true;
        draft.addLogoListsError = null;
        draft.addLogoListsDone = false;
        break;
      case ADD_LOGO_LISTS_SUCCESS:
        draft.addLogoListsLoading = false;
        draft.addLogoListsDone = true;
        break;
      case ADD_LOGO_LISTS_FAILURE:
        draft.addLogoListsLoading = false;
        draft.addLogoListsError = action.error;
        break;
      case CHANGE_LOGO_LISTS_REQUEST:
        draft.changeLogoListsLoading = true;
        draft.changeLogoListsError = null;
        draft.changeLogoListsDone = false;
        break;
      case CHANGE_LOGO_LISTS_SUCCESS:
        draft.changeLogoListsLoading = false;
        draft.changeLogoListsDone = true;
        break;
      case CHANGE_LOGO_LISTS_FAILURE:
        draft.changeLogoListsLoading = false;
        draft.changeLogoListsError = action.error;
        break;
      case DELETE_LOGO_LISTS_REQUEST:
        draft.deleteLogoListsLoading = true;
        draft.deleteLogoListsError = null;
        draft.deleteLogoListsDone = false;
        break;
      case DELETE_LOGO_LISTS_SUCCESS:
        draft.deleteLogoListsLoading = false;
        draft.deleteLogoListsDone = true;
        break;
      case DELETE_LOGO_LISTS_FAILURE:
        draft.deleteLogoListsLoading = false;
        draft.deleteLogoListsError = action.error;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
