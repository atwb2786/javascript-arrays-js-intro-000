
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  const newBars = [element, ...array];
  return newBars;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  console.log(element, ...array);
}
