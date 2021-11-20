import IContact from "../../interfaces/i-contacts";

interface ContactsListProps {
  contacts: IContact[];
  deleteContact: (id: string) => void;
}

const ContactsList: React.FC<ContactsListProps> = (props) => {
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
        {props.contacts.map((contact, index) => (
          <tr key={contact.id}>
            <td>{contact.last_name}</td>
            <td>{contact.first_name}</td>
            <td>{contact.email}</td>
            <td>{contact.position}</td>
            <td>{contact.phone_number}</td>
            <td>
              <button onClick={() => props.deleteContact(contact.id)}>
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactsList;
