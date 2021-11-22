import { useEffect } from "react";
import ContactsList from "../../../components/contacts/contacts-list";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { useActions } from "../../../hooks/use-actions";

const Index: React.FC = () => {
  const { contacts } = useTypedSelector((state) => state.contact);
  const { fetchContacts, removeContact } = useActions();
  useEffect(() => {
    (async () => {
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
