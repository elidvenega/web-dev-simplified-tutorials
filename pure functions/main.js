// Pure Functions
// A function does not have any side effects
// inputs are immutable variables

const array = [1, 2, 3];

function addElementToArray(a, element) {
  return [...a, element];
}

console.log(addElementToArray(array, 4));

// array = [1,2,3,4]