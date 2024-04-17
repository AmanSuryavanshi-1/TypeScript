// $ 12) Tuples
// -> Tuples are a data structure in TypeScript that allow you to store multiple elements of different types.
// -> They are similar to arrays, but with a fixed number of elements and each element can have its own type.

// -> When you have an array with elements that can be either strings or numbers, you can declare it like this:
const Tuser: (string | number)[]=[1, "Aman"]

//--> Tuples maintain the order of data, unlike arrays where you can mix string and number types freely. In tuples, the order matters.
let user: [ number, string, boolean]
user = [1,"Aman", true]

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

// $ 13) Enums
// -> Enums, short for enumerations, are a feature in TypeScript that allow developers to define a set of named constants.
// -> These constants are typically used to represent a finite set of related values, such as the days of the week, directions (north, south, east, west), or status codes (success, error, pending).
// -> In TypeScript, enums provide a way to give more descriptive names to numeric values, making code more readable and maintainable.

// --> Each member has an associated numeric value, which can be either automatically assigned or explicitly defined.

// @ EG 1

enum TrafficLight {
    Red,
    Yellow,
    Green
}

// --> Enums can also be used in switch statements for improved code clarity:
let currentLight: TrafficLight = TrafficLight.Green;

// switch (currentLight) {
//     case TrafficLight.Red:
//         console.log("Stop!");
//         break;
//     case TrafficLight.Yellow:
//         console.log("Prepare to stop or proceed with caution.");
//         break;
//     case TrafficLight.Green:
//         console.log("Go ahead!");
//         break;
// }


// @ EG 2

// --> In this enum, if no value is assigned explicitly, TypeScript automatically assigns numeric values starting from 0. However, you can assign specific values to enum members:
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
// --> Here, Direction.Up has a value of 1, and subsequent members are assigned values sequentially from there (2, 3, and 4, respectively).

// -> Enums are handy for defining a set of related constants, providing type safety, and improving code readability.

// @ EG 3

enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = 3,
    WINDOW, //4
    FORTH   //5
}
// -> 1. AISLE is assigned the string value "aisle".
// -> 2. MIDDLE is assigned the numeric value 3.
// -> 3. WINDOW and FORTH follow the sequential numeric assignment from MIDDLE.

// $ 14) Interfaces
// -> An interface in TypeScript is a way to define a contract for an object.
// -> It allows you to specify the structure of an object including its properties and methods, without providing the implementation details. 
// -> Think of it as a blueprint or a set of guidelines for how an object should be shaped.

interface User12{
readonly dbId: number,  // cannot be changed
email: string,
userId?: number,        // optional pass it or not doesn't matter ?

startTrial(): string,   // OR startTrial:() => string, 

getCoupon(couponName: string ,value: number):number
}

const aman1: User12 = {dbId:22, email: "h@history.com",
    userId:22,
    startTrial:() =>{
        return "trial started";
    },
    getCoupon: (couponName: "string", value: 2024) => {
        return value;
    }
}

// -> When a class implements an interface, it must provide implementations for all the members defined in the interface. 
// -> This helps in maintaining consistency and enables type checking during development

// -> They are particularly useful when you want to enforce a specific structure or shape for objects in your application.

// ~ Interfaces vs Types
// -> Interfaces are for defining object structures (what properties an object should have and their types).
// -> Types are for defining data types of variables, function parameters, and return values.

// => Choosing Between Interfaces and Types:
// -> Use interfaces when you need to define a contract for objects, ensuring they have the correct properties and types.
// -> Use types when you simply need to specify the data type of a variable, function argument, or return value.




























