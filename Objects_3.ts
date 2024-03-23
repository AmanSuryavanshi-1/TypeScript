// $ Bad Behavior of Objects while defining its Types
        // const User = {
        //     name : 'John',
        //     email : 'john@gmail.com',
        //     isActive : true
        // }

        // function createUser({name: string, isPaid: boolean}){}

        // createUser({name:"John", isPaid:false, email: "john@gmail.com"})

//  => Giving error for email bcz createUser function does not have it.
//  => So, to make the intake of email or undefined function optional we can use Type alias.

// $ 7) Type Aliases
// --> Purpose:
//  -> Assign a more descriptive or convenient name to an existing type.
//  -> Improve code understanding by making complex types or frequently used types easier to reference.
//  -> Promote code reuse by allowing aliases to be shared across different parts of your project.

// --> Common Use Cases:
//  -> Aliasing complex object types, union types, or function types to make them more readable.
//  -> Creating reusable type definitions for frequently used data structures or patterns.

type User = {
    name : string,
    email : string,
    isActive : boolean
}

// => Now we can use the above User which defines the types of the elements
// => this way we will be able to reuse the types & make it more readable.
function createUser(uniqueUser: User): User{
    return {name:"", email:"", isActive:true}
}

createUser({name: "", email: "", isActive: false})