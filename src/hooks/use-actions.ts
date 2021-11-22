import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchContacts,
  fetchContactById,
  removeContact,
} from "../state/contact/contact.action-creator";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    { fetchContacts, fetchContactById, removeContact },
    dispatch
  );
};
