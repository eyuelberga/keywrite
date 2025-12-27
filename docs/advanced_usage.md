## Advanced Usage

### Extending the Core Package

The `@keywrite/core` package provides the platform-agnostic input method logic. The `@keywrite/web` package is itself an extension of core that adds web-specific functionality.

#### When to Use Core Directly

You may want to extend `@keywrite/core` for:

-   **Desktop applications** (Electron, Tauri)
-   **Mobile applications** (React Native, Ionic)
-   **Rich text editors** (Draft.js, Slate, ProseMirror)
-   **Custom rendering** (Canvas, WebGL, game engines)
-   **Non-browser JavaScript environments**

#### The Write Method

The core `write()` method handles input method logic:

```javascript
import { KeywriteCore } from '@keywrite/core';

class CustomKeywrite extends KeywriteCore {
    write(char) {
        const result = super.write(char);

        // result contains:
        // - symbol: the output character
        // - replace: whether to replace the previous character

        // Add your platform-specific logic here

        return result;
    }
}
```

#### Example Pattern

Here's the general pattern for extending core:

```javascript
import { KeywriteCore } from '@keywrite/core';

class KeywriteCustom extends KeywriteCore {
    constructor(inputMethods, defaultMethod) {
        super(inputMethods, defaultMethod);
        // Initialize your platform-specific components
    }

    handleInput(char) {
        const result = this.write(char);

        if (result.replace) {
            // Remove the previous character in your platform
        }

        if (result.symbol) {
            // Insert the new character in your platform
        }

        return result;
    }
}
```

The core package manages input method state and character resolution. Your extension provides the platform-specific event handling and character insertion logic.
