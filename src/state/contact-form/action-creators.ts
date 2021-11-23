import { ActionTypes } from "./action-types";
import { IContactFormUpdate } from "./actions";

export const updateContactForm = (
  e: React.ChangeEvent<HTMLFormElement>
): IContactFormUpdate => {
  return {
    type: ActionTypes.UPDATE_CONTACT_FORM,
    payload: e,
  };
};