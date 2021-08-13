console.log("Form Filling Bot Extension Loaded", this);

async function loadMain() {
  const url = chrome.runtime.getURL("src/js/main.js");
  const mainScript = await import(url);
  console.log(mainScript);
  mainScript.main();
}

loadMain();
