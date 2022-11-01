// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  return Math.max(num1, num2);
}

// Iteration #2: Find longest word

function findLongestWord(arr) {
  if (arr.length === 0) {
    return null;
  }

  let sortedArr = arr.sort(
    (currentElement, nextElement) => nextElement.length - currentElement.length
  );

  return sortedArr[0];
}

// Iteration #3: Calculate the sum

function sumNumbers(arrOfNums) {
  if (arrOfNums.length === 0) {
    return 0;
  }

  return arrOfNums.reduce((a, b) => a + b);
}

// Iteration #3.1 Bonus:

function sum(arr) {
  let sum = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    sum += checkValue(arr[i]);
  }

  return sum;
}

function checkValue(value) {
  if (typeof value === "string") {
    return value.length;
  }
  if (typeof value === "object") {
    throw new Error("Unsupported data type sir or ma'am");
  }

  return value;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers

function averageNumbers(arr) {
  if (arr.length === 0) {
    return null;
  }

  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

// Level 2: Array of strings

function averageWordLength(arr) {
  if (arr.length === 0) {
    return null;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].length;
  }

  return sum / arr.length;
}

// Bonus - Iteration #4.1

function avg(arr) {
  if (arr.length === 0) {
    return null;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += convertValue(arr[i]);
  }

  return sum / arr.length;
}

function convertValue(value) {
  if (typeof value === "string") {
    return value.length;
  }

  if (value === true) {
    return 1;
  }

  if (value === false) {
    return 0;
  }

  return value;
}

// Iteration #5: Unique arrays

function uniquifyArray(arr) {
  if (arr.length === 0) {
    return null;
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

// Iteration #6: Find elements

function doesWordExist(arr, wordToFind) {
  if (arr.length === 0) {
    return null;
  }

  return arr.includes(wordToFind);
}

// Iteration #7: Count repetition

function howManyTimes(arr, searchedWord) {
  if (arr.length === 0) {
    return 0;
  }

  return arr.filter((word) => word === searchedWord).length;
}

// Iteration #8: Bonus

// With this matrix the function whould return 10000:
const matrix1 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 10, 10, 10],
];

// With this matrix the function whould also return 10000:
const matrix2 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

function greatestProduct(matrix) {
  // variable to save final result:
  let product = 0;
  // variable to save the result from every loop in order to compare them to save in "product" the bigger one:
  let newProduct = 0;

  // loop through every element (array) of the array "matrix" ("rows"):
  for (let arrIndex = 0; arrIndex < 20; arrIndex++) {
    //
    // loop through every element (number) of the current array ("columns"):
    for (let numberIndex = 0; numberIndex < 20; numberIndex++) {
      // check if the position of the current number is less than position 16,
      // (because we cannot multiple 4 adjacent "horizontal" numbers from the "column" 17)
      if (numberIndex <= 16) {
        // save in variable the product of four "horizontal" adjacent numbers:
        newProduct =
          matrix[arrIndex][numberIndex] *
          matrix[arrIndex][numberIndex + 1] *
          matrix[arrIndex][numberIndex + 2] *
          matrix[arrIndex][numberIndex + 3];

        // compare the obtained product with number in "product" to save in "product" the bigger one:
        if (newProduct > product) {
          product = newProduct;
        }
      }

      // check if the position of current array inside big array "matrix" is less than 17
      // because we cannot multiply "vertically" adjacent numbers from "row" 17:
      if (arrIndex <= 16) {
        // save in variable the product of four "vertically" adjacent numbers:
        newProduct =
          matrix[arrIndex][numberIndex] *
          matrix[arrIndex + 1][numberIndex] *
          matrix[arrIndex + 2][numberIndex] *
          matrix[arrIndex + 3][numberIndex];

        if (newProduct > product) {
          product = newProduct;
        }
      }
    }
  }

  return product;
}

console.log(greatestProduct(matrix1)); // 10000
console.log(greatestProduct(matrix2)); // 10000

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct,
  };
}
