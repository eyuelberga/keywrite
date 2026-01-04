---
sidebar_position: 3
---

# Ethiopic Input Methods Demo

import Editor from '@site/src/components/Editor'

export const files = {}

{(function () {
files["index.js"] =
`import KeywriteWeb from "@keywrite/web";
import EthiopicInputMethods from "@keywrite/ethiopic-input-methods";

// Populate select options
const populateSelect = (selectId) => {
const select = document.getElementById(selectId);
if (select) {
const IMKeys = Object.keys(EthiopicInputMethods);
IMKeys.forEach(key => {
const option = document.createElement("option");
option.value = key;
option.textContent = key;
select.appendChild(option);
});
}
};

// Add toggle functionality
const addToggle = (instance, btnId) => {
const btn = document.getElementById(btnId);
if (btn) {
btn.addEventListener("click", () => {
instance.on = !instance.on;
btn.textContent = instance.on ? "ON" : "OFF";
});
}
};

// Add layout selection functionality
const addLayoutSelect = (instance, selectId) => {
const select = document.getElementById(selectId);
if (select) {
select.addEventListener("change", (e) => {
const value = e.target.value;
instance.current = value;
});
}
};

// Initialize
const inputElem = document.getElementById("inputName");
const textareaElem = document.getElementById("inputBio");

if (inputElem && textareaElem) {
// Populate selects
populateSelect("selectName");
populateSelect("selectBio");

// Create Keywrite instances
const inputInstance = new KeywriteWeb(inputElem, EthiopicInputMethods);
const textareaInstance = new KeywriteWeb(textareaElem, EthiopicInputMethods);

// Add event listeners
addToggle(inputInstance, "btnName");
addToggle(textareaInstance, "btnBio");
addLayoutSelect(inputInstance, "selectName");
addLayoutSelect(textareaInstance, "selectBio");
}
`;

files["index.html"] =
`<!DOCTYPE html>

<html>
<head>
  <title>Keywrite Ethiopic Input Methods Demo</title>
  <meta charset="UTF-8" />
</head>
<body>
  <div id="app">
    <h1>Keywrite Ethiopic Input Methods Demo</h1>

    <div style="display: flex; gap: 15px; margin-bottom: 20px; align-items: flex-end;">
      <div style="flex: 2;">
        <label for="inputName" style="display: block; margin-bottom: 5px; font-weight: bold;">Name</label>
        <input type="text" id="inputName" placeholder="Name" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
      </div>
      <div style="flex: 1; padding: 0 10px">
        <label for="selectName" style="display: block; margin-bottom: 5px; font-weight: bold;">Input Method</label>
        <select id="selectName" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
          <!-- Options will be populated by JavaScript -->
        </select>
      </div>
      <div style="flex: 0 0 80px;">
        <button id="btnName">ON</button>
      </div>
    </div>

    <div style="display: flex; gap: 15px; margin-bottom: 20px; align-items: flex-end;">
      <div style="flex: 2;">
        <label for="inputBio" style="display: block; margin-bottom: 5px; font-weight: bold;">Bio</label>
        <textarea id="inputBio" rows="3" placeholder="Bio" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; resize: vertical;"></textarea>
      </div>
      <div style="flex: 1; padding: 0 10px">
        <label for="selectBio" style="display: block; margin-bottom: 5px; font-weight: bold;">Input Method</label>
        <select id="selectBio" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
          <!-- Options will be populated by JavaScript -->
        </select>
      </div>
      <div style="flex: 0 0 80px;">
        <button id="btnBio">ON</button>
      </div>
    </div>

      <p style="background: #f5f5f5; padding: 15px; border-radius: 4px; margin-bottom: 30px;">
      This demo shows some of the basic features of <strong>@keywrite/web</strong>.
      Two instances of KeywriteWeb are initialized with reference to our text input and textarea elements.
      Both use the ethiopic input-methods from the <strong>@keywrite/ethiopic-input-methods</strong> package.
      It also demonstrates how to enable/disable typing and dynamically changing input-methods.
    </p>

  </div>

  <script src="index.js"></script>
</body>
</html>`;

files["package.json"] =
`{ "name": "keywrite-using-ethiopic-input-method", "version": "1.0.0", "description": "", "main": "index.html", "scripts": { "start": "parcel index.html --open", "build": "parcel build index.html" }, "dependencies": { "@keywrite/ethiopic-input-methods": "1.0.0", "@keywrite/web": "1.1.0", "parcel-bundler": "^1.6.1" }, "devDependencies": { "@babel/core": "7.2.0" }, "resolutions": { "@babel/preset-env": "7.13.8" }, "keywords": [] }`;

})()}

<Editor files={files} />
