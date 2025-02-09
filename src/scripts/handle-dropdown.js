const dropdownWidget = document.querySelector(".dropdown-widget");
const dropdownToggleBtn = document.querySelector(".dropdown-toggle");
const root = document.documentElement;

const DARK_THEME = "dark";
const LIGHT_THEME = "light";
const MOCHA_THEME = "mocha";

const setTheme = (theme) => {
  root.className = "";
  root.classList.add(theme);
};

const toggleDropdown = () => {
  dropdownWidget.classList.toggle("is-hidden");
};

const closeDropdownOnClickOutside = (event) => {
  if (
    !dropdownWidget.contains(event.target) &&
    event.target !== dropdownToggleBtn
  ) {
    dropdownWidget.classList.add("is-hidden");
  }
};

const handleThemeSelection = (event) => {
  const themeClass = event.target.className;

  switch (themeClass) {
    case "dark-theme":
      setTheme(DARK_THEME);
      break;
    case "light-theme":
      setTheme(LIGHT_THEME);
      break;
    case "mocha-theme":
      setTheme(MOCHA_THEME);
      break;
    default:
      break;
  }
};

const initializeDropdown = () => {
  dropdownToggleBtn.addEventListener("click", toggleDropdown);
  window.addEventListener("click", closeDropdownOnClickOutside);
  dropdownWidget.addEventListener("click", handleThemeSelection);
};

export default initializeDropdown;
