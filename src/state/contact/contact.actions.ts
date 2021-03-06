import { ActionTypes } from "./contact.action-types";
import { IContact } from "../../interfaces/i-contacts";

// // GET api/contacts
// export interface IFetchContactsRequest {
//   type: ActionTypes.FETCH_CONTACTS_REQUEST;
// }

// export interface IFetchContactsSuccess {
//   type: ActionTypes.FETCH_CONTACTS_SUCCESS;
//   payload: Array<IContact>;
// }

// export interface IFetchContactsFailure {
//   type: ActionTypes.FETCH_CONTACTS_FAILURE;
//   error: string;
// }

// // GET api/contacts/:id
// export interface IFetchContactRequest {
//   type: ActionTypes.FETCH_CONTACT_REQUEST;
// }

// export interface IFetchContactSuccess {
//   type: ActionTypes.FETCH_CONTACT_SUCCESS;
//   payload: IContact;
// }

// export interface IFetchContactFailure {
//   type: ActionTypes.FETCH_CONTACT_FAILURE;
//   error: string;
// }

// // DELETE api/contacts/:id
// export interface IDeleteContactRequest {
//   type: ActionTypes.DELETE_CONTACT_REQUEST;
// }

// export interface IDeleteContactSuccess {
//   type: ActionTypes.DELETE_CONTACT_SUCCESS;
// }

// export interface IDeleteContactFailure {
//   type: ActionTypes.DELETE_CONTACT_FAILURE;
//   error: string;
// }

// export type Action =
//   | IFetchContactsRequest
//   | IFetchContactsSuccess
//   | IFetchContactsFailure
//   | IFetchContactRequest
//   | IFetchContactSuccess
//   | IFetchContactFailure
//   | IDeleteContactFailure
//   | IDeleteContactRequest
//   | IDeleteContactSuccess;

export interface IFetchContacts {
  type: ActionTypes.FETCH_CONTACTS;
  payload: IContact[];
}

export interface IFetchContact {
  type: ActionTypes.FETCH_CONTACT;
  payload: IContact;
}

export interface IDeleteContact {
  type: ActionTypes.DELETE_CONTACT;
  payload: {
    id: string;
  };
}

export interface ICreateContact {
  type: ActionTypes.CREATE_CONTACT;
}

export interface IUpdateContact {
  type: ActionTypes.UPDATE_CONTACT;
}

export type Action =
  | IFetchContacts
  | IFetchContact
  | IDeleteContact
  | ICreateContact
  | IUpdateContact;
