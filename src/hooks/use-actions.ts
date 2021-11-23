import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  prefillForm,
  updateContactForm,
  resetContactForm,
} from "../state/contact-form/action-creators";
import {
  fetchContacts,
  fetchContactById,
  removeContact,
  createContact,updateContact
} from "../state/contact/contact.action-creator";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      fetchContacts,
      fetchContactById,
      removeContact,
      updateContactForm,
      createContact,
      prefillForm,
      resetContactForm,
      updateContact,
    },
    dispatch
  );
};
