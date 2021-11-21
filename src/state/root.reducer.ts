import { combineReducers } from "redux";

const rootReducer = combineReducers({
  contacts: () => ["chris", "jean", "anita"],
});

export default rootReducer;
