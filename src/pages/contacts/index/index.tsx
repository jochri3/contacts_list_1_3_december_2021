import { useState, useEffect } from "react";
import IContact from "../../../interfaces/i-contacts";
import ContactsList from "../../../components/contacts/contacts-list/contacts-list";
import ContactAPI from "../../../config/api";
import { Outlet } from "react-router";

const Index: React.FC = () => {
  // Mise en place du type static
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [updateState, setUpdateState] = useState<number>(0); //force UI update
  // Mise en place du typage static
  async function fetchContacts(): Promise<IContact[]> {
    let contacts: IContact[] = [];
    try {
      const response = await ContactAPI.get<IContact[]>("/");
      contacts = response.data;
    } catch (error) {
      console.error(error);
    }
    return contacts;
  }

  async function deletContactById(id: string): Promise<void> {
    try {
      await ContactAPI.delete(`/${id}`);
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

export default Index;
