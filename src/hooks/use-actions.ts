import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { updateContactForm } from "../state/contact-form/action-creators";
import {
  fetchContacts,
  fetchContactById,
  removeContact,
  createContact,
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
    },
    dispatch
  );
};
