import { combineReducers } from "redux";
import counter from "./counter/counter";
import _language from "./language/language";

export default combineReducers({
  _language,
  counter,
});
