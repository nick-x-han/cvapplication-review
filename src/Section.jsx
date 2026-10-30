import "./Section.css";
import { useState, useId } from "react";

function Section({ id, children }) {
  return <form id={id}>{children}</form>;
}



export { Section };
