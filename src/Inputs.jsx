import { useState, useId } from "react";
import "./Inputs.css";

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

function DateInput({ isEditing }) {
  const [isUntilNow, setIsUntilNow] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [untilNowDate, setUntilNowDate] = useState("");
  const dateFromId = useId();
  const dateUntilId = useId();
  const checkboxId = useId();
  const today = new Date().toLocaleDateString("en-CA");
  const dateUntilHTML = (
    <div className="field">
      <label htmlFor={dateUntilId}>Date Until </label>
      <input
        type="date"
        id={dateUntilId}
        name="dateUntil"
        value={untilNowDate}
        onChange={onSetUntilNowDate}
        min={fromDate}
        max={today}
        required
      />
    </div>
  );

  function onToggleUntilNow() {
    setIsUntilNow(!isUntilNow);
  }

  function onSetUntilNowDate(e) {
    setUntilNowDate(e.target.value);
  }

  function onSetFromDate(e) {
    setFromDate(e.target.value);
  }

  return (
    <>
      <div className="date-input">
        <div className="field">
          <label htmlFor={dateFromId}>Date From </label>
          <input
            type="date"
            id={dateFromId}
            name="dateFrom"
            value={fromDate}
            onChange={onSetFromDate}
            required
          />
        </div>
        <div className="checkboxSide">
          <label htmlFor={checkboxId}>Until Now?</label>
          <input
            type="checkbox"
            id={checkboxId}
            name="untilNow"
            onChange={onToggleUntilNow}
          />
        </div>
      </div>
      {!isUntilNow && dateUntilHTML}
    </>
  );
}

function TextAreaInput({ name, isEditing }) {
  const [text, setText] = useState("");
  const id = useId();
  return (
    <>
      {isEditing ? (
        <>
          <label htmlFor={id}>{name}</label>
          <textarea
            id={id}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </>
      ) : (
        <p>
          {name} {text}
        </p>
      )}
    </>
  );
}
function FormField({ name, type = "text", isEditing = true }) {
  const [fieldValue, setFieldValue] = useState("");
  const id = useId();

  return (
    <div className="field">
      {isEditing ? (
        <>
          <label htmlFor={id}>{name} </label>
          <input
            type={type}
            id={id}
            name={name}
            onChange={(e) => setFieldValue(e.target.value)}
            value={fieldValue}
            required
          />
        </>
      ) : (
        <div>
          {name}: <span className="field-value">{fieldValue}</span>
        </div>
      )}
    </div>
  );
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

export { DateInput, GeneralForm, EducationForm, WorkForm };
