import { RootState } from "../root.reducer";

export class ContactFormState {
  static getFormData = (state: RootState) => state.form;
}
