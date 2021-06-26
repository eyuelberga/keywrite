# Quick Start

## Installation

To use Keywrite on web projects you need to install the `@keywrite/web` package:

```bash
$ yarn add @keywrite/web
```

or

```bash
$ npm install @keywrite/web
```

## Usage

Once you have installed the `@keywrite/web` you can import it to your project:

```javascript
import { KeywriteWeb } from '@keywrite/web';
```

You also need a keyboard layout to start using Keywrite. [Keyboard layouts](keyboard_layout.md)
map keyboard inputs to symbols, this will allow you to define which key combinations that
produce a certain symbol. Lets define a simple keyboard layout to get started:

```javascript
const myLayout = {
    a: { value: '∀', next: null },
    e: {
        value: '∈',
        next: {
            e: {
                value: '∉',
                next: null,
            },
        },
    },
};
```

Refer to [this guide](keyboard_layout.md) to learn more about keyboard layouts.

Next, we initialize our `KeywriteWeb` instance using a reference to either a
`textarea` or `input` element and the layout.

```javascript
// add to HTMLInputElement
new KeywriteWeb(document.querySelector('input'), { myLayout });
// add to HTMLTextAreaElement
new KeywriteWeb(document.querySelector('textarea'), { myLayout });
```

The complete code is shown below:

<iframe src="https://codesandbox.io/embed/keywrite-quickstart-js-vdoy1?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="keywrite-quickstart-js"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
