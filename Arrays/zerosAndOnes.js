// Q. move all the zeros to left and all the ones to right in a binary array.

let arr = [1, 0, 1, 1, 0, 0, 1, 0, 1, 0];
// using two pointer approach:
let i = 0;
let j = 1;

while(j < arr.length) {
    if(arr[i] === 0) {
        i++;
    }
    if(arr[j] === 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // swaping by destructing
        j++;
    } else {
        j++;
    }
}
console.log(arr);
