import { useState } from "react";
import { Section, EducationSection, WorkSection } from "./Section";
import "./App.css";

function App() {

  return (
    <>
      <section id="center">
        <button>Publish</button>
        <Section id="general" title="General Information"></Section>
        <EducationSection></EducationSection>
        <WorkSection></WorkSection>
      </section>
      <section id="spacer"></section>
    </>
  );
}

export default App;
