import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import me from "./modules/me";
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    me,
  });
