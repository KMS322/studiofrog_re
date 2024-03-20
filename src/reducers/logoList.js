import produce from "../util/produce";

export const initialState = {
  loadLogoListsLoading: false,
  loadLogoListsDone: false,
  loadLogoListsError: null,
  logoLists: null,
};

export const LOAD_LOGO_LISTS_REQUEST = "LOAD_LOGO_LISTS_REQUEST";
export const LOAD_LOGO_LISTS_SUCCESS = "LOAD_LOGO_LISTS_SUCCESS";
export const LOAD_LOGO_LISTS_FAILURE = "LOAD_LOGO_LISTS_FAILURE";

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
      default:
        return state;
    }
  });
};

export default reducer;
