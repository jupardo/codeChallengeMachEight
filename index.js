import { pairMatchesHashApproach, pairMatchesbinarySearch } from "./algorithms.js";
// Get argvs
const args = process.argv.slice(2);
const [algorithm, entryArr, entrySum] = args;
const numberArr = entryArr.split(" ").map((value) => Number.parseInt(value));
const sum = Number.parseInt(entrySum);
let responses;
if(algorithm === "hash") {
  responses = pairMatchesHashApproach(numberArr, sum);
} else if(algorithm === "binary") {
  responses = pairMatchesbinarySearch(numberArr, sum);
}
responses.forEach(([value1, value2]) => {
  console.log(value1, value2);
});