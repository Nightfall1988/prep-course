export {};

function concatenate(firstWord: string, secondWord: string, thirdWord: string) {
    var sentence = firstWord + ' ' + secondWord + ' ' + thirdWord
    return sentence;
  // Write the body of this function to concatenate three words together with space between them
}

const result = concatenate("Hello", "from", "CODELEX");
console.log(result); // Expected output: "Hello from CODELEX"
