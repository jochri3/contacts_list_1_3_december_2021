import { useState, useEffect } from "react";
import axios from "axios";
import IContact from "../interfaces/i-contacts";
import ContactsList from "./contacts/contacts-list";

const App: React.FC = () => {
  // Mise en place du type static
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [updateState, setUpdateState] = useState<number>(0); //force UI update
  // Mise en place du typage static
  async function fetchContacts(): Promise<IContact[]> {
    let contacts: IContact[] = [];
    try {
      contacts = await axios
        .get<IContact[]>("http://localhost:3333/contacts")
        .then((res) => res.data);
    } catch (error) {
      console.error(error);
    }
    return contacts;
  }

  async function deletContactById(id: string): Promise<void> {
    try {
      await axios.delete(`http://localhost:3333/contacts/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    (async () => {
      const contacts = await fetchContacts().then((data) => data);
      setContacts(contacts);
    })();
  }, [updateState]); //dependencie array to initate useEffect call

  const deleteContact = async (id: string) => {
    await deletContactById(id);
    setUpdateState(updateState + 1); //For for UI update
  };
  return <ContactsList contacts={contacts} deleteContact={deleteContact} />;
};

export default App;
