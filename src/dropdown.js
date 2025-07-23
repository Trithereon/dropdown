// Note: arrow functions are needed, to maintain 'this' binding.
// Why? Because arrow functions capture 'this' from the class instance when it's created.

export default class Dropdown {
  constructor(dropdownContainer) {
    this.dropdownContainer = dropdownContainer;
    this.toggle = dropdownContainer.querySelector(
      'button[data-dropdown="toggle"]',
    );
    this.menu = dropdownContainer.querySelector("ul.dropdown-list");
    this.init();
    this.dropdownHandlers = {
      toggle: this.handleToggle,
      firstItem: this.handleFirstItem,
      secondItem: this.handleSecondItem,
      thirdItem: this.handleThirdItem,
      fourthItem: this.handleFourthItem,
      fifthItem: this.handleFifthItem,
      sixthItem: this.handleSixthItem,
      seventhItem: this.handleSeventhItem,
      eighthItem: this.handleEighthItem,
      ninthItem: this.handleNinthItem,
      tenthItem: this.handleTenthItem,
    };
  }

  init = () => {
    this.toggle.addEventListener("click", (e) => this.handleClick(e));
  };
  handleClick = (e) => {
    const action = e.target.dataset.dropdown;
    // Execute the associated function, passing the e onto the next function.
    if (action) this.dropdownHandlers[action](e);
    // If the clicked element has no data-dropdown, then ignore the click.
    else return;
  };
  handleToggle = () => {
    this.menu.classList.toggle("visible");
  };
  handleFirstItem = () => {};

  handleSecondItem = () => {};

  handleThirdItem = () => {};

  handleFourthItem = () => {};

  handleFifthItem = () => {};

  handleSixthItem = () => {};

  handleSeventhItem = () => {};

  handleEighthItem = () => {};

  handleNinthItem = () => {};

  handleTenthItem = () => {};
}
