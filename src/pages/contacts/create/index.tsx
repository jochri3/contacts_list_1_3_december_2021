import Form from "../../../components/contacts/contact-form";
import FormWrapper from "../../../components/contacts/contact-form/wrapper";
import { useActions } from "../../../hooks/use-actions";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { ContactFormState } from "../../../state/contact-form/selectors";

const CreateContact: React.FC = () => {
  const formData = useTypedSelector(ContactFormState.getFormData);
  const { createContact } = useActions();
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createContact(formData);
  };

  return (
    <FormWrapper>
      <h1 className="title">Créer un nouveau contact</h1>
      <Form contact={formData} buttonLabel={"Créer"} submitForm={submitForm} />
    </FormWrapper>
  );
};

export default CreateContact;
