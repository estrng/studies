import { App } from "./src/scripts/app.js";
import { Daily } from "./src/scripts/daily.js";

const dailyButton = document.querySelector("#apply");

const app = new App();
const daily = new Daily();

app.init();
daily.init();

dailyButton.addEventListener("click", () => {
  daily.apply();
});
