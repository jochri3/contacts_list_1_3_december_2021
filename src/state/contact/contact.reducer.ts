import { ActionTypes } from "./contact.action-types";
import IContact from "../../interfaces/i-contacts";
import { Action } from "./contact.actions";

export interface IContactState {
  contacts: Array<IContact>;
  loading: boolean;
  error: string | null;
}

const initialState: IContactState = {
  contacts: [],
  loading: false,
  error: "",
};

const contactReducer = (
  state: IContactState = initialState,
  action: Action
): IContactState => {
  if (action.type === ActionTypes.FETCH_CONTACTS_REQUEST) {
    return { ...state, loading: true, error: null, contacts: [] };
  }
  if (action.type === ActionTypes.FETCH_CONTACTS_SUCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      contacts: action.payload,
    };
  }
  if (action.type === ActionTypes.FETCH_CONTACTS_FAILURE) {
    return { ...state, loading: false, contacts: [], error: action.payload };
  }
  return state;
};

export default contactReducer;
