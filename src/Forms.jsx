import { useState } from "react";
import { FormField, TextAreaInput, DateInput } from "./Inputs"

function validateForm(form) {
  const inputs = form.querySelectorAll("input, textarea, select");
  inputs.forEach((i) => i.setCustomValidity(""));
  if (form.checkValidity()) {
    return true;
  }
  const invalidInputs = form.querySelectorAll(
    ":is(input, textarea, select):invalid",
  );
  invalidInputs.forEach((i) => {
    if (i.validity.valueMissing)
      i.setCustomValidity("Please fill in all fields before submitting.");
  });
  form.reportValidity();
  return false;
}

function GeneralForm() {
  const [isEditing, setIsEditing] = useState(true);
  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (isEditing) {
          const form = e.currentTarget;
          const formStatus = validateForm(form);
          if (!formStatus) {
            return;
          }
        }
        setIsEditing(!isEditing);
      }}
    >
      <FormField name="Name" type="text" isEditing={isEditing}></FormField>
      <FormField name="Email" type="email" isEditing={isEditing}></FormField>
      <FormField
        name="Phone Number"
        type="tel"
        isEditing={isEditing}
      ></FormField>
      <button type="submit">{isEditing ? "Submit" : "Edit"}</button>
    </form>
  );
}

function EducationForm({ deleteForm, uuid }) {
  const [isEditing, setIsEditing] = useState(true);
  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (isEditing) {
          const form = e.currentTarget;
          const formStatus = validateForm(form);
          if (!formStatus) {
            return;
          }
        }
        setIsEditing(!isEditing);
      }}
    >
      <FormField
        name="School Name"
        type="text"
        isEditing={isEditing}
      ></FormField>
      <FormField
        name="Title of Study"
        type="text"
        isEditing={isEditing}
      ></FormField>
      <DateInput isEditing={isEditing}></DateInput>

      <button type="submit">{isEditing ? "Submit" : "Edit"}</button>
      <button onClick={() => deleteForm(uuid)} type="button">
        Delete
      </button>
    </form>
  );
}

function WorkForm({ deleteForm, uuid }) {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (isEditing) {
          const form = e.currentTarget;
          const formStatus = validateForm(form);
          if (!formStatus) {
            return;
          }
        }
        setIsEditing(!isEditing);
      }}
    >
      <FormField
        name="Company Name"
        type="text"
        isEditing={isEditing}
      ></FormField>
      <FormField
        name="Position Title"
        type="text"
        isEditing={isEditing}
      ></FormField>
      <TextAreaInput
        name="Main Responsibilities"
        isEditing={isEditing}
      ></TextAreaInput>
      <DateInput isEditing={isEditing}></DateInput>

      <button type="submit">{isEditing ? "Submit" : "Edit"}</button>
      <button onClick={() => deleteForm(uuid)} type="button">
        Delete
      </button>
    </form>
  );
}

export { GeneralForm, EducationForm, WorkForm }