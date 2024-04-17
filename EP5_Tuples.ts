// $ 12) Tuples
// -> Tuples are a data structure in TypeScript that allow you to store multiple elements of different types.
// -> They are similar to arrays, but with a fixed number of elements and each element can have its own type.

// -> When you have an array with elements that can be either strings or numbers, you can declare it like this:
const Tuser: (string | number)[]=[1, "Aman"]

//--> Tuples maintain the order of data, unlike arrays where you can mix string and number types freely. In tuples, the order matters.
let userA: [ number, string, boolean]
userA = [1,"Aman", true]

// @ Eg 1
// Define a tuple
let myTuple: [string, number, boolean];

// Initialize the tuple
myTuple = ["Hello", 123, true];

// Accessing elements of the tuple
console.log(myTuple[0]); // Output: Hello
console.log(myTuple[1]); // Output: 123
console.log(myTuple[2]); // Output: true

// @ Eg 2
// -> TypeScript also provides some additional features for tuples, such as optional and rest elements.
// -> Optional elements allow you to declare certain elements of a tuple as optional by appending a ? to their type.
// -> Rest elements allow you to capture a variable number of elements into a single tuple element.

// Tuple with optional and rest elements
let myExtendedTuple: [string, number?, ...boolean[]];

// Initialize the tuple
myExtendedTuple = ["Hello", 123, true, false, true];

// Accessing elements of the tuple
console.log(myExtendedTuple[0]); // Output: Hello
console.log(myExtendedTuple[1]); // Output: 123
console.log(myExtendedTuple[2]); // Output: true
console.log(myExtendedTuple[3]); // Output: false
console.log(myExtendedTuple[4]); // Output: true

// => Tuples can be quite handy in scenarios where you need a fixed collection of elements with different types and a specific order.
// => However, it's important to use them judiciously and ensure that the structure remains clear and maintainable in your codebase.





























