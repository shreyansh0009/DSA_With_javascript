// in js, arrays are not only of one data type, there can be int, string, objects, boolean etc.
// js use dynamic array, there is no static array. means they can grow and shrink automatically by inserting and removing element.

// declaration
let arr = [1, 2, 3];
console.log(arr.length); //3
arr.push(9);  // adds element to last
console.log(arr.length); //4
arr.pop(); // removes last element.
console.log(arr.length); //3
console.log(arr);
// now we seen above how array works dynamically in js.

let arr2 = [39, 54, 'saurabh', false, {name: 'shreyansh', age: 23}];
console.log(arr2); // arrays in js can hold any data type elements.
console.log(arr2[3]); // print element usign its index.

let arr3 = [];
arr3[0] = 7;
arr3[1] = 5;
arr3[2] = 0;

arr3[6] = 78; // the positions 3,4,5 will be empty and the 78 will be stored on positions of 6.
// this only happens in javascript.
// the previous places are empty, and again we can store elements on that positons.


// creating static array in javascript.

let arr4 = new Array(2);  // size is 3
arr4[0] = 45;
arr4[1] = 46;
arr4[2] = 47;
arr4[3] = 77;
arr4.push(99);
console.log(arr4);  // [ 45, 46, 47, 77, 99 ], size was only '2' but still, elements were pushed, soo there is nothing like static in javascript.


// Arrays using for loop.

let arrr = [];
for(i = 0; i <= 5; i++) {
    arrr[i] = Math.floor(Math.random() * 10);
}
console.log(arrr);










