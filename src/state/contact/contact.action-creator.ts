import { Dispatch } from "react";
import ContactAPI from "../../config/api";
import IContact from "../../interfaces/i-contacts";
import { ActionTypes } from "./contact.action-types";
import { Action } from "./contact.actions";

export const fetchContacts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.FETCH_CONTACTS_REQUEST });
    try {
      const response = await ContactAPI.get<Array<IContact>>("/");
      dispatch({
        type: ActionTypes.FETCH_CONTACTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: ActionTypes.FETCH_CONTACTS_FAILURE, error: "erreur" });
    }
  };
};

export const fetchContactById = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.FETCH_CONTACT_REQUEST });
    try {
      const response = await ContactAPI.get<IContact>("/" + id);
      dispatch({
        type: ActionTypes.FETCH_CONTACT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: ActionTypes.FETCH_CONTACT_FAILURE, error: "erreur" });
    }
  };
};
