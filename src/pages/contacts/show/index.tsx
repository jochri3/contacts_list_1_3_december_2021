import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContactAPI from "../../../config/api";
import IContact from "../../../interfaces/i-contacts";

type paramType = "id";

const Show = () => {
  const params = useParams<paramType>();
  const [contact, setContact] = useState<IContact>({} as IContact);

  async function fetchContactsById(id: string): Promise<IContact> {
    let contact: IContact = {} as IContact;
    try {
      const response = await ContactAPI.get<IContact>(`/${id}`);
      contact = response.data;
    } catch (error) {
      console.error(error);
    }
    return contact;
  }

  useEffect(() => {
    (async () => {
      const contacts = await fetchContactsById(params.id as string).then(
        (data) => data
      );
      setContact(contacts);
    })();
  }, []); //dependencie array to initate useEffect call

  return (
    <>
      <h1>Détails de contact</h1>
      {contact && (
        <>
          <h2>
            {contact.first_name} {contact.last_name}
          </h2>
          <h3>{contact.position}</h3>
          <p>
            Email : <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>
            Téléphone :{" "}
            <a href={`tel:${contact.phone_number}`}>{contact.phone_number}</a>
          </p>
          <p>Adresse : {contact.work_address}</p>
        </>
      )}
    </>
  );
};

export default Show;
