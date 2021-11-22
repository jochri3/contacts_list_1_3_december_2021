import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactById } from "../../../state/contact/contact.action-creator";
import "./style.scss";

type paramType = "id";

const Show = () => {
  const dispatch = useDispatch();
  const params = useParams<paramType>();

  const { contact }: any = useSelector<any>((state) => state.contact);

  useEffect(() => {
    dispatch(fetchContactById(params.id as string));
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
