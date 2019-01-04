
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(array, element) {
  const newBars = [element, ...array];
  return newBars;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  const newerBars = [...array, element];
  return newerBars;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  console.log(array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1, array.length - 2);
  return array;
}
