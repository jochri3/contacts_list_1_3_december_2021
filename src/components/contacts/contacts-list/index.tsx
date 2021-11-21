import IContact from "../../../interfaces/i-contacts";
import ContactItem from "../contact-item";
import "./style.scss";

interface ContactsListProps {
  contacts: IContact[];
  deleteContact: (id: string) => void;
}

const ContactsList: React.FC<ContactsListProps> = ({
  contacts,
  deleteContact,
}) => {
  //   const { contacts, ...others } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
          <th>Poste</th>
          <th>Numéro de téléphone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* Expliquer code ES6 */}
        {contacts.map((contact) => (
          <ContactItem
            deleteContact={deleteContact}
            contact={contact}
            key={contact.id}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ContactsList;
