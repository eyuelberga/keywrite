---
sidebar_position: 2
---

# Input Method Demo

import Editor from '@site/src/components/Editor'

export const files = {}

{(function () {
files["index.js"] =
`import KeywriteWeb from "@keywrite/web";

const myLayout = {
a: {
value: '∀',
next: null,
},
b: {
value: '⋈',
next: {
l: {
value: '⋉',
next: null,
},
r: {
value: '⋊',
next: null,
},
},
},
c: {
value: '⊂',
next: {
n: {
value: '⊄',
next: {
u: {
value: '⊈',
next: null,
},
},
},
u: {
value: '⊆',
next: {
n: {
value: '⊈',
next: null,
},
},
},
l: {
value: '⊃',
next: {
n: {
value: '⊅',
next: {
u: {
value: '⊉',
next: null,
},
},
},
u: {
value: '⊇',
next: {
n: {
value: '⊉',
next: null,
},
},
},
},
},
},
},
d: { value: '∂', next: null },
};
// add to HTMLTextAreaElement
new KeywriteWeb(document.querySelector("textarea"), { myLayout });
`;

files["index.html"] =
`<!DOCTYPE html>

<html>

<head>
	<title>Keywrite Layouts Demo</title>
	<meta charset="UTF-8" />
</head>

<body>
	<div id="app">
		<h1>Keywrite Input Method Demo</h1>
		
		<p>This demo shows how to create a custom input method with nested key combinations.</p>
		
		<h2>Keyboard Mappings</h2>
		<table border="1" cellpadding="8" cellspacing="0">
			<thead>
				<tr>
					<th>Input Key(s)</th>
					<th>Output Symbol</th>
				</tr>
			</thead>
			<tbody>
				<tr><td><kbd>a</kbd></td><td>∀</td></tr>
				<tr><td><kbd>b</kbd></td><td>⋈</td></tr>
				<tr><td><kbd>b</kbd> + <kbd>l</kbd></td><td>⋉</td></tr>
				<tr><td><kbd>b</kbd> + <kbd>r</kbd></td><td>⋊</td></tr>
				<tr><td><kbd>c</kbd></td><td>⊂</td></tr>
				<tr><td><kbd>c</kbd> + <kbd>u</kbd></td><td>⊆</td></tr>
				<tr><td><kbd>c</kbd> + <kbd>u</kbd> + <kbd>n</kbd></td><td>⊈</td></tr>
				<tr><td><kbd>c</kbd> + <kbd>n</kbd></td><td>⊄</td></tr>
				<tr><td><kbd>c</kbd> + <kbd>n</kbd> + <kbd>u</kbd></td><td>⊈</td></tr>
				<tr><td><kbd>c</kbd> + <kbd>l</kbd></td><td>⊃</td></tr>
				<tr><td><kbd>c</kbd> + <kbd>l</kbd> + <kbd>n</kbd></td><td>⊅</td></tr>
				<tr><td><kbd>c</kbd> + <kbd>l</kbd> + <kbd>n</kbd> + <kbd>u</kbd></td><td>⊉</td></tr>
				<tr><td><kbd>c</kbd> + <kbd>l</kbd> + <kbd>u</kbd></td><td>⊇</td></tr>
				<tr><td><kbd>c</kbd> + <kbd>l</kbd> + <kbd>u</kbd> + <kbd>n</kbd></td><td>⊉</td></tr>
				<tr><td><kbd>d</kbd></td><td>∂</td></tr>
			</tbody>
		</table>

    	<h2>Try it out:</h2>
    	<div>
    		<textarea placeholder="type here" rows="6" cols="50"></textarea>
    	</div>
    </div>

    <script src="index.js"></script>

</body>

</html>`;

files["package.json"] =
`{ "name": "keywrite-input-methods", "version": "1.0.0", "description": "", "main": "index.html", "scripts": { "start": "parcel index.html --open", "build": "parcel build index.html" }, "dependencies": { "@keywrite/web": "1.1.0", "parcel-bundler": "^1.6.1" }, "devDependencies": { "@babel/core": "7.2.0" }, "resolutions": { "@babel/preset-env": "7.13.8" }, "keywords": [] }`;

})()}

<Editor files={files} />
