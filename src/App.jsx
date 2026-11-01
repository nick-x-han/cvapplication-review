import { useState } from "react";
import { GeneralSection, EducationSection, WorkSection } from "./Section";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  function editData(sectionType, idValue) {
    const formId = idValue[0];
    const formData = idValue[1];
    setData((prev) => ({
      ...prev,
      [sectionType]: {
        ...prev[sectionType],
        [formId]: formData,
      },
    }));
  }

  function onPublish() {
    console.log(data);
    let popover = document.querySelector("#mypopover");
    popover.togglePopover();
    setTimeout(() => popover.togglePopover(), 3000);
  }

  return (
    <>
      <div id="mypopover" className="notification" popover="auto">
        Data logged
      </div>
      <section id="center">
        <button onClick={onPublish}>Publish</button>
        <GeneralSection onSubmit={editData}></GeneralSection>
        <EducationSection onSubmit={editData}></EducationSection>
        <WorkSection onSubmit={editData}></WorkSection>
      </section>
      <section id="spacer"></section>
    </>
  );
}

export default App;
