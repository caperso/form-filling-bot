import clearCookies from "../js/helpers/clearCookies.js";
import removeBrowsingData from "../js/helpers/removeBrowsingData.js";

const fillFormButton = document.getElementById("fill-button");
const cookieClearButton = document.getElementById("cookie-clearer-button");
const dataClearButton = document.getElementById("data-clearer-button");
const weatherBanner = document.getElementById("weather-banner");

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

async function getUrl() {
  const tab = await getCurrentTab();
  return new URL(tab.url);
}

async function getWeather() {
  try {
    const result = await fetch(
      "https://v0.yiketianqi.com/api?unescape=1&version=v61&appid=45953486&appsecret=S9xWt1iX"
    );
    const data = JSON.parse(await result.text());
    const { cityEn, update_time, humidity, visibility, tem } = data;
    const tip = `Hi, ${cityEn} at ${update_time}, the temperature is ${tem} ℃, humidity is about ${humidity}, visibility is about ${visibility}`;
    return tip;
  } catch (e) {
    console.error(e);
  }
}

async function setWeatherBanner() {
  const tip = await getWeather();
  weatherBanner.innerText = tip;
}

document.addEventListener("DOMContentLoaded", setWeatherBanner());

fillFormButton.addEventListener("click", sendMessage("FILL_FORM"));
dataClearButton.addEventListener("click", async () => {
  const removeDataList = ["https://www.cheaptickets.nl"];
  removeBrowsingData(removeDataList, () => alert("Browser data removed !"));
});
cookieClearButton.addEventListener("click", async () => {
  const hostname = (await getUrl()).hostname;
  alert(await clearCookies(hostname));
});

async function sendMessage(message) {
  const tab = await getCurrentTab();

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => window.postMessage({ type: message }, "*"),
  });
}
