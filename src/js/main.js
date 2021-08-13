import subChannel from "./sub-channel.js";
import fillForm from "./form-filling.js";

export function main() {
  console.log("Hello you are welcome here");
  subChannel();

  window.addEventListener(
    "message",
    function (event) {
      if (event.source != window) return;

      if (event.data.type && event.data.type == "FILL_FORM") {
        const { message } = event.data;
        console.log(message);
        return fillForm();
      }
    },
    false
  );
}
