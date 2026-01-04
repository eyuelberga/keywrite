---
sidebar_position: 2
---

# Creating Input Methods

## Input Method Structure

An input method in Keywrite is a JavaScript object that defines mappings from keystrokes to characters. Understanding this structure is essential for creating your own input methods.

## Basic Structure

```javascript
const inputMethod = {
    [key]: {
        value: string | null,
        next: InputMethod | null,
    },
};
```

## Components

Every input method consists of **SymbolMaps** - objects with two required properties:

-   **`value`**: The character to output (string) or `null` if this is an intermediate state
-   **`next`**: A nested input method object for multi-keystroke sequences, or `null` if this is a terminal state

## How Keywrite Processes Input

When you type a key:

1. Keywrite looks up the key in the current input method object
2. If found, it outputs the `value` (if not `null`)
3. If `next` exists, Keywrite moves to that nested input method for the next keystroke
4. If `next` is `null`, the composition is complete and Keywrite resets to the root level

## Single-Keystroke Mappings

The simplest input method maps one key to one character:

```javascript
const simpleMapping = {
    a: { value: 'α', next: null },
    b: { value: 'β', next: null },
    g: { value: 'γ', next: null },
};
```

**Behavior:**

-   Press `a` → outputs `α`, composition complete
-   Press `b` → outputs `β`, composition complete
-   Press `g` → outputs `γ`, composition complete

## Multi-Keystroke Sequences

For multi-keystroke input, use nested structures:

```javascript
const multiKeyMapping = {
    a: {
        value: '∀',
        next: null,
    },
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

**Behavior:**

-   Press `a` → outputs `∀`, composition complete
-   Press `e` → outputs `∈`, **composition continues** (next is not null)
-   Press `e` again → replaces `∈` with `∉`, composition complete

## Intermediate States with Null Values

You can create intermediate states that don't output characters immediately:

```javascript
const intermediateState = {
    x: {
        value: null, // No immediate output
        next: {
            a: { value: 'χα', next: null },
            b: { value: 'χβ', next: null },
        },
    },
};
```

**Behavior:**

-   Press `x` → no output, waiting for next key
-   Press `a` → outputs `χα`, composition complete
-   Press `b` → outputs `χβ`, composition complete

## Arbitrary Nesting Depth

Keywrite supports unlimited nesting levels:

```javascript
const deepNesting = {
    c: {
        value: '⊂',
        next: {
            u: {
                value: '⊆',
                next: {
                    n: {
                        value: '⊈',
                        next: null,
                    },
                },
            },
        },
    },
};
```

**Behavior:**

-   Press `c` → outputs `⊂`, composition continues
-   Press `u` → replaces `⊂` with `⊆`, composition continues
-   Press `n` → replaces `⊆` with `⊈`, composition complete

## Character Replacement Behavior

When a keystroke produces a new character and `next` is not null, Keywrite **replaces** the previous character rather than appending:

```javascript
const replacement = {
    m: {
        value: 'ም',
        next: {
            a: { value: 'ማ', next: null },
            i: { value: 'ሚ', next: null },
        },
    },
};
```

**Behavior:**

-   Press `m` → outputs `ም`
-   Press `a` → `ም` is replaced with `ማ` (not `ምማ`)
-   Press `i` → `ም` is replaced with `ሚ` (not `ምሚ`)

## Multiple Entry Points

An input method can have multiple top-level keys:

```javascript
const multipleRoots = {
    a: { value: 'አ', next: null },
    b: { value: 'በ', next: null },
    c: {
        value: 'ች',
        next: {
            a: { value: 'ቻ', next: null },
        },
    },
};
```

Each top-level key starts an independent composition sequence.

## Key Naming and Special Characters

Keys can be any string, including special characters:

```javascript
const specialKeys = {
    '<': { value: '‹', next: null },
    '>': { value: '›', next: null },
    '!': {
        value: '¬',
        next: {
            '=': { value: '≠', next: null },
        },
    },
};
```

## Example: Mathematical Symbols

Here's a complete example showing various composition patterns:

```javascript
const mathInputMethod = {
    // Single keystroke
    a: { value: '∀', next: null },
    e: { value: '∃', next: null },

    // Two-level nesting
    c: {
        value: '⊂',
        next: {
            n: { value: '⊄', next: null },
            u: {
                value: '⊆',
                // Three-level nesting
                next: {
                    n: { value: '⊈', next: null },
                },
            },
        },
    },

    // Using special characters as keys
    '!': {
        value: '¬',
        next: {
            '=': { value: '≠', next: null },
        },
    },

    // Intermediate null value
    s: {
        value: null,
        next: {
            s: { value: 'ß', next: null },
            e: { value: '∈', next: null },
        },
    },
};
```

**Usage scenarios:**

-   `a` → `∀` (simple)
-   `c` → `⊂` → `cn` → `⊄` (two steps)
-   `c` → `⊂` → `cu` → `⊆` → `cun` → `⊈` (three steps)
-   `!` → `¬` → `!=` → `≠` (special characters)
-   `s` → (nothing) → `ss` → `ß` (null intermediate)

## Understanding State Management

Keywrite maintains an internal state machine:

1. **Root state**: Waiting for initial keystroke
2. **Active state**: In the middle of a composition (when `next` exists)
3. **Reset triggers**: Composition ends when `next` is `null` or an unmapped key is pressed

```javascript
// State progression example
const stateExample = {
    m: {
        // Press 'm'
        value: 'ም', // → Outputs 'ም', enters Active state
        next: {
            a: {
                // Press 'a'
                value: 'ማ', // → Replaces with 'ማ', still Active
                next: {
                    a: {
                        // Press 'a' again
                        value: 'ማ', // → Outputs 'ማ'
                        next: null, // → Returns to Root state
                    },
                },
            },
        },
    },
};
```

## TypeScript Type Definitions

For TypeScript users, here are the exact type definitions:

```typescript
interface SymbolMap {
    value: string | null;
    next: InputMethod | null;
}

type InputMethod = Record<string, SymbolMap>;

// Usage
const myInputMethod: InputMethod = {
    a: { value: 'α', next: null },
};
```

## What Happens with Unmapped Keys

When a key is pressed that doesn't exist in the current state:

1. The unmapped key is processed normally (outputs its default character)
2. Keywrite resets to the root state
3. The next keystroke starts fresh from the root

```javascript
const partial = {
    m: {
        value: 'ም',
        next: {
            a: { value: 'ማ', next: null },
        },
    },
};

// Behavior:
// Type: m → outputs 'ም', waiting for next key
// Type: x → 'x' is not mapped, outputs 'x', resets to root
// Type: m → outputs 'ም' again (fresh start)
```
