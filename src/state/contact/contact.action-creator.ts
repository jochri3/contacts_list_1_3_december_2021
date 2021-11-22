import { Dispatch } from "react";
import ContactAPI from "../../config/api";
import IContact from "../../interfaces/i-contacts";
import { ActionTypes } from "./contact.action-types";
import { Action } from "./contact.actions";

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
