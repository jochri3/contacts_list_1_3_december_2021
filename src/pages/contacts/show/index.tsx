import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { useActions } from "../../../hooks/use-actions";

type paramType = "id";

const Show = () => {
  const params = useParams<paramType>();
  const { fetchContactById } = useActions();
  const { contact } = useTypedSelector((state) => state.contact);

  useEffect(() => {
    fetchContactById(params.id as string);
  }, []);

  return (
    <>
      <h1>Détails de contact</h1>
      {contact && (
        <>
          <h2>
            {contact.first_name} {contact.last_name}
          </h2>
          <h3>{contact.position}</h3>
          <p className="text">
            Email : <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p className="text">
            Téléphone :{" "}
            <a href={`tel:${contact.phone_number}`}>{contact.phone_number}</a>
          </p>
          <p className="text">Adresse : {contact.work_address}</p>
        </>
      )}
    </>
  );
};

export default Show;
