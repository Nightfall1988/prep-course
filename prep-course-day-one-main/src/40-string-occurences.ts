export {};

const count = (str:string, word:string) => str.toLowerCase().split(word.toLowerCase()).length-1;

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
