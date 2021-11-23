import { RootState } from "../root.reducer";

export class ContactSelectors {
  static getContacts = (state: RootState) => state.contact.contacts;
  static getContact = (state: RootState) => state.contact.contact;
}
