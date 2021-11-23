import { combineReducers } from "redux";
import { formReducer } from "./contact-form/reducer";
import contactReducer from "./contact/contact.reducer";

const rootReducer = combineReducers({
  contact: contactReducer,
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
