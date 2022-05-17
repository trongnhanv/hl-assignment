export const miniMaxSum = (array) => {
  const length = array.length;
  let min = array[0];
  let max = array[0];
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += array[i];
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }

  return { min: sum - max, max: sum - min };
};
