# Dropdown component

## Installation

## 1. Run the following command in terminal.

```bash
npm install --save-dev @trithereon/dropdown
```

## 2. One of the following must be added to your index.js

For CommonJS (Node.js/older bundlers):

```javascript
const Dropdown = require("@trithereon/dropdown");
// Uses dist/index.js
```

For ES Modules (modern bundlers):

```javascript
import Dropdown from "@trithereon/dropdown";
// Uses src/index.js via the "module" field
```

To Access Source Files Directly:

```javascript
import DropdownComponent from "@trithereon/dropdown/src/index";
```

## 3. The following snippet must also be added to your index.js.

```javascript
document.querySelectorAll(".dropdown").forEach((dropdownContainer) => {
  new Dropdown(dropdownContainer);
});
```

Steps 2 and 3 import the component and instantiate a Dropdown for each HTML element with class "dropdown".

## 4. The structure of the dropdown must follow this template:

```html
<div class="dropdown">
  <button data-dropdown="toggle">
    <svg viewBox="0 0 10 8" width="32">
      <path
        d="M1 1h8M1 4h 8M1 7h8"
        stroke="#000"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  </button>
  <ul class="dropdown-list">
    <li class="dropdown-item">
      <button class="dropdown-button">First Menu Item</button>
    </li>
    <li class="dropdown-item">
      <button class="dropdown-button">Second Menu Item</button>
    </li>
    <li class="dropdown-item">
      <button class="dropdown-button">Third Menu Item</button>
    </li>
  </ul>
</div>
```

Note: The svg above is a hamburger menu icon, but it can be replaced by any image or text instead. You can also edit the path element's stroke attributes to your liking.

To test the module without installing, visit https://trithereon.github.io/dropdown/ and run the command

```javascript
new Dropdown(document.querySelector(".dropdown"));
```

in console, to activate the hamburger menu button.
