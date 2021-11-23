import { useEffect } from "react";
import { useParams } from "react-router";
import Form from "../../../components/contacts/contact-form";
import FormWrapper from "../../../components/contacts/contact-form/wrapper";
import { useActions } from "../../../hooks/use-actions";
import { useTypedSelector } from "../../../hooks/use-typed-selector";

type paramType = "id";

const CreateContact: React.FC = () => {
  const { form: formData } = useTypedSelector((state) => state);
  const { createContact, prefillForm } = useActions();
  const params = useParams<paramType>();
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createContact(formData);
  };

  useEffect(() => {
    prefillForm(params.id as string);
  }, []);

  return (
    <FormWrapper>
      <h1 className="title">Mettre à jour</h1>
      <Form
        contact={formData}
        buttonLabel={"Mettre à jour"}
        submitForm={submitForm}
      />
    </FormWrapper>
  );
};

export default CreateContact;
