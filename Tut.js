    var user = { name: "Aman", age: 21 };
    console.log(user);

// $ 3) No TypeSafety

var greetings = "Hello";
// greetings = 9;       No error
// greetings = true;    No error   
// greetings = "yoyo";  No strings
// ->  in .js files this error is not shown
var num = 1;
// num.toLowerCase();   No error
console.log(greetings);
