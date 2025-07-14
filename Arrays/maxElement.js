let arr = [];
for(i = 0; i < 10; i++) {
    // arr.push is better than assigning value one by one. (arr[i])
    arr.push(Math.floor(Math.random() * 100));
}
let max = arr[0];

for(i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
}
console.log("Max element is: ", max);


// another better way is: ....

const maxi = Math.max(...arr);
console.log("Maxi element is: ", maxi);

