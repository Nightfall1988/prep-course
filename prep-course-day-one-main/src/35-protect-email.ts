export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */
function protectEmail(email:string) {
    var splittedEmail:String[] = []
    splittedEmail = email.split("@");
    const userName = splittedEmail[0];
    const firstThreeLetters = userName.substring(0,3)
    return firstThreeLetters + '...' + '@' + splittedEmail[1];
}
console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com