import { pairMatchesHashApproach, pairMatchesbinarySearch} from "../algorithms";

export default {
  testEnvironment: 'jest-environment-node',
  transform: {}
};

let numbersSet = new Set();
let sum = 0;

beforeEach(() => {
  sum = Math.floor(Math.random() * 1e4);
  // Use set to follow the non repeated numbers constraint
  numbersSet = new Set();
  for(let i = 0; i < 1e5; i++) {
    const sign = Math.random() * 2;
    if(sign >= 1) {
      numbersSet.add(Math.floor(Math.random() * 1e4));
    } else {
      numbersSet.add(Math.floor(Math.random() * 1e4 * -1));
    }
  }
})

describe("hashApproachModule", () => {
  test("All the values retrieved are correct", () => {
    const pairs = pairMatchesHashApproach([...numbersSet], sum);
    pairs.forEach(([value1, value2]) => {
      expect(value1 + value2).toBe(sum);
    });
  }); 
  test("There's no repeated answer", () => {
    const pairs = pairMatchesHashApproach([...numbersSet], sum);
    for(let i = 0; i < pairs.length; i++) {
      const [solutionValue1, solutionValue2] = pairs[i];
      for(let j = i + 1; j < pairs.length; j++) {
        const [anotherSolutionvalue1, anotherSolutionvalue2] = pairs[j];
        if(solutionValue1 === anotherSolutionvalue1 || solutionValue1 === anotherSolutionvalue2) {
          throw new Error(`Repeated values found: ${solutionValue1}`);
        } else if(solutionValue2 === anotherSolutionvalue1 || solutionValue2 === anotherSolutionvalue2) {
          throw new Error(`Repeated values found: ${solutionValue2}`);
        }
      }
    }
  });
  test("It contains the desired number of answers", () => {
    expect(pairMatchesHashApproach([1, 9, 5, 0, 20, -4, 12, 16, 7], 12).length).toBe(3);
    expect(pairMatchesHashApproach([0, 1, -1, -2, -5, -4, 3, 4, 5], 12).length).toBe(0);
    expect(pairMatchesHashApproach([1, 9, 5, 0, 20, -4, 12, 16, 7, -12, 24], 12).length).toBe(4);
  });
});

describe("binaryApproachModule", () => {
  test("All the values retrieved are correct", () => {
    const pairs = pairMatchesbinarySearch([...numbersSet], sum);
    pairs.forEach(([value1, value2]) => {
      expect(value1 + value2).toBe(sum);
    });
  }); 
  test("There's no repeated answer", () => {
    const pairs = pairMatchesbinarySearch([...numbersSet], sum);
    for(let i = 0; i < pairs.length; i++) {
      const [solutionValue1, solutionValue2] = pairs[i];
      for(let j = i + 1; j < pairs.length; j++) {
        const [anotherSolutionvalue1, anotherSolutionvalue2] = pairs[j];
        if(solutionValue1 === anotherSolutionvalue1 || solutionValue1 === anotherSolutionvalue2) {
          throw new Error(`Repeated values found: ${solutionValue1}`);
        } else if(solutionValue2 === anotherSolutionvalue1 || solutionValue2 === anotherSolutionvalue2) {
          throw new Error(`Repeated values found: ${solutionValue2}`);
        }
      }
    }
  });
  test("It contains the desired number of answers", () => {
    expect(pairMatchesbinarySearch([1, 9, 5, 0, 20, -4, 12, 16, 7], 12).length).toBe(3);
    expect(pairMatchesbinarySearch([0, 1, -1, -2, -5, -4, 3, 4, 5], 12).length).toBe(0);
    expect(pairMatchesbinarySearch([1, 9, 5, 0, 20, -4, 12, 16, 7, -12, 24], 12).length).toBe(4);
  });
});