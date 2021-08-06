// chrome.runtime.onInstalled.addListener(service);

// const rule = {
//   condition: [
//     new chrome.declarativeContent.PageStateMatcher({
//       pageUrl: { hostContains: "localhost" },
//     }),
//   ],
//   action: [new chrome.declarativeContent.showPageAction()],
// };

// function service() {
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
//     chrome.declarativeContent.onPageChanged.addRules([rule]);
//   });
// }
function reddenPage() {
  document.body.style.backgroundColor = "red";
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: reddenPage,
  });
});
