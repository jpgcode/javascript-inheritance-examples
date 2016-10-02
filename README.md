## Javascript inheritance
As Javascript developers, we usually face some challenges in our daily basis, where we need our code to be maintanable and flexible. The nature of Javascript is different of any other languages because it is dynamic and do not provide a class implementation per se. (the *class* keyword is introduced in ES6, but is syntactical sugar, JavaScript remains prototype-based).

In medium/big Javascript applications, we need a way to link objects with other objects, to provide some way to inherit methods and properties and avoid code duplication.

###Javascript prototype
Every JavaScript object has a prototype. The prototype is also an object. All JavaScript objects inherit their properties and methods from their prototype.

Objects created using an object literal, or with new Object(), inherit from a prototype called Object.prototype.
The Object.prototype is on the top of the prototype chain.
All JavaScript objects (Date, Array, RegExp, Function, ....) inherit from the Object.prototype.

###The prototype chain
In Javascript, the way to link one object with other is using prototype. 