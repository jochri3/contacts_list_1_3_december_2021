import { IContact } from "../../interfaces/i-contacts";
import { ActionTypes } from "./action-types";

export interface IContactFormUpdate {
  type: ActionTypes.UPDATE_CONTACT_FORM;
  payload: React.ChangeEvent<HTMLFormElement>;
}

export interface IResetContactForm {
  type: ActionTypes.RESET_CONTACT_FORM;
}

export interface IPrefillContactForm {
  type: ActionTypes.PREFILL_CONTACT_FORM;
  payload: IContact;
}

export type Action =
  | IContactFormUpdate
  | IResetContactForm
  | IPrefillContactForm;
