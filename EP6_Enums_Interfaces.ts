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

const amanOP: User12 = {dbId:22, email: "a@history.com",
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
