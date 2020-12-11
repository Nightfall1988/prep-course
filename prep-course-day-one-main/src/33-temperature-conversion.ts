export {};

/**
 * How to convert temperature -> https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature
 *
 * Create two functions fahrenheitToCelsius & celsiusToFahrenheit
 * 
 * Temperature should be rounded to one decimal place: i.e., fahrenheitToCelsius(100) should return 37.8 and not 37.77777777777778.
 */

function fahrenheitToCelsius(farenheit: number) {
   var celsius = (farenheit - 32) / 1.8
   return celsius.toFixed(1);
}
function celsiusToFahrenheit(celsius:number) {
    var farenheit = (celsius * 1.8) + 32
    return farenheit.toFixed(1);
}

console.log(fahrenheitToCelsius(32)); // Expected result: 0
console.log(celsiusToFahrenheit(0)); // Expected result: 32
