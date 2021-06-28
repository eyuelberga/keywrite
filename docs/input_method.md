# Input Method

An input-method translates keyboard inputs to symbols. It allows us to define
key combinations that produce a certain character.
In our case, it is a JavaScript object with an input character,
an output value and a next value.

A simple input-methods looks something like this:

```javascript
const myInputMethod = {
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

In the above input-method, the <kbd>a</kbd> key stroke is translated to the `∀` symbol.
Pressing <kbd>e</kbd> will output `∈`, pressing <kbd>e</kbd> again will output `∉`.

## Components of an Input-method

An Input-method has two basic components:

1. **SymbolMap:** object with a `value` and `next` keys.
1. **InputMethod:** object mapping a key stroke to a symbol map object

A Keyboard Input-method is a nested structure of these two components.
Lets see the components in more detail.

The interface for `SymbolMap` and `InputMethod` is shown below:

```typescript
interface SymbolMap {
    value: string | null;
    next: InputMethod | null;
}

type InputMethod = Record<string, SymbolMap>;
```

`value` represents the output symbol and `next` represents the next
input-method definition.

From our previous example, the symbol map for the <kbd>a</kbd> key is this:

```javascript
const symbolMapA = { value: '∀', next: null };
```

The input-method is as follows:

```javascript
const inputMethodA = { a: { value: '∀', next: null } };
```

`inputMethodA` is a valid input-method that you can provide to a Keywrite instance.
But to build a more complete input-method, you can add additional input key
and symbol map pairs.

```javascript
const inputMethodWithMoreInputKeys = {
    a: { value: '∀', next: null },
    b: { value: '⋈', next: null },
    c: { value: '⊂', next: null },
    d: { value: '∂', next: null },
};
```

Our inputs and outputs for the above input-method are as follows:

| Input Key    | Output Symbol |
| ------------ | ------------- |
| <kbd>a</kbd> | ∀             |
| <kbd>b</kbd> | ⋈             |
| <kbd>c</kbd> | ⊂             |
| <kbd>d</kbd> | ∂             |

We would also need to map certain combination of key strokes to a single character.
We can do that by nesting additional input-methods in the symbol map `next` field.

```javascript
const myInputMethod = {
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

| Input Key                                                 | Output Symbol |
| --------------------------------------------------------- | ------------- |
| <kbd>a</kbd>                                              | ∀             |
| <kbd>b</kbd>                                              | ⋈             |
| <kbd>b</kbd> + <kbd>l</kbd>                               | ⋉             |
| <kbd>b</kbd> + <kbd>r</kbd>                               | ⋊             |
| <kbd>c</kbd>                                              | ⊂             |
| <kbd>c</kbd> + <kbd>u</kbd>                               | ⊆             |
| <kbd>c</kbd> + <kbd>u</kbd> + <kbd>n</kbd>                | ⊈             |
| <kbd>c</kbd> + <kbd>n</kbd>                               | ⊄             |
| <kbd>c</kbd> + <kbd>n</kbd> + <kbd>u</kbd>                | ⊈             |
| <kbd>c</kbd> + <kbd>l</kbd>                               | ⊃             |
| <kbd>c</kbd> + <kbd>l</kbd> + <kbd>n</kbd>                | ⊅             |
| <kbd>c</kbd> + <kbd>l</kbd> + <kbd>n</kbd> + <kbd>u</kbd> | ⊉             |
| <kbd>c</kbd> + <kbd>l</kbd> + <kbd>u</kbd>                | ⊇             |
| <kbd>c</kbd> + <kbd>u</kbd>                               | ⊇             |
| <kbd>c</kbd> + <kbd>u</kbd> + <kbd>n</kbd>                | ⊉             |
| <kbd>d</kbd>                                              | ∂             |

The complete code is shown below:

<iframe src="https://codesandbox.io/embed/keywrite-input-methods-example-149ml?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="keywrite-input-methods-example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Creating Input-methods

Keyboard Input-method definitions are simple JavaScript objects. It is possible
to manually write a input-method definition that will work with Keywrite,
but a better way would be to use the [Input method Generator](input_method_generator.md).

## Pre-made Input-methods

Some input-methods are available pre-made and you add simply add them to your project.
A list of all available input-methods can be found [here](pre_made_input_methods.md)
