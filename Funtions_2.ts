// $ 6) Types of Functions in TypeScript

// --> Whenever there's any then there's a problem in TypeScript.

// ~ EG 1
        /* // function addTwo(num){
        // num.toUpperCase();                // ? No Error
        //     return num + 2;
        // }

        function addTwo  (num: number){
            // num.toUpperCase();           // ? Gives error now
            console.log(num + 2);
        
        }

        addTwo(5); */

// ~ EG 2
        /* const getUpper = (val: string) => {
            return val.toUpperCase();
        }

        // getUpper(5);                    // ? Gives error
        // getUpper("5");                  // ? No Error bcz it's a string
        getUpper("Hello") */

// ~ EG 3
        /* const signUpUser = (name: string, email:string, isPaid: boolean) =>{}

        signUpUser("aman","aman@gmail.com",false); */


// ~ EG 4 => When only known perimeters are passed
        /* // const loginUser = (name: string, email:string, isPaid: boolean) =>{}
        // loginUser("as", "as@gmail.com" )        // ? Gives error 

        // -> To avoid this error and to pass only two perimeters then we have to set default value to false
        const loginUser = (name: string, email:string, isPaid:boolean = false) =>{}

        loginUser("as", "as@gmail.com" )        // ?  No error  */

// ~ EG 5 How to give a type to the value returned by function

        /* function addTwo(num: number): number {
                //  return "hello";     // ? Gives Error
                    return num + 2;     // ? No Error
                } */


// ~ EG 6 => How function can return two types?

        /* const getValue = (myVal: number): boolean => {
            if(myVal>5){
                return true;
            }
            return "OK"         // ? gives error
        } */

// => TypeScript doesn't directly support functions returning two distinct types.
// -> However, there are several effective techniques to achieve a similar behavior:

// --> 1. Union Types:
// -> Define a union type that combines the possible return types.
// -> The function can return a value compatible with any of the types in the union
        /* const getValue = (myVal: number): boolean | string => {
            if(myVal>5){
                return true;
            }
            return "OK"        
        }  */
// --> 2. Tuples:
// -> For returning a fixed-size array of specific types, use tuples.
// -> Declare the tuple type with the desired element types.
        /* function getFullName(firstName: string, lastName: string): [string, string] {
        return [firstName, lastName];
        } */


// ~ EG 7 Types in maps

        const heros = ["thor", "spidermon", "ironman", "homelander:)"]
        /* //const heros = [1,2,3,4];

        heros.map((hero)=>{
            return `hero is ${hero}`
        }) */

// -> ContextSwitching is easily handled by TS in map.
// -> It automatically switches the type when the values are provided.
// -> In case of string object it automatically switches the type to string.
// -> & in case of number object it automatically switches the type to number.

// -> We can avoid mentioning type in map

        /* heros.map((hero : string)=>{
            return `hero is ${hero}`
        }) */

        // --> The best way of wrting it by mentioning the type which map will return & avoiding the type which map is taking
        // --> Mentioning the type of return value is string
        
        /* heros.map((hero) : string =>{
            return `hero is ${hero}`
        }) */

// ~ EG 8 Void

// -> Used to explicitly declare that a function does not return any meaningful value.
// -> Enhances type safety and code readability by making it clear that the function's primary purpose isn't to return data.

function consoleError(errmsg : string) : void {
    console.log(errmsg);
    // return 1;       // ? Error: void type will return no value
} 

// ~ EG 8 Never
// -> Some function never returns a  value
// -> Signifies that a function never returns normally or throws an error that can't be handled.
// ->  Useful for functions that always loop infinitely, throw exceptions, or exit the program.
function handleError(errmsg : string) : never {
    throw new Error(errmsg);
    // return 1;       // ? Error: void type will return no value
} 


export{}