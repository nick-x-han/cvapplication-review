import "./Section.css";
import { useState, useId } from "react";

function Section({ id, title, children }) {
  return (
    <section>
      <h1>{title}</h1>
      <form id={id}>{children}</form>
    </section>
  );
}

function FormSection({ children }) {
  //for separating e.g. diff schools
}

function FormField({ name, type='text' }) {
  const [fieldValue, setFieldValue] = useState("");
  const [editMode, setEditMode] = useState(true);
  const id = useId();


  return (
    <div className="field">
      <label htmlFor={id}>{name}</label>
      {editMode ? (
        <div>
          <input
            type={type}
            id={id}
            name={name}
            onChange={(e) => setFieldValue(e.target.value)}
            onBlur={() => setEditMode(false)}
            value={fieldValue}
          />
        </div>
      ) : (
        <div onClick={() => setEditMode(true)}>{fieldValue}</div>
      )}
    </div>
  );
}

export { Section, FormField };
