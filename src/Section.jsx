import "./Section.css";
import { GeneralForm, WorkForm, EducationForm } from "./Forms";
import { useState, Fragment } from "react";

function GeneralSection({ onSubmit }) {
  const [formId] = useState(() => crypto.randomUUID());
  return (
    <section id={"general"} className="section">
      <h2>{"General Information"}</h2>
      <GeneralForm onSubmit={onSubmit} uuid={formId}></GeneralForm>
    </section>
  );
}

function EducationSection({ onSubmit, onDelete }) {
  const [formsList, setFormsList] = useState(() => [crypto.randomUUID()]);

  function addForm() {
    let formId = crypto.randomUUID();
    setFormsList([...formsList, formId]);
  }

  function deleteForm(id) {
    setFormsList(formsList.filter((i) => id !== i));
    onDelete("education", id);
  }

  return (
    <section id="education" className="section">
      <h2>{"Educational Experience"}</h2>
      <ul>
        {formsList.map((id, index) => {
          return (
            <Fragment key={id}>
              {index > 0 && <hr></hr>}
              <EducationForm
                deleteForm={deleteForm}
                uuid={id}
                onSubmit={onSubmit}
              ></EducationForm>
            </Fragment>
          );
        })}
      </ul>
      <button
        onClick={() => addForm()}
        type="button"
        className="add-form-button"
      >
        +
      </button>
    </section>
  );
}

function WorkSection({ onSubmit, onDelete }) {
  const [formsList, setFormsList] = useState(() => [crypto.randomUUID()]);

  function addForm() {
    let formId = crypto.randomUUID();
    setFormsList([...formsList, formId]);
  }

  function deleteForm(id) {
    setFormsList(formsList.filter((i) => id !== i));
    onDelete("work", id);
  }

  return (
    <section id="work" className="section">
      <h2>{"Work Experience"}</h2>
      <ul>
        {formsList.map((id, index) => {
          return (
            <Fragment key={id}>
              {index > 0 && <hr></hr>}
              <WorkForm
                deleteForm={deleteForm}
                uuid={id}
                onSubmit={onSubmit}
              ></WorkForm>
            </Fragment>
          );
        })}
      </ul>
      <button
        onClick={() => addForm()}
        type="button"
        className="add-form-button"
      >
        +
      </button>
    </section>
  );
}

export { GeneralSection, EducationSection, WorkSection };
