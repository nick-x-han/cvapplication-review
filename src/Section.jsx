import "./Section.css";
import { FormField, FormSection, DateInput } from "./Inputs";
import { useState, useId } from "react";

function Section({ id, title, addable = true, children }) {
  const [formsList, setFormsList] = useState([]);

  return (
    <section id={id}>
      <h1>{title}</h1>
      <ul>
        
        <form>{children}</form>
      </ul>

      {addable && (
        <button onClick={() => {return;}} type="button">
          +
        </button>
      )}
    </section>
  );
}



export { Section, FormField };
