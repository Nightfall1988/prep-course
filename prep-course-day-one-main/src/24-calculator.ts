export {};

function add(num1: number, num2: number) {
    return num1 + num2;
}

function subtract(num1: number, num2: number) {
    return num1 - num2;
}

function sum(list:number[]) {
    var output:number;
    for(var i = 0;i<list.length;i++) {
        output += list[i];
   }
   return output;
}

function multiply(list:number[]) {
        var output:number;
    for(var i = 0;i<list.length;i++) {
        output *= list[i];
   }
   return output;
}

function power(x:number, y:number) {
    var output:number
    output = Math.pow(x, y);
    return output;
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
