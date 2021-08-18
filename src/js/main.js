import subChannel from "./sub-channel.js";
import fillForm from "./form-filling.js";

export function main() {
  subChannel();

  window.addEventListener(
    "message",
    function (event) {
      if (event.source != window) return;

      if (event.data.type && event.data.type == "FILL_FORM") {
        return fillForm();
      }
    },
    false
  );
}
