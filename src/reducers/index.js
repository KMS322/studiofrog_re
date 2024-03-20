import { combineReducers } from "redux";
import user from "./user";
import videoList from "./videoList";
import contact from "./contact";
import logoList from "./logoList";

const rootReducer = combineReducers({
  user,
  videoList,
  contact,
  logoList,
});

export default rootReducer;
