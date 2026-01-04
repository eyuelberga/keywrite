---
sidebar_position: 1
---

# Quick Start Demo

import Editor from '@site/src/components/Editor'

export const files = {}

{(function () {
files["index.js"] =
`import KeywriteWeb from "@keywrite/web";
const myLayout = {
a: { value: "∀", next: null },
e: {
value: "∈",
next: {
e: {
value: "∉",
next: null
}
}
}
};

// add to HTMLInputElement
new KeywriteWeb(document.querySelector("input"), { myLayout });
// add to HTMLTextAreaElement
new KeywriteWeb(document.querySelector("textarea"), { myLayout });
`;

files["index.html"] =
`<!DOCTYPE html>

<html>
<head>
<title>Keywrite Quickstart Demo</title>
<meta charset="UTF-8" />
</head>
<body>
<div id="app">
  <h1>Keywrite Quick Start Demo</h1>
  
  <p><strong>Try it:</strong> Type <kbd>a</kbd> to get ∀, or type <kbd>e</kbd> once for ∈, then <kbd>e</kbd> again for ∉</p>

  <div>
    <label>Input field:</label><br>
    <input placeholder="type here"/>
  </div>
  
  <div style="margin-top:10px;">
    <label>Textarea:</label><br>
    <textarea placeholder="type here"></textarea>
  </div>
</div>
<script src="index.js"></script>
</body>
</html>`;

files["package.json"] =
`{ "name": "keywrite-quickstart-js", "version": "1.0.0", "description": "", "main": "index.html", "scripts": { "start": "parcel index.html --open", "build": "parcel build index.html" }, "dependencies": { "@keywrite/web": "1.1.0", "parcel-bundler": "^1.6.1" }, "devDependencies": { "@babel/core": "7.2.0" }, "resolutions": { "@babel/preset-env": "7.13.8" }, "keywords": [] }`;

})()}

<Editor files={files} />
