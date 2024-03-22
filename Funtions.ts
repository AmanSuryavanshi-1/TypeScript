// $ 6) Types of Functions in TypeScript

// --> Whenever there's any then there's a problem in TypeScript.

// ~ EG 1
// function addTwo(num){
// num.toUpperCase();       No Error
//     return num + 2;
// }

function addTwo  (num: number){
    // num.toUpperCase();   Gives error now
    return num + 2;
}

addTwo(5);

