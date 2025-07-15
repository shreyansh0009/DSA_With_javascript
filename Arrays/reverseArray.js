let arr = [];
for(let i = 0; i <= 10; i++) {
    arr.push(Math.floor(Math.random() * 100));
}
console.log(arr);

// i. brute-force approach:
let arr2 = [];
for(let i = arr.length - 1; i >= 0; i--) {
    arr2.push(arr[i]);
}

// ii. Optimal approach: two-pointers, and no extra space.
let left = 0;
let right = arr.length - 1;
while(left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
}

console.log(arr);
console.log(arr2);

