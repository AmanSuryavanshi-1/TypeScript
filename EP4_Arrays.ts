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