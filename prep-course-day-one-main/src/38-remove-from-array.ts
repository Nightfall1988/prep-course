export {};

const removeFromArray = (arr:number[], num:number) => {
    const index = arr.indexOf(num)
    arr.splice(index, 1)
    return arr
}

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 3, 4]
