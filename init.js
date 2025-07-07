import { switchTheme } from "./src/components/switchTheme.js";
import { getGeoData } from "./src/api/geoData.js";
import { getWeatherByForm } from "./src/components/inputForm.js";
import { renderCurrentTime } from "./src/helpers/currentTime.js";
import { geoLocation } from "./src/components/geoLocation.js";
import { scrollToTop } from "./src/components/scrollToTop.js";
import { getCurrentYear } from "./src/components/currentYear.js";

export function initApp() {
  switchTheme();
  getGeoData();
  getWeatherByForm();
  renderCurrentTime();
  geoLocation();
  scrollToTop();
  getCurrentYear();
}
