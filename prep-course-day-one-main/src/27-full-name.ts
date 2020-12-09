export {};

/**
 * Create a function called fullName, which concatenates two strings together
 */

function fullName(firstName:string, lastName:string) {
    var fullName: string = '';
    return fullName.concat(firstName, " ", lastName)
}

console.log(fullName("John", "Doe")); //Expected output: 'John Doe'
