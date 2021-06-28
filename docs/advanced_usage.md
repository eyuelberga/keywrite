# Advanced Usage

## Extending the core package

By extending the exported class from `@keywrite/core` you can add
app-specific logic. The most important method in the core class would be the
`write` method. This method takes in a character and resolves it into a special
symbol as per the input-method specification and returns the symbol and replacement
state (if previous character needs to be replaced with the new symbol).
