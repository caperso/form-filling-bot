chrome.runtime.onInstalled.addListener(function () {
  // popup welcome website
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      // set rules: when to show to action page, when to run something
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostContains: "csb" },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});


// connect the server

// push the notification

// communicate the web via postMessage 

// onUninstall:  popup feedback website

// better offline experience
