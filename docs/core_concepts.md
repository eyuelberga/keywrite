## Core Concepts

### How Keywrite Works

Keywrite operates on a simple principle: **keystroke conversion through configurable mappings**.

```
User types → Keywrite intercepts → Matches keystroke → Outputs character
     "a"   →   Key event caught   →   Finds "a" in map  →   Displays "∀"
```

#### The Process:

1. **Event Interception:** Keywrite listens to keyboard events on bound input elements
2. **Pattern Matching:** Each keystroke is matched against the current input method definition
3. **Character Resolution:** The matching pattern determines which character to output
4. **State Management:** Keywrite tracks composition state for multi-keystroke sequences
5. **Visual Feedback:** The resolved character is inserted into the input element

### Input Methods Explained

An **input method** is a JavaScript object that defines how keystrokes map to characters. It's the heart of Keywrite's functionality.

#### Basic Structure

```javascript
const inputMethod = {
    [keystroke]: {
        value: 'output character',
        next:
            null |
            {
                /* nested input method */
            },
    },
};
```

#### Components:

1. **SymbolMap:** An object with `value` and `next` keys

    - `value`: The character to output (string or null)
    - `next`: The next level of input method (object or null)

2. **InputMethod:** An object mapping keystrokes to SymbolMaps

#### TypeScript Interfaces

```typescript
interface SymbolMap {
    value: string | null;
    next: InputMethod | null;
}

type InputMethod = Record<string, SymbolMap>;
```

### Key Composition

Keywrite supports both simple single-keystroke mappings and complex multi-keystroke sequences.

#### Single Keystroke

```javascript
const simple = {
    a: { value: '∀', next: null },
    b: { value: '⋈', next: null },
};
```

| Input | Output |
| ----- | ------ |
| `a`   | ∀      |
| `b`   | ⋈      |

#### Multi-Keystroke Sequences

```javascript
const complex = {
    b: {
        value: '⋈',
        next: {
            l: { value: '⋉', next: null },
            r: { value: '⋊', next: null },
        },
    },
};
```

| Input Sequence | Output |
| -------------- | ------ |
| `b`            | ⋈      |
| `b` + `l`      | ⋉      |
| `b` + `r`      | ⋊      |

#### Nested Structures

You can nest input methods to arbitrary depths:

```javascript
const nested = {
    c: {
        value: '⊂',
        next: {
            u: {
                value: '⊆',
                next: {
                    n: { value: '⊈', next: null },
                },
            },
            n: {
                value: '⊄',
                next: {
                    u: { value: '⊈', next: null },
                },
            },
        },
    },
};
```

| Input Sequence  | Output |
| --------------- | ------ |
| `c`             | ⊂      |
| `c` + `u`       | ⊆      |
| `c` + `u` + `n` | ⊈      |
| `c` + `n`       | ⊄      |
| `c` + `n` + `u` | ⊈      |
