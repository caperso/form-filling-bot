export default function removeBrowsingData(origins, cb) {
  chrome.browsingData.remove(
    {
      origins,
    },
    {
      cacheStorage: false,
      cookies: true,
      fileSystems: false,
      indexedDB: false,
      localStorage: true,
      serviceWorkers: false,
      webSQL: false,
    },
    cb
  );
}
