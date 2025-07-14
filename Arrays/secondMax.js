let arr = [];
for(i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100));
}

// let max = Math.max(arr[0], arr[1]);
// let secMax = Math.min(arr[0], arr[1]);

// for best approach and handle edge cases, initialize max and secmax with -Infinity.

let max = -Infinity;
let secMax = -Infinity;

for(let i = 2; i < arr.length; i++) {
    if(arr[i] > max) {
        secMax = max;
        max = arr[i];
    }
    else if(arr[i] < max && arr[i] > secMax) {
        secMax = arr[i];
    }
}

console.log(arr);
console.log("Max is: ", max);
console.log("Second Max is: ", secMax);


