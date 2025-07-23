import Dropdown from "./dropdown.js";
import "./styles.css";
import "./modern-normalize.css";

document.querySelectorAll(".dropdown").forEach((dropdownContainer) => {
  new Dropdown(dropdownContainer);
});

export default Dropdown;
