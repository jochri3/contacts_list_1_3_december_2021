import { useEffect } from "react";
import ContactsList from "../../../components/contacts/contacts-list";
import { useDispatch } from "react-redux";
import {
  fetchContacts,
  removeContact,
} from "../../../state/contact/contact.action-creator";
import { useTypedSelector } from "../../../hooks/use-typed-selector";

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const { contacts } = useTypedSelector((state) => state.contact);
  useEffect(() => {
    (async () => {
      dispatch(fetchContacts());
    })();
  }, []);

  const deleteContact = async (id: string) => {
    dispatch(removeContact(id));
  };
  return (
    <>
      <h1>Liste des contacts</h1>
      <ContactsList contacts={contacts} deleteContact={deleteContact} />
    </>
  );
};

export default Index;
