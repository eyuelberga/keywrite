# Adding Keywrite to web

> Keywrite supports web integration through the `@keywrite/web` package.
> You can use it on a simple site or along with a web framework like React or Vue.

```javascript
import { KeywriteWeb } from '@keywrite/web';

// add to HTMLInputElement
new KeywriteWeb(document.querySelector('input'));
// add to HTMLTextAreaElement
new KeywriteWeb(document.querySelector('textarea'));
```
