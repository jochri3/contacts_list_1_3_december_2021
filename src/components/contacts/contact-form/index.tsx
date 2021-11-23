import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useActions } from "../../../hooks/use-actions";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { IContact } from "../../../interfaces/i-contacts";
import InputField from "../../shared/input-field/";
import "./style.scss";

interface FormProps {
  contact: IContact;
  submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonLabel: string;
}

const Form: React.FC<FormProps> = ({ contact, submitForm, buttonLabel }) => {
  let navigate = useNavigate();
  const { updateContactForm } = useActions();
  const handleFormInput = (e: React.ChangeEvent<HTMLFormElement>): void => {
    updateContactForm(e);
  };
  const { createdOrUpdated } = useTypedSelector((state) => state.contact);
  useEffect(() => {
    if(createdOrUpdated){
        navigate("/contacts");
    }
  }, [createdOrUpdated]);
  return (
    <div className="form-wrapper">
      <form onSubmit={submitForm} onChange={handleFormInput} action="">
        <InputField
          label="Prénom"
          id="first_name"
          type="text"
          name="first_name"
          value={contact.first_name}
          required
        />
        <InputField
          label="Nom"
          id="last_name"
          type="text"
          name="last_name"
          value={contact.last_name}
          required
        />
        <InputField
          label="Email"
          id="email"
          type="text"
          name="email"
          value={contact.email}
          required
        />
        <InputField
          label="Numéro de contact"
          id="telephone"
          type="text"
          name="phone_number"
          value={contact.phone_number}
          required
        />
        <InputField
          label="Poste"
          id="position"
          type="text"
          name="position"
          value={contact.position}
          required
        />
        <InputField
          label="Adresse"
          id="address"
          type="text"
          name="work_address"
          value={contact.work_address}
          required
        />

        <br />
        <button className="btn btn-create" type="submit">
          {buttonLabel}
        </button>
      </form>
    </div>
  );
};

export default Form;
