# Basic Usage

## Initializing a new Keywrite instance

Creating a new instance of Keywrite requires two parameters.

1. **input control:** this is the HTML element you want to bind with the instance
1. **keyboard layouts:** which is a key value pair of layout names and definitions

### Binding with input controls

Currently, Keywrite supports binding on `HTMLInputElement` and `HTMLTextAreaElement`.
During initialization you must provide a reference to the element you wish to bind
with the Keywrite instance. You can use `document.querySelector` or a similar method.

### Defining keyboard layouts

You also need to provide a Keywrite instance with keyboard layouts. Read more about
keyboard layouts [here](keyboard_layout.md). The `layout` parameter takes an object
with the layout name being the key and the actual layout as the value.

```javascript
// add to HTMLInputElement without enabling it
new KeywriteWeb(document.querySelector('input'), { myLayout });
```

## Enable/Disable Keywrite instance

By default Keywrite is enabled when initialized. This can be overridden by
setting the `on` parameter during initialization.

```javascript
// add to HTMLInputElement without enabling it
new KeywriteWeb(document.querySelector('input'), { myLayout }, false);
```

It is also possible to toggle between on and off states during run time by changing the
values of the `on` property on the `KeywriteWeb` instance.

```javascript
// add to HTMLInputElement without enabling it
const myKeywriteInstance = new KeywriteWeb(document.querySelector('input'), { myLayout }, false);

// change the on property to enable it
myKeywriteInstance.on = true;
```

## Adding multiple keyboard layouts

It is possible to add more than one keyboard layout to an instance. This could
be useful if you want users to pick from a selection of
input methods. Multiple layout definitions can be added during initialization.

```javascript
// keyboard layout definitions
import layout1 from './layout1';
import layout2 from './layout2';
import layout3 from './layout3';

// add to HTMLInputElement with multiple layout definitions
// the parameter accepts a map of layout name and its definition
const myKeywriteInstance = new KeywriteWeb(document.querySelector('input'), {
    default: layout1,
    typewriter: layout2,
    mnemonic: layout3,
});
```

You can switch between the layouts by setting the `current` value in the instance to
the key name of the layout you want.

```javascript
myKeywriteInstance.current = 'typewriter';
```

## Using pre-made keyboard layouts

You can install pre-made layouts to use in your project. A list of all available
layouts can be found [here](pre_made_layouts.md)
