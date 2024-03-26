import { combineReducers } from "redux";
import user from "./user";
import videoList from "./videoList";
import contact from "./contact";
import logoList from "./logoList";
import popup from "./popup";

const rootReducer = combineReducers({
  user,
  videoList,
  contact,
  logoList,
  popup,
});

export default rootReducer;
