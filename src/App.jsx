import { useState } from "react";
import { GeneralSection, EducationSection, WorkSection } from "./Section";
import "./App.css";

function App() {
  const [formStatusList, setFormStatusList] = useState([]);

  function changeStatus(formId) {
    
  }

  return (
    <>
      <section id="center">
        <button>Publish</button>
        <GeneralSection></GeneralSection>
        <EducationSection></EducationSection>
        <WorkSection></WorkSection>
      </section>
      <section id="spacer"></section>
    </>
  );
}

export default App;
