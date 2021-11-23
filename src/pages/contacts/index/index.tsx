import { useEffect } from "react";
import ContactsList from "../../../components/contacts/contacts-list";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { useActions } from "../../../hooks/use-actions";
import { ContactSelectors } from "../../../state/contact/contact.selectors";

const Index: React.FC = () => {
  const contacts = useTypedSelector(ContactSelectors.getContacts);
  const { fetchContacts, removeContact, resetContactForm } = useActions();
  useEffect(() => {
    (async () => {
      resetContactForm();
      fetchContacts();
    })();
  }, []);

  const deleteContact = async (id: string) => {
    removeContact(id);
  };
  return (
    <>
      <h1>Liste des contacts</h1>
      <ContactsList contacts={contacts} deleteContact={deleteContact} />
    </>
  );
};

export default Index;
