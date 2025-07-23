Dropdown component

How to use

Add this to your index.js:

```javascript
import Dropdown from "@trithereon/dropdown/dist/main.js";

document.querySelectorAll(".dropdown").forEach((dropdownContainer) => {
  new Dropdown(dropdownContainer);
});
```

This imports the component and instantiates a Dropdown for each HTML element with class "dropdown".

The structure of the dropdown must follow this template:

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

Note: The svg is a hamburger menu icon, but it can be replaced by any image or text instead.
