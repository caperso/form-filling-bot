import fillForm from "./form-filling.js";

function validateUrl(wanted) {
  console.log("[FFB] Validating the address");
  return window.location.hostname.includes(wanted);
}

export function main() {
  const valid = validateUrl("csb.app");
  if (!valid) return;

  fillForm();
}
