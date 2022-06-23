import { combineReducers } from "redux";
import authReducers from "./authReducers";

//Exporting all reducers by combining them
export default combineReducers({
  auth: authReducers,
});
