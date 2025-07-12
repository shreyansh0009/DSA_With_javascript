//i. Using 'temp' variable
let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);


//ii. XOR operator:
let x = 50;
let y = 60;

x = x ^ y;
y = x ^ y;
x = x ^ y;
console.log(x);
console.log(y);


//iii. De-Structuring...hahaha
let p = 66;
let q = 856;
[p, q] = [q, p];
console.log(p, q);
