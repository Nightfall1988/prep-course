export {};

function Circle(radius: number) {
  this.radius = radius;
  this.area = function() {
      var area: number = Math.pow(radius,2) * 3.14;
      return area;
  };
  this.perimeter = function() {
    var perimeter: number = radius * 3.14 * 2
    return perimeter;
  };
}

const c = new Circle(3);
console.log("Area =", c.area()); // Expected output: Area = 28.27
console.log("Perimeter =", c.perimeter()); // Expected output: Perimeter = 18.85



