import { Link } from "react-router-dom";
import { IContact } from "../../../interfaces/i-contacts";

interface ContactItemProps {
  contact: IContact;
  deleteContact: (id: string) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({
  contact: { id, first_name, last_name, email, phone_number, position },
  deleteContact,
}) => {
  return (
    <tr key={id}>
      <td>{last_name}</td>
      <td>{first_name}</td>
      <td>{email}</td>
      <td>{position}</td>
      <td>{phone_number}</td>
      <td>
        <Link to={`/contact/${id}`}>Voir</Link>
        <button onClick={() => deleteContact(id)}>Supprimer</button>
      </td>
    </tr>
  );
};

export default ContactItem;
