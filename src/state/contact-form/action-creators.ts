import { ActionTypes } from "./action-types";
import { Action } from "./actions";
import { IContactFormUpdate } from "./actions";
import { Dispatch } from "redux";
import { RootState } from "../root.reducer";
import { IContact } from "../../interfaces/i-contacts";

export const updateContactForm = (
  e: React.ChangeEvent<HTMLFormElement>
): IContactFormUpdate => {
  return {
    type: ActionTypes.UPDATE_CONTACT_FORM,
    payload: e,
  };
};

export const prefillForm = (id: string) => {
  return (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const state = getState();
    const contact = state.contact.contacts.find((contact) => contact.id === id);
    dispatch({
      type: ActionTypes.PREFILL_CONTACT_FORM,
      payload: contact as IContact,
    });
  };
};

export const resetContactForm = () => {
  return {
    type: ActionTypes.RESET_CONTACT_FORM,
  };
};
