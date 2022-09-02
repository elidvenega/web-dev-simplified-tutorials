//impure function
let arr = [1, 2, 3, 4];

function addToArray(element) {
  return arr.push(element);
}
addToArray(5);
console.log(arr);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Pure Functions
// A function does not have any side effects
// inputs are immutable variables

const array = [1, 2, 3];

function addElementToArray(a, element) {
  return [...a, element];
}

console.log(addElementToArray(array, 4));

// array = [1,2,3,4]

// Create a pure function

function purefuncPractice(x, y) {
  return x * y;
}

console.log(purefuncPractice(3, 3));
console.log(purefuncPractice(3, 3));
console.log(purefuncPractice(3, 3));
console.log(purefuncPractice(3, 3));
console.log(purefuncPractice(3, 3));
