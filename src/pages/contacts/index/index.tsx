import { useState, useEffect } from "react";
import ContactsList from "../../../components/contacts/contacts-list";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../../state/contact/contact.action-creator";

const Index: React.FC = () => {
  const dispatch = useDispatch();
  // Mise en place du type static
  const contacts: any = useSelector<any>((state) => state.contact.contacts);
  const [updateState, setUpdateState] = useState<number>(0); //force UI update
  // Mise en place du typage static

  useEffect(() => {
    (async () => {
      dispatch(fetchContacts());
    })();
  }, [updateState]); //dependencie array to initate useEffect call

  const deleteContact = async (id: string) => {
    console.log("supprimer");
    // await deletContactById(id);
    setUpdateState(updateState + 1); //For for UI update
  };
  return (
    <>
      <h1>Liste des contacts</h1>
      <ContactsList contacts={contacts} deleteContact={deleteContact} />
    </>
  );
};

export default Index;
