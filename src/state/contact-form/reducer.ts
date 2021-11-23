import { ActionTypes } from "./action-types";
import { IContact } from "../../interfaces/i-contacts";
import { Action } from "./actions";

const initialState: IContact = {
  id: "",
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  position: "",
  work_address: "",
};

export const formReducer = (
  state: IContact = initialState,
  action: Action
): IContact => {
  switch (action.type) {
    case ActionTypes.UPDATE_CONTACT_FORM:
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      };
    case ActionTypes.RESET_CONTACT_FORM:
      return initialState;
    case ActionTypes.PREFILL_CONTACT_FORM:
      const {
        id,
        first_name,
        last_name,
        phone_number,
        position,
        work_address,
        email
      } = action.payload;
      return {
        id,
        first_name,
        last_name,
        phone_number,
        position,
        work_address,
        email
      };
    default:
      return state;
  }
};
