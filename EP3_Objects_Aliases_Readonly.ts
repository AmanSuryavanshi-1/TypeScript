// $ 7) Bad Behavior of Objects while defining its Types

     /* function createUser({name: string, isPaid: boolean}){}

        createUser({name:"John", isPaid:false, email: "john@gmail.com"})     // ?  gives error for email */ 

//  => Giving error for email bcz createUser function does not have it.
//  => So, to make the intake of email or undefined function optional we can use Type alias.

// $ 8) Type Aliases
// --> Purpose:
//  -> Assign a more descriptive or convenient name to an existing type.
//  -> Improve code understanding by making complex types or frequently used types easier to reference.
//  -> Promote code reuse by allowing aliases to be shared across different parts of your project.

// --> Common Use Cases:
//  -> Aliasing complex object types, union types, or function types to make them more readable.
//  -> Creating reusable type definitions for frequently used data structures or patterns.

// ~ EG 1
        /* type User = {
            name : string,
            email : string,
            isActive : boolean
        } */

// => Now we can use the above User which defines the types of the elements
// => this way we will be able to reuse the types & make it more readable.
    /* function createUser(uniqueUser: User): User{
        return {name:"", email:"", isActive:true}
    }

    createUser({name: "", email: "", isActive: false}) */

// ~ EG 2
// -> This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.
// -> A type alias is exactly that - a name for any type. The syntax for a type alias is:

type Point = {
  x: number;
  y: number;
};
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });

// You can actually use a type alias to give a name to any type at all, not just an object type.
// For example, a type alias can name a union type:

type ID = number | string;

// $ 9) readonly keyword & optional in typescript

// -> Prefix readonly is used to make a property as read-only. 
// -> Read-only members can be accessed outside the class, but their value cannot be changed.

// ~ EG 1 :-
type UserAS = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  creditCardNum ?: number;
  // -> Optional (?) is useful when dealing with situations where there may or may not be variables or parameters.
  // -> This feature allows for more flexible and secure code writing
}

let myUser: UserAS ={
  _id: "1235",
  name: "h",
  email: "aman@mail.com",
  isActive: false
}

// myUser._id = "asd" // ? Throws Error That :- Cannot assign to '_id' because it is a read-only property.
myUser.email = "aman@mail.com"

// ~ EG 2 :-
type cardNumber = {
  cardNum: string
}
type cardDate = {
  cardDa: string
}
// -> Defines a type named cardDetails.
// -> This type combines properties from cardNumber and cardDate using intersection (&).
// -> It adds an additional property:
// -> cvv: A number to store the card's security code (CVV).
type cardDetails = cardNumber & cardDate & {
  cvv : number
}