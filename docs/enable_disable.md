# Enabling/Disabling Keywrite

By default Keywrite is enabled when initialized. This can be overridden by
setting the `on` parameter during initialization.

```javascript
import { KeywriteWeb } from '@keywrite/web';

// add to HTMLInputElement without enabling it
new KeywriteWeb(document.querySelector('input'), false);
```

It is also possible to toggle between on and off states during run time by changing the
values of the `on` property on the `KeywriteWeb` instance.

```javascript
import { KeywriteWeb } from '@keywrite/web';

// add to HTMLInputElement without enabling it
const myInstance = new KeywriteWeb(document.querySelector('input'), false);

// change the on property to enable it

myInstance.on = true;
```
