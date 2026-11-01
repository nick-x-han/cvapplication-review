import { useState } from "react";
import { FormField, TextAreaInput, DateInput } from "./Inputs";
import "../styles/Forms.css";

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

function GeneralForm({ onSubmit, uuid }) {
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
          let data = new FormData(form);
          data = Object.fromEntries(data);
          onSubmit("general", [uuid, data]);
        }
        setIsEditing(!isEditing);
      }}
      data-editing={isEditing}
    >
      <FormField name="Name" type="text" isEditing={isEditing}></FormField>
      <FormField name="Email" type="email" isEditing={isEditing}></FormField>
      <FormField
        name="Phone Number"
        type="tel"
        isEditing={isEditing}
      ></FormField>
      <button type="submit" className="submit-button">
        {isEditing ? "Submit" : "Edit"}
      </button>
    </form>
  );
}

function EducationForm({ deleteForm, uuid, onSubmit }) {
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
          let data = new FormData(form);
          data = Object.fromEntries(data);
          onSubmit("education", [uuid, data]);
        }
        setIsEditing(!isEditing);
      }}
      data-editing={isEditing}
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

      <div className="horizontal">
        <button type="submit" className="submit-button">
          {isEditing ? "Submit" : "Edit"}
        </button>
        <button
          onClick={() => deleteForm(uuid)}
          type="button"
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </form>
  );
}

function WorkForm({ deleteForm, uuid, onSubmit }) {
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
          let data = new FormData(form);
          data = Object.fromEntries(data);
          onSubmit("work", [uuid, data]);
        }
        setIsEditing(!isEditing);
      }}
      data-editing={isEditing}
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

      <div className="horizontal">
        <button type="submit" className="submit-button">
          {isEditing ? "Submit" : "Edit"}
        </button>
        <button
          onClick={() => deleteForm(uuid)}
          type="button"
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </form>
  );
}

export { GeneralForm, EducationForm, WorkForm };
