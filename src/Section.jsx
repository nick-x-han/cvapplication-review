import "./Section.css";
import { useState, useId } from "react";

function Section({ id, children }) {
  return <section id={id}>{children}</section>;
}



export { Section };
