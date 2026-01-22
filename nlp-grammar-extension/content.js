import { detectErrors } from "./nlp.js";

document.addEventListener("input", (event) => {
  const target = event.target;

  if (target.tagName === "TEXTAREA" || target.tagName === "INPUT") {
    const text = target.value;
    const errors = detectErrors(text);

    target.style.border = errors.length > 0 ? "2px solid red" : "2px solid green";
    target.title = errors.map(e => e.message + " → " + e.suggestion).join("\n");
  }
});import { detectErrors } from "./nlp.js";

document.addEventListener("input", (event) => {
  const target = event.target;

  if (target.tagName === "TEXTAREA" || target.tagName === "INPUT") {
    const text = target.value;
    const errors = detectErrors(text);

    target.style.border = errors.length > 0 ? "2px solid red" : "2px solid green";
    target.title = errors.map(e => e.message + " → " + e.suggestion).join("\n");
  }
});import { detectErrors } from "./nlp.js";

document.addEventListener("input", (event) => {
  const target = event.target;

  if (target.tagName === "TEXTAREA" || target.tagName === "INPUT") {
    const text = target.value;
    const errors = detectErrors(text);

    target.style.border = errors.length > 0 ? "2px solid red" : "2px solid green";
    target.title = errors.map(e => e.message + " 	 " + e.suggestion).join("\n");
  }
});
