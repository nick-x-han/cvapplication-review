import "./Section.css";
import { GeneralForm, WorkForm, EducationForm } from "./Forms";
import { useState, Fragment } from "react";

function GeneralSection({ onSubmit }) {
  const [formId] = useState(() => crypto.randomUUID());
  return (
    <section id={"general"} className="section">
      <h1>{"General Information"}</h1>
      <GeneralForm onSubmit={onSubmit} uuid={formId}></GeneralForm>
    </section>
  );
}

function EducationSection({ onSubmit }) {
  const [formsList, setFormsList] = useState(() => [crypto.randomUUID()]);

  function addForm() {
    let formId = crypto.randomUUID();
    setFormsList([...formsList, formId]);
  }

  function deleteForm(id) {
    setFormsList(formsList.filter((i) => id !== i));
  }

  return (
    <section id="education" className="section">
      <h1>{"Educational Experience"}</h1>
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

function WorkSection({ onSubmit }) {
  const [formsList, setFormsList] = useState(() => [crypto.randomUUID()]);

  function addForm() {
    let formId = crypto.randomUUID();
    setFormsList([...formsList, formId]);
  }

  function deleteForm(id) {
    setFormsList(formsList.filter((i) => id !== i));
  }

  return (
    <section id="work" className="section">
      <h1>{"Work Experience"}</h1>
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
