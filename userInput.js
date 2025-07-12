let z = prompt("Enter a number: ");
console.log(z);
// here 'prompt()' function always return 'string' or store anything in string.
// if we want to store as a number, we need to use this method:

let age = Number(prompt("Enter your age: "));
console.log(typeof age);
// now the variable stored in number if it's a number.
// this process is called: "Type Casting"