import { ActionTypes } from "./contact.action-types";
import IContact from "../../interfaces/i-contacts";

export interface IFetchContactsRequest {
  type: ActionTypes.FETCH_CONTACTS_REQUEST;
}

export interface IFetchContactsSuccess {
  type: ActionTypes.FETCH_CONTACTS_SUCCESS;
  payload: Array<IContact>;
}

export interface IFetchContactFailure {
  type: ActionTypes.FETCH_CONTACTS_FAILURE;
  payload: string;
}

export type Action =
  | IFetchContactsRequest
  | IFetchContactsSuccess
  | IFetchContactFailure;
