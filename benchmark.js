import { pairMatchesHashApproach, pairMatchesbinarySearch } from "./algorithms.js";
const numberOfTries = 100;
const arrSizes = [10, 100, 1000, 10000, 100000];

function generateSampleArr(arrSize) {
  const sum = Math.floor(Math.random() * arrSize * 1.5);
  // Use set to follow the non repeated numbers constraint
  const numbersSet = new Set();
  for (let i = 0; i < arrSize; i++) {
    const sign = Math.random() * 2;
    if (sign >= 1) {
      numbersSet.add(Math.floor(Math.random() * arrSize * 1.5));
    } else {
      numbersSet.add(Math.floor(Math.random() * arrSize * 1.5 * -1));
    }
  }
  return {
    sum,
    arr: [...numbersSet]
  }
}

function benchmark() {
  console.log("Benchmarking hash approach:");
  for (const size of arrSizes) {
    const times = [];
    for (let i = 0; i < numberOfTries; i++) {
      const {sum, arr} = generateSampleArr(size);
      const initTimestamp = Date.now();
      pairMatchesHashApproach(arr, sum);
      const endTimestamp = Date.now();
      times.push(endTimestamp - initTimestamp);
    }
    const mean = times.reduce((prev, current) => prev + current, 0) / times.length;
    console.log(`Avg. Time for ${size} values: ${mean}`)
  }
  console.log("Benchmarking binary approach:");
  for (const size of arrSizes) {
    const times = [];
    for (let i = 0; i < numberOfTries; i++) {
      const {sum, arr} = generateSampleArr(size);
      const initTimestamp = Date.now();
      pairMatchesbinarySearch(arr, sum);
      const endTimestamp = Date.now();
      times.push(endTimestamp - initTimestamp);
    }
    const mean = times.reduce((prev, current) => prev + current, 0) / times.length;
    console.log(`Avg. Time for ${size} values: ${mean}`)
  }
}

benchmark();

