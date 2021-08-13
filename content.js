console.log("Form Filling Bot Extension Loaded");

async function loadMain() {
  const url = chrome.runtime.getURL("src/js/main.js");
  const mainScript = await import(url);
  mainScript.main();
}

loadMain();
