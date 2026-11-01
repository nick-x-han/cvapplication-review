import { useState, useId } from "react";
import "./Inputs.css";

function DateInput({ isEditing }) {
  const [isUntilNow, setIsUntilNow] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [untilDate, setUntilDate] = useState("");
  const dateFromId = useId();
  const dateUntilId = useId();
  const checkboxId = useId();
  const now = new Date().toLocaleDateString("en-CA");

  function onToggleUntilNow() {
    setIsUntilNow(!isUntilNow);
  }

  function onSetUntilNowDate(e) {
    setUntilDate(e.target.value);
  }

  function onSetFromDate(e) {
    setFromDate(e.target.value);
  }

  if (isEditing) {
    return (
      <>
        <div className="field">
          <label htmlFor={dateFromId}>Date From: </label>
          <input
            type="date"
            id={dateFromId}
            name="dateFrom"
            value={fromDate}
            onChange={onSetFromDate}
            max={now}
            required
          />
        </div>

        <div className="field">
          <label htmlFor={dateUntilId}>Date Until: </label>
          <input
            type="date"
            id={dateUntilId}
            name="dateUntil"
            value={isUntilNow ? now : untilDate}
            onChange={onSetUntilNowDate}
            min={fromDate}
            max={now}
            disabled={isUntilNow}
            required
          />
        </div>

        <div className="checkbox">
          <label htmlFor={checkboxId}>Until Now?</label>
          <input
            type="checkbox"
            id={checkboxId}
            name="untilNow"
            onChange={onToggleUntilNow}
            checked={isUntilNow}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="field">
          <span>Date From:</span>
          <span>{fromDate}</span>
        </div>
        <div className="field">
          <span>Date Until:</span>
          <span>{isUntilNow ? "Present" : untilDate}</span>
        </div>
      </>
    );
  }
}

function TextAreaInput({ name, isEditing }) {
  const [text, setText] = useState("");
  const id = useId();
  return (
    <div className="field">
      {isEditing ? (
        <>
          <label htmlFor={id}>{name}:</label>
          <textarea
            id={id}
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
        </>
      ) : (
        <>
          <span>{name}:</span> <span>{text}</span>
        </>
      )}
    </div>
  );
}
function FormField({ name, type = "text", isEditing = true }) {
  const [fieldValue, setFieldValue] = useState("");
  const id = useId();

  return (
    <div className="field">
      {isEditing ? (
        <>
          <label htmlFor={id}>{name}: </label>
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
        <>
          <span>{name}:</span> <span className="field-value">{fieldValue}</span>
        </>
      )}
    </div>
  );
}

export { DateInput, TextAreaInput, FormField };
