import { ActionTypes } from "./contact.action-types";
import IContact from "../../interfaces/i-contacts";
import { Action } from "./contact.actions";

export interface IContactState {
  contacts: Array<IContact>;
  contact: IContact;
  loading: boolean;
  error: string | null;
  update: number;
}

const initialState: IContactState = {
  contacts: [],
  contact: {} as IContact,
  loading: false,
  error: "",
  update: 0,
};

const contactReducer = (
  state: IContactState = initialState,
  action: Action
): IContactState => {
  // GET /api/contacts
  if (action.type === ActionTypes.FETCH_CONTACTS_REQUEST) {
    return { ...state, loading: true, error: null, contacts: [] };
  } else if (action.type === ActionTypes.FETCH_CONTACTS_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      contacts: action.payload,
    };
  } else if (action.type === ActionTypes.FETCH_CONTACTS_FAILURE) {
    return { ...state, loading: false, contacts: [], error: action.error };
  }

  // GET api/contacts/:id
  else if (action.type === ActionTypes.FETCH_CONTACT_REQUEST) {
    return { ...state, loading: true, contact: {} as IContact };
  } else if (action.type === ActionTypes.FETCH_CONTACT_SUCCESS) {
    return {
      ...state,
      loading: false,
      contact: action.payload,
      update: state.update + 1,
    };
  } else if (action.type === ActionTypes.FETCH_CONTACT_FAILURE) {
    return { ...state, loading: false, error: action.error };
  }
  return state;
};

export default contactReducer;
