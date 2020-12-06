export {};
function truncateString(word: string, length: number) {
    return word.substring(0,length);
}
console.log(truncateString("CODELEX", 4)); // Expected output: CODE
