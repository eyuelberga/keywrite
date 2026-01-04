---
sidebar_position: 1
---

# Basic Usage

## Creating a Keywrite Instance

The `KeywriteWeb` constructor requires two parameters:

1. **Input Element:** A reference to an `HTMLInputElement` or `HTMLTextAreaElement`
2. **Input Methods:** An object containing one or more input method definitions

```javascript
import { KeywriteWeb } from '@keywrite/web';

// Get reference to input element
const inputElement = document.querySelector('input');

// Define input method
const myInputMethod = {
    a: { value: '∀', next: null },
    e: { value: '∈', next: null },
};

// Create instance
const keywrite = new KeywriteWeb(inputElement, { myInputMethod });
```

## Supported Elements

Keywrite currently supports binding to:

-   `HTMLInputElement` (`<input>` elements)
-   `HTMLTextAreaElement` (`<textarea>` elements)

```javascript
// Bind to input
new KeywriteWeb(document.querySelector('input'), { myInputMethod });

// Bind to textarea
new KeywriteWeb(document.querySelector('textarea'), { myInputMethod });
```

## Enabling/Disabling

## Default Behavior

By default, Keywrite is **enabled** when initialized. You can override this by passing a third parameter:

```javascript
// Disabled on initialization
const keywrite = new KeywriteWeb(inputElement, { myInputMethod }, false);
```

## Runtime Control

Toggle Keywrite on and off by changing the `on` property:

```javascript
const keywrite = new KeywriteWeb(inputElement, { myInputMethod }, false);

// Enable it later
keywrite.on = true;

// Disable it
keywrite.on = false;
```

This is useful for:

-   Toggling between native and custom input
-   Language switchers in your UI
-   Conditional input method activation

## Multiple Input Methods

You can add multiple input methods to a single instance, allowing users to switch between different keyboard layouts.

## Adding Multiple Methods

```javascript
import inputMethod1 from './inputmethod1';
import inputMethod2 from './inputmethod2';
import inputMethod3 from './inputmethod3';

const keywrite = new KeywriteWeb(document.querySelector('input'), {
    default: inputMethod1,
    typewriter: inputMethod2,
    mnemonic: inputMethod3,
});
```

## Switching Between Methods

Use the `current` property to switch active input methods:

```javascript
// Switch to typewriter method
keywrite.current = 'typewriter';

// Switch to mnemonic method
keywrite.current = 'mnemonic';

// Switch back to default
keywrite.current = 'default';
```

## Example: Language Selector

```javascript
const amharicIM = {
    /* Amharic input method */
};
const tigrignaIM = {
    /* Tigrigna input method */
};
const geezIM = {
    /* Ge'ez input method */
};

const keywrite = new KeywriteWeb(input, {
    amharic: amharicIM,
    tigrigna: tigrignaIM,
    geez: geezIM,
});

// UI dropdown handler
document.querySelector('#language-select').addEventListener('change', (e) => {
    keywrite.current = e.target.value;
});
```
