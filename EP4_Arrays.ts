// $ 10) Arrays in TS

// ~ EG 1
// How to define type in arrays in TS
const array: string[] = []

const array2: number[] = []
//@ OR
const array3: Array<number> = [] 

array.push("spidermon")
array2.push(2)

// ~ EG2

// Define the User interface
type User1 = {
    name: string; // name should be a string
    isActive: boolean;
}
//  ! If you define a type with the same name in multiple files, it can lead to conflicts.
//  ! For instance, if you have a type named User in one file and another file also defines a type named User, it might cause confusion or conflicts when importing or using these types.
//--> To avoid this conflict, I changed it to user1
// Declare an array of Users
const allUsers: User1[] = [];

// Try to push a user object into the array
allUsers.push({
    name: "", // Attempting to assign an empty string to name
    isActive: true,
});

// $ 11) Union Type
// -> Use union type instead of any in TS (Recommended)
// -> In TypeScript, a union type allows you to declare a variable that can hold values of different types. You define a union type by using the pipe | symbol between the types you want to include

// @EG 1
// Defining a union type
let myVar: number | string;

// Assigning values
myVar = 10; // Valid
myVar = "Hello"; // Valid
// myVar = true; // ? Error: Type 'boolean' is not assignable to type 'number | string'

//  @ EG 2
type User = {
    name : string;
    id:number;
}

type Admin = {
    username:string;
    id:number
}

let aman: User | Admin = {name: "Aman", id:12}

// Allowed to redefined users
aman = {username: "Aman", id:12}

//  @ EG 3


getDBId(3)
getDBId("3");

// function getDBId(id: number | string){
//     console.log(`DB id is : ${id}`);
//     id.toLowerCase();
// }
// ?  It will throw error as toLowerCase is not applicable on numbers 
// -> So for that we will do a check if id is a string then only toLowerCase will be applied

function getDBId(id: number | string){
    if(typeof id === 'string'){
    id.toLowerCase();
    }
}

/* const data: number[] = [1,2,3];
const data2: string[] = ['1','2','3'];
// const data3: any[] = ['1','2',3, true];
// -> use union instead of any 
 const data3: (string | number | boolean) [] = ['1','2',3, true];
 */












