// As like other programming languages, when we divide a number it    prints only integer part,
//  but in js, it's not like that.

let a = 7;
let b = 3;
console.log(a / b); // 2.3333333333333335

// If we want to print only integer part then we need use a function.
console.log(Math.floor(a / b)); // 2


// Math functions in js.

// i. 'Math.floor', used to remove decimals, {decrease value} 9.9 = 9
console.log(Math.floor(15.76));

// ii. 'Math.ceil', used to remove decimals{increase value} 9.1 = 10
console.log(Math.ceil(9.9));


// iii. 'Math.round', used to round-off, 10.5 = 11, 10.4 = 10
console.log(Math.round(11.5));

// iv. 'Math.pow', used to calculate exponents.
console.log(Math.pow(2, 5));  //32

// v. 'Math.sqrt', used to find squre roots.
console.log(Math.sqrt(64));

// vi. 'Math.abs', abs = absolute, remove -ve from a no.
console.log(Math.abs(-233));

// vii. 'Math.max', finds max values between two integers.
console.log(Math.max(6, 3));

// viii. 'Math.min', finds min value between two integers.
console.log(Math.min(8, 4));

// ix. 'Math.randoom', used to generate random no. between 0.0 to 1
console.log(Math.random());





 




