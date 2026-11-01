import "./Section.css";
import { GeneralForm, WorkForm, EducationForm } from "./Forms";
import { useState } from "react";

function GeneralSection() {
  return (
    <section id={"general"} className="section">
      <h1>{"General Information"}</h1>
      <GeneralForm></GeneralForm>
    </section>
  );
}

function EducationSection() {
  const [formsList, setFormsList] = useState([crypto.randomUUID()]);

  function addForm() {
    let formId = crypto.randomUUID();
    setFormsList([...formsList, formId]);
  }

  function deleteForm(id) {
    setFormsList(formsList.filter(i => id !== i));
  }

  return (
    <section id="education" className="section">
      <h1>{"Educational Experience"}</h1>
      <ul>
        {formsList.map((id) => {
          return <EducationForm key={id} deleteForm={deleteForm} uuid={id}></EducationForm>;
        })}
      </ul>
      <button onClick={() => addForm()} type="button" className="add-form-button">
        +
      </button>
    </section>
  );
}

function WorkSection() {
  const [formsList, setFormsList] = useState([crypto.randomUUID()]);

  function addForm() {
    let formId = crypto.randomUUID();
    setFormsList([...formsList, formId]);
  }

  function deleteForm(id) {
    setFormsList(formsList.filter(i => id !== i));
  }

  return (
    <section id="work" className="section">
      <h1>{"Work Experience"}</h1>
      <ul>
        {formsList.map((id) => {
          return <WorkForm key={id} deleteForm={deleteForm} uuid={id}></WorkForm>;
        })}
      </ul>
      <button onClick={() => addForm()} type="button" className="add-form-button">
        +
      </button>
    </section>
  );
}

export { GeneralSection, EducationSection, WorkSection };
