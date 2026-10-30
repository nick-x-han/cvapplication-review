import { useState } from "react";
import { Section } from "./Section";
import { DateInput, FormField } from "./Inputs";
import "./App.css";

function App() {

  return (
    <>
      <section id="center">
        <Section id="general" title="General Information">
          <FormField name="Name" type="text"></FormField>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" />
        </Section>
        <Section id="education" title="Educational Experience">
          <label htmlFor="school">School Name</label>
          <input type="text" id="school" name="school" />
          <label htmlFor="title">Title of Study</label>
          <input type="text" id="title" name="title" />
          <DateInput></DateInput>
          <FormField name="dd" type="text"></FormField>
        </Section>
      </section>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
