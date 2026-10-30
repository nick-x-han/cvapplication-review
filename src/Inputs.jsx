import { useState, useId } from "react";
import "./Inputs.css";

function DateInput() {
  const [untilNow, setUntilNow] = useState(false);
  const [untilNowDate, setUntilNowDate] = useState();
  const dateFromId = useId();
  const dateUntilId = useId();
  const checkboxId = useId();
  const dateUntilHTML = (
    <div className="field">
      <label htmlFor={dateUntilId}>Date Until </label>
      <input
        type="date"
        id={dateUntilId}
        name="dateUntil"
        value={untilNowDate}
        onChange={onSetUntilNow}
      />
    </div>
  );

  function onToggle() {
    setUntilNow(!untilNow);
  }

  function onSetUntilNow(e) {
    setUntilNowDate(e.target.value);
  }

  return (
    <>
      <div className="date-input">
        <div className="field">
          <label htmlFor={dateFromId}>Date From </label>
          <input type="date" id={dateFromId} name="dateFrom" />
        </div>
        <div className="checkboxSide">
          <label htmlFor={checkboxId}>Until Now?</label>
          <input
            type="checkbox"
            id={checkboxId}
            name="untilNow"
            onChange={onToggle}
          />
        </div>
      </div>
      {!untilNow && dateUntilHTML}
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
          />
        </>
      ) : (
        <div>
          {name} {fieldValue}
        </div>
      )}
    </div>
  );
}

function GeneralForm() {
  const [isEditing, setIsEditing] = useState(true);
  return (
    <form>
      <FormField name="Name" type="text" isEditing={isEditing}></FormField>
      <FormField name="Email" type="email" isEditing={isEditing}></FormField>
      <FormField
        name="Phone Number"
        type="tel"
        isEditing={isEditing}
      ></FormField>
      <button onClick={() => setIsEditing(!isEditing)} type="button">
        {isEditing ? "Submit" : "Edit"}
      </button>
    </form>
  );
}

function EducationForm({ deleteForm, uuid }) {
  const [isEditing, setIsEditing] = useState(true);
  return (
    <form>
      <FormField name="School Name" type="text" isEditing={isEditing}></FormField>
      <FormField name="Title of Study" type="text" isEditing={isEditing}></FormField>
      <DateInput></DateInput>
      
      <button onClick={() => setIsEditing(!isEditing)} type="button">
        {isEditing ? "Submit" : "Edit"}
      </button>
      <button onClick={() => deleteForm(uuid)} type="button">
        Delete
      </button>
    </form>
  );
}

function WorkForm({ deleteForm, uuid }) {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <form>
      <FormField name="Company Name" type="text" isEditing={isEditing}></FormField>
      <FormField name="Position Title" type="text" isEditing={isEditing}></FormField>
      <TextAreaInput
        name="Main Responsibilities"
        isEditing={isEditing}
      ></TextAreaInput>
      <DateInput></DateInput>

      <button onClick={() => setIsEditing(!isEditing)} type="button">
        {isEditing ? "Submit" : "Edit"}
      </button>
      <button onClick={() => deleteForm(uuid)} type="button">
        Delete
      </button>
    </form>
  );
}

export { DateInput, GeneralForm, EducationForm, WorkForm };
