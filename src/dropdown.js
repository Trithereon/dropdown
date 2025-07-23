// Note: arrow functions are needed, to maintain 'this' binding.
// Why? Because arrow functions capture 'this' from the class instance when it's created.

export default class Dropdown {
  constructor(dropdownContainer) {
    this.dropdownContainer = dropdownContainer;
    this.toggle = dropdownContainer.querySelector('[data-dropdown="toggle"]');
    this.menu = dropdownContainer.querySelector("ul.dropdown-list");
    this.init();
  }
  init = () => {
    this.toggle.addEventListener("click", () => this.handleToggle());
  };
  handleToggle = () => {
    this.menu.classList.toggle("visible");
  };
}
