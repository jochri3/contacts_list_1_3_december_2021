import { ActionTypes } from "./contact.action-types";
import { IContact } from "../../interfaces/i-contacts";
import { Action } from "./contact.actions";

export interface IContactState {
  contacts: Array<IContact>;
  contact: IContact;
  createdOrUpdated: boolean;
}

const initialState: IContactState = {
  contacts: [],
  contact: {} as IContact,
  createdOrUpdated: false,
};

const contactReducer = (
  state: IContactState = initialState,
  action: Action
): IContactState => {
  switch (action.type) {
    case ActionTypes.FETCH_CONTACTS:
      return { ...state, contacts: action.payload, createdOrUpdated: false };
    case ActionTypes.FETCH_CONTACT:
      return { ...state, contact: action.payload };
    case ActionTypes.DELETE_CONTACT:
      return {
        ...state,
        createdOrUpdated:false,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        ),
      };
    case ActionTypes.CREATE_CONTACT:
      return { ...state, createdOrUpdated: true };
    default:
      return state;
  }
};

// const contactReducer = (
//   state: IContactState = initialState,
//   action: Action
// ): IContactState => {
//   // GET /api/contacts
//   if (action.type === ActionTypes.FETCH_CONTACTS_REQUEST) {
//     return { ...state, loading: true, error: null, contacts: [] };
//   } else if (action.type === ActionTypes.FETCH_CONTACTS_SUCCESS) {
//     return {
//       ...state,
//       loading: false,
//       error: null,
//       contacts: action.payload,
//     };
//   } else if (action.type === ActionTypes.FETCH_CONTACTS_FAILURE) {
//     return { ...state, loading: false, contacts: [], error: action.error };
//   }

//   // GET api/contacts/:id
//   else if (action.type === ActionTypes.FETCH_CONTACT_REQUEST) {
//     return { ...state, loading: true, contact: {} as IContact };
//   } else if (action.type === ActionTypes.FETCH_CONTACT_SUCCESS) {
//     return {
//       ...state,
//       loading: false,
//       contact: action.payload,
//     };
//   } else if (action.type === ActionTypes.FETCH_CONTACT_FAILURE) {
//     return { ...state, loading: false, error: action.error };
//   }
//   // DELETE api/contacts/:id
//   else if (action.type === ActionTypes.DELETE_CONTACT_REQUEST) {
//     return { ...state, loading: true, error: null };
//   } else if (action.type === ActionTypes.DELETE_CONTACT_SUCCESS) {
//     return { ...state, loading: false, error: null, update: state.update + 1 };
//   } else if (action.type === ActionTypes.DELETE_CONTACT_FAILURE) {
//     return { ...state, loading: false, error: action.error };
//   }
//   return state;
// };

export default contactReducer;
