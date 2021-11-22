import { useEffect } from "react";
import ContactsList from "../../../components/contacts/contacts-list";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContacts,
  removeContact,
} from "../../../state/contact/contact.action-creator";

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const { contacts, update }: any = useSelector<any>((state) => state.contact);
  // Mise en place du typage static

  useEffect(() => {
    (async () => {
      dispatch(fetchContacts());
    })();
  }, [update]);

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
