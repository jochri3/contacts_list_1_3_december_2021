import { Dispatch } from "react";
import ContactAPI from "../../config/api";
import { IContact } from "../../interfaces/i-contacts";
import { ActionTypes } from "./contact.action-types";
import { ActionTypes as FormActionTypes } from "../contact-form/action-types";
import { Action } from "./contact.actions";
import { Action as FormActions } from "../contact-form/actions";
import { v4 as uuidv4 } from "uuid";

export const fetchContacts = () => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await ContactAPI.get<Array<IContact>>("/");
    dispatch({
      type: ActionTypes.FETCH_CONTACTS,
      payload: response.data,
    });
  };
};

export const fetchContactById = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await ContactAPI.get<IContact>("/" + id);
    dispatch({
      type: ActionTypes.FETCH_CONTACT,
      payload: response.data,
    });
  };
};

export const removeContact = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    await ContactAPI.delete("/" + id);
    dispatch({ type: ActionTypes.DELETE_CONTACT, payload: { id } });
  };
};

// POST /api/contacts
export const createContact = (contact: IContact) => {
  return async (dispatch: Dispatch<FormActions | Action>) => {
    contact.id = uuidv4();
    await ContactAPI.post<IContact>("/", contact);
    dispatch({
      type: ActionTypes.CREATE_CONTACT,
    });
    dispatch({ type: FormActionTypes.RESET_CONTACT_FORM });
  };
};

// PUT /api/contacts/:id
export const updateContact = (contact: IContact) => {
  return async (dispatch: Dispatch<Action | FormActions>) => {
    await ContactAPI.put<IContact>("/" + contact.id, contact);
    dispatch({
      type: ActionTypes.UPDATE_CONTACT,
    });
    dispatch({ type: FormActionTypes.RESET_CONTACT_FORM });
  };
};
