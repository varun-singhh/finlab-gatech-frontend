import { combineReducers } from "redux";
import reportReducer from "./report";
const reducer = combineReducers({
  report: reportReducer,
});

export default reducer;
