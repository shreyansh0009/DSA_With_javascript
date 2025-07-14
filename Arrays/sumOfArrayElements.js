let arr = [];

for (i = 0; i < 5; i++) {
    arr[i] = Math.floor(Math.random()*10);
}

let sum = 0;

for(i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(arr);

console.log("Sum is: ", sum);
