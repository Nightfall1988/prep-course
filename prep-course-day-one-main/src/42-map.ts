export {};

function tidyUpString(str:string) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

function capitalise(arr:string[]) {
  var newArr =[]
  newArr = arr.map(name => tidyUpString(name));
  newArr = newArr.map(name => name.charAt(0).toUpperCase() + name.substr(1))
  return newArr;
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
var mentorsTidy = capitalise(mentors); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
