import "./Section.css";
import { GeneralForm, WorkForm, EducationForm } from "./Forms";
import { useState, useId } from "react";

function GeneralSection() {
  return (
    <section id={"general"}>
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
    <section id="education">
      <h1>{"Educational Experience"}</h1>
      <ul>
        {formsList.map((id) => {
          return <EducationForm key={id} deleteForm={deleteForm} uuid={id}></EducationForm>;
        })}
      </ul>
      <button onClick={() => addForm()} type="button">
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
    <section id="work">
      <h1>{"Work Experience"}</h1>
      <ul>
        {formsList.map((id) => {
          return <WorkForm key={id} deleteForm={deleteForm} uuid={id}></WorkForm>;
        })}
      </ul>
      <button onClick={() => addForm()} type="button">
        +
      </button>
    </section>
  );
}

export { GeneralSection, EducationSection, WorkSection };
