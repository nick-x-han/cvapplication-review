import { useState } from "react";
import { GeneralSection, EducationSection, WorkSection } from "./Section";
import "./App.css";

function App() {
  const [formStatusList, setFormStatusList] = useState([]);
  const [data, setData] = useState({});

  function changeStatus(formId) {
    
  }

  function editData(id, value) {

  }

  return (
    <>
      <section id="center">
        <button>Publish</button>
        <GeneralSection onSubmit={editData}></GeneralSection>
        <EducationSection onSubmit={editData}></EducationSection>
        <WorkSection onSubmit={editData}></WorkSection>
      </section>
      <section id="spacer"></section>
    </>
  );
}

export default App;
