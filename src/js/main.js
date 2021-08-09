import fillForm from "./helpers/fillForm.js";
import getElementOutline from "./helpers/getElementOutline.js";
import isOrigami from "./helpers/isOrigami.js";

function validateUrl(expected) {
  if (expected === "*") {
    return true;
  }
  return window.location.hostname.includes(expected);
}

export function main() {
  const demoValid = validateUrl("csb.app");
  if (demoValid) {
    getElementOutline();
    fillForm();
  }

  const toolValidation = validateUrl("*");
  if (toolValidation) {
    isOrigami(["cheaptickets", "travix", "localhost"]);
  }
}
