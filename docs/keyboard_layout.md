# Keyboard Layout

A keyboard layout maps keyboard inputs to symbols. It allows us to define key combinations that
produce a certain symbol. It is generally a JavaScript object with an
input character, an output value or a next value.

A simple keyboard layouts looks something like this:

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

In the above layout, the `a` keyboard input is mapped to the `∀` symbol.
Pressing `e` will output `∈`, pressing `e` again will output `∉`.

## Components of a keyboard layout

A keyboard layout has two basic components:

1. **SymbolMap:** object with a `value` and `next` keys.
1. **KeyboardLayout:** object mapping an input key to a symbol map object

Keyboard layout is a nested structure of these two components. Lets see this
components in more detail.

The interface for `SymbolMap` and `KeyboardLayout` is shown below:

```typescript
interface SymbolMap {
    value: string | null;
    next: KeyboardLayout | null;
}

type KeyboardLayout = Record<string, SymbolMap>;
```

`value` represents the output symbol and `next` represents the next keyboard
layout definition.

From our previous example, the symbol map for the `a` key is this:

```javascript
const symbolMapA = { value: '∀', next: null };
```

The keyboard layout is as follows:

```javascript
const layoutA = { a: { value: '∀', next: null } };
```

`layoutA` is a valid layout that you can provide to a Keywrite instance.
But to build a more complete keyboard layout, you can add additional input key
and symbol map pairs.

```javascript
const layoutWithMoreInputKeys = {
    a: { value: '∀', next: null },
    b: { value: '⋈', next: null },
    c: { value: '⊂', next: null },
    d: { value: '∂', next: null },
};
```

Our inputs and outputs for the above layout are as follows:

| Input Key | Output Symbol |
| --------- | ------------- |
| `a`       | ∀             |
| `b`       | ⋈             |
| `c`       | ⊂             |
| `d`       | ∂             |

We would also need to map certain combination of key inputs to a single character.
We can do that by nesting additional layouts in the symbol map `next` field.

```javascript
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
```

Now our input output table looks like this:

| Input Key             | Output Symbol |
| --------------------- | ------------- |
| `a`                   | ∀             |
| `b`                   | ⋈             |
| `b` + `l`             | ⋉             |
| `b` + `r`             | ⋊             |
| `c`                   | ⊂             |
| `c` + `u`             | ⊆             |
| `c` + `u` + `n`       | ⊈             |
| `c` + `n`             | ⊄             |
| `c` + `n` + `u`       | ⊈             |
| `c` + `l`             | ⊃             |
| `c` + `l` + `n`       | ⊅             |
| `c` + `l` + `n` + `u` | ⊉             |
| `c` + `l` + `u`       | ⊇             |
| `c` + `u`             | ⊇             |
| `c` + `u` + `n`       | ⊉             |
| `d`                   | ∂             |

The complete code is shown below:

<iframe src="https://codesandbox.io/embed/keywrite-layouts-example-149ml?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="keywrite-layouts-example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Creating keyboard layouts

Keyboard layout definitions are simple json objects. It is possible to manually write a layout definition that will work with Keywrite, but a better way would be to use the [Layout Generator](layout_generator.md).

## Pre-made layouts

Some layouts are avaliable pre-made and you add simply add them to your project.
A list of all available layouts can be found [here](pre_made_layouts.md)
