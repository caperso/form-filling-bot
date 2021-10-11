import fillForm from "./form-filling.js";

function validateUrl(expected) {
  return window.location.hostname.includes(expected);
}

function validateAddress() {
  if (window.location.hostname.match("cheaptickets")) {
    setTimeout(() => {
      console.log("[DevBot] Validating the address");
      const result = window["__APP_DATA__"] ? "Origami" : "RWD";
      console.log("[DevBot] It's ", result);
    }, 2000);
  }
}

function removeTheCookie() {
  // document.cookie.
  // console.log("[DevBot] It's ",  ? "Origami" : "RWD");
}

function pageLoadedListener(tabId, changeInfo, tab) {
  if (changeInfo.status == "complete" && tab.active) {
    // do your things
  }
}

export function main() {
  validateAddress();

  chrome.tabs.onUpdated.addListener(pageLoadedListener);

  const valid = validateUrl("csb.app");
  if (!valid) return;

  fillForm();
}
