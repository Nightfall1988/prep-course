export {};

function greatest(x:number, y:number) {
    var z: number = x - y;
    if(Math.sign(z) == -1) {
      return y;
    } else if (Math.sign(z) == 1) {
      return x;
    } else {
      return 'Equal';
    }
}


console.log(greatest(1, 2)); // Expected output: 2
console.log(greatest(5, 2)); // Expected output: 5
