# Basic Usage

## Initializing a new Keywrite instance

Creating a new instance of Keywrite requires two parameters.

1. **input element:** this is the HTML element you want to bind with the instance
1. **input-methods:** which is a key value pair of input-method names and definitions

### Binding with input elements

Currently, Keywrite supports binding on `HTMLInputElement` and `HTMLTextAreaElement`.
During initialization you must provide a reference to the element you wish to bind
with the Keywrite instance. You can use `document.querySelector` or a similar method.

### Defining Input methods

You also need to provide a Keywrite instance with Input methods. Read more about
input-methods [here](input_method.md). The `input-methods` parameter takes an object
with the input-method name being the key and the actual input-method definition
as the value.

```javascript
// add to HTMLInputElement without enabling it
new KeywriteWeb(document.querySelector('input'), { myInputMethod });
```

## Enable/Disable Keywrite instance

By default Keywrite is enabled when initialized. This can be overridden by
setting the `on` parameter during initialization.

```javascript
// add to HTMLInputElement without enabling it
new KeywriteWeb(document.querySelector('input'), { myInputMethod }, false);
```

It is also possible to toggle between on and off states during run time by
changing the values of the `on` property on the `KeywriteWeb` instance.

```javascript
// add to HTMLInputElement without enabling it
const myKeywriteInstance = new KeywriteWeb(document.querySelector('input'), { myInputMethod }, false);

// change the on property to enable it
myKeywriteInstance.on = true;
```

## Adding multiple input-methods

It is possible to add more than one input-method to an instance. This could
be useful if you want users to pick from a selection of
input-methods. Multiple input-method definitions can be added during initialization.

```javascript
// input-method definitions
import inputMethod1 from './inputmethod1';
import inputMethod2 from './inputmethod2';
import inputMethod3 from './inputmethod3';

// add to HTMLInputElement with multiple input-method definitions
// the parameter accepts a map of input-method name and its definition
const myKeywriteInstance = new KeywriteWeb(document.querySelector('input'), {
    default: inputMethod1,
    typewriter: inputMethod2,
    mnemonic: inputMethod3,
});
```

You can switch between input-methods by setting the `current` value in the instance to
the key of the input-method you want.

```javascript
myKeywriteInstance.current = 'typewriter';
```

## Using pre-made input-methods

You can install pre-made input-methods to use in your project. A list of all
available input-methods can be found [here](pre_made_input-methods.md).

To create your own input-method, refer to [this guide](input_method_generator.md)
