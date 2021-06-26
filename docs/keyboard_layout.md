# Keyboard Layout

A keyboard layout maps keyboard inputs to symbols. It allows us to define key combinations that
produce a certain symbol. It is generally a JavaScript object with an
input character, an output value or a next value.

A keyboard layout has two basic components:

1. Symbol map
1. Layout

Symbol map is an object with a `value` and `next` keys. Value specifies
