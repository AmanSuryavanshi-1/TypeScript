// $ 1) TypeScript  
// -> 🧐 TypeScript is gaining popularity as it adds more type safety to JavaScript code, 
// ->       making it easier to catch errors and write more precise code.
// -> 🧐 TypeScript is a superset of JavaScript, meaning that all JavaScript code is valid TypeScript code.
// ->       TypeScript provides additional features and enhancements to JavaScript, but ultimately compiles down to JavaScript.
// -> 🧐 TypeScript is not meant to replace JavaScript, but rather to enhance it. 
// ->       Developers can still write and run JavaScript code within a TypeScript project, providing more flexibility and compatibility.
// -> 🧐 TypeScript offers static checking and analysis of code, which helps prevent errors and provides a smoother coding experience.
// ->       It allows developers to catch potential issues and find solutions before running the code.
// -> 🧐 TypeScript is a powerful development tool that helps improve code quality, maintainability, and scalability.
// ->       It allows for easier collaboration and reduces the likelihood of errors in the codebase.
// -> 🧐 TypeScript is not a standalone language, but rather a tool that enhances JavaScript.
// ->       It provides additional features, such as static typing, interfaces, and modules, to help developers write safer and more maintainable code.

let user = {name:"Aman" , age:21}

console.log(user);

// $ 2) tsc tut.ts
// -> will convert any .ts file into .js file.

// $ 3) TypeSafety
let greetings : string = "Hello";

// greetings = 9;       Gives error
// greetings = true;    Gives error   
// greetings = "yoyo";  Does not give error on strings

// -> This is the TypeSafety that is provided by typescript.

let num = 1;
// num.toLowerCase();   Gives error

// -> 🧐 TypeScript's main focus is on type safety, allowing developers to catch errors 
// ->       and find potential issues in their code during development, rather than at runtime.
console.log(greetings);


// $ 4) Number & Boolean 

// Number
let userId :number = 33421.2;

// Boolean
let isLoggedIn :boolean = false;


// $ 5) Any Type in TypeScript

// -> any type in TypeScript is a generic type used when a variable's type is unknown or when the variable's type hasn't yet been defined. 
// -> The any type is useful when converting existing JavaScript to TypeScript 
// -> as it allows one to gradually opt-in and opt-out of type checking during compilation.
// ->
let hero;

function getHero(){
    return "thor"
}

hero = getHero();








export {}
// To ignore squiggly lines