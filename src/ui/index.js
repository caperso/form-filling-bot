const button = document.getElementById("fill-button");

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

button.addEventListener("click", async () => {
  const tab = await getCurrentTab();

  console.log(tab);

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      window.postMessage(
        {
          type: "FILL_FORM",
        },
        "*"
      );
    },
  });
});
