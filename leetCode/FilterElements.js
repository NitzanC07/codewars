/**
 * Filter Elements from array
 *
 * Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
 *
 * The fn function takes one or two arguments:
 * > arr[i] - number from the arr
 * > i - index of arr[i]
 *
 * filteredArr should only contain the elements from the arr for which the expression
 * fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value)
 * returns true.
 *
 * Please solve it without the built-in Array.filter method.
 */

function filter(arr, fn) {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArray = [...filteredArray, arr[i]];
    }
  }
  return filteredArray;
}

const greaterThen10 = (n, i) => {
  return n > 10;
};

const firstIndex = (n, i) => {
  return i === 0;
};

const plusOne = (n, i) => {
  return n + 1;
};

const negativeValue = (n, i) => {
  return n < 0;
};

const oddIndices = (n, i) => {
    return i % 2 !== 0;
};

const evenValues = (n, i) => {
    return n % 2 === 0;
}

const arr = [5, 10, 23, -1, 30, 45, -22];
const arr2 = [-2, -1, 0, 1, 2];
const res = filter(arr2, plusOne);
console.log(res);
