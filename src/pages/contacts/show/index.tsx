import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.scss";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { useActions } from "../../../hooks/use-actions";
import { ContactSelectors } from "../../../state/contact/contact.selectors";

type paramType = "id";

const Show = () => {
  const params = useParams<paramType>();
  const { fetchContactById, resetContactForm } = useActions();
  const contact = useTypedSelector(ContactSelectors.getContact);

  useEffect(() => {
    resetContactForm();
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
          <Link to={`/contact/${contact.id}/edit`}>Modifer</Link>
        </>
      )}
    </>
  );
};

export default Show;
