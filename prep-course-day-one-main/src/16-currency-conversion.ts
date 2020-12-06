export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 * Find a way to add 1% to all currency conversions (think about the DRY (don't repeat yourself) principle)
 */

// You are allowed to change this function
function convertToUSD(price: number) {
    var usd = price * 1.4
        var fee = usd * 0.01
        var fullPrice = usd.toFixed(2) + fee.toFixed(2);
        return fullPrice;
    }
// You are allowed to change this function
function convertToBRL(price: number) {
        var brr = price * 1.3
        var fee = brr * 0.01
        var fullPrice = brr.toFixed(2) + fee.toFixed(2);
        return fullPrice;
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSD(price);
const priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/