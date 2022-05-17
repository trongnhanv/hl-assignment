export const isOddNumber = (number) => {
  if (typeof number !== "number") {
    return false;
  }
  return Math.abs(number) % 2 === 1;
};

export const isEvenNumber = (number) => {
  if (typeof number !== "number") {
    return false;
  }
  return Math.abs(number) % 2 === 0;
};

export const countTotalOfArray = (array) => {
  if (!Array.isArray(array)) {
    return false;
  }

  return array.length;
};

export const findOddNumbersInArray = (array) =>
  array.filter((element) => isOddNumber(element));

export const findEvenNumbersInArray = (array) =>
  array.filter((element) => isEvenNumber(element));

export const findMinInArray = (array) => {
  const totalElementOfArray = countTotalOfArray(array);
  if (totalElementOfArray === 0) {
    return 0;
  }

  let min = array[0];
  for (let i = 0; i < totalElementOfArray; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  return min;
};

export const findMaxInArray = (array) => {
  const totalElementOfArray = countTotalOfArray(array);
  if (totalElementOfArray === 0) {
    return 0;
  }

  let max = array[0];
  for (let i = 0; i < totalElementOfArray; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
};
