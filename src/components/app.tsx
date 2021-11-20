import React from "react";
import axios from "axios";
import IContact from "../interfaces/i-contacts";
import ContactsList from "./contacts/contacts-list";

const App: React.FC = () => {
  // Mise en place du type static
  const [contacts, setContacts] = React.useState<IContact[]>([]);

  // Mise en place du typage static
  async function fetchContacts() {
    const contacts = await axios
      .get<IContact[]>("http://localhost:3333/contacts")
      .then((res) => res.data);
    return contacts;
  }

  React.useEffect(() => {
    (async () => {
      const contacts = await fetchContacts().then((data) => data);
      setContacts(contacts);
    })();
  }, []);

  const deleteContact = (id: string) => {
    const newState = [...contacts]; //Creating new array from existing copy
    const index = newState.findIndex((contact) => contact.id === id);
    newState.splice(index, 1);
    setContacts(newState);
  };
  return <ContactsList contacts={contacts} deleteContact={deleteContact} />;
};

export default App;
