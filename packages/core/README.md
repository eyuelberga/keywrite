## @keywrite/core

This package contains the core module for Keywrite. It doesn't do much by itself,
but can be extended to support different use cases

## Installation

```sh
$ yarn add @keywrite/core

# or

$ npm install @keywrite/core
```

## Basic usage

By extending the exported class from `@keywrite/core` you can add
app-specific logic. The most important method you would use would be the `write` method. This method
takes in a character and resolves it into a special symbol as per the layout
specification and returns the symbol and replacement state(if previous character needs to be replaced with the new symbol).

## License

MIT © [Eyuel Berga](https://github.com/eyuelberga)
