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

  function deleteData(sectionType, id) {
    setData((prev) => {
      const removedData = { ...prev[sectionType] };
      delete removedData[id];
      return {
        ...prev,
        [sectionType]: removedData,
      };
    });
  }

  function validateForms() {
    let forms = document.querySelectorAll("form[data-editing]");
    forms = Array.from(forms);
    return !forms.some((form) => form.dataset["editing"] === "true");
  }

  function onPublish() {
    let popover = document.querySelector("#mypopover");
    if (validateForms()) {
      console.log(data);
      popover.textContent = "Data logged";
    } else {
      popover.textContent = "All forms must be submitted";
    }
    popover.showPopover();
    setTimeout(() => popover.hidePopover(), 3000);
  }

  return (
    <>
      <div id="mypopover" className="notification" popover="auto">
        Data logged
      </div>
      <section id="center">
        <button onClick={onPublish}>Publish</button>
        <GeneralSection onSubmit={editData}></GeneralSection>
        <EducationSection
          onSubmit={editData}
          onDelete={deleteData}
        ></EducationSection>
        <WorkSection onSubmit={editData} onDelete={deleteData}></WorkSection>
      </section>
      <section id="spacer"></section>
    </>
  );
}

export default App;
