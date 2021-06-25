## @keywrite/web

Keywrite is a Javascript library that allows you to type non-latin scripts in any web based application using a standard keyboard.

## Installation

```sh
$ yarn add @keywrite/web

# or

$ npm install @keywrite/web
```

## Basic usage

```javascript
import { KeywriteWeb } from '@keywrite/web';

// keyboard layout definition
import layout from './layout';

// add to HTMLInputElement
new KeywriteWeb(document.querySelector('input'));
// add to HTMLTextAreaElement
new KeywriteWeb(document.querySelector('textarea'));
```

## License

MIT © [Eyuel Berga](https://github.com/eyuelberga)
