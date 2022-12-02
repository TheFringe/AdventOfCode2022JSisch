console.log("Advent of Code 02");

const testData = ``;

const measures = ``;

const result = {};

measures.split(/\r?\n/).forEach((val) => {
  //  const pair = val.split("");
  const keyValue = parseInt(pair[1], 10);
  const newVal = result.get(pair[0]) + keyValue;
  result.set(pair[0], newVal);
});

// console.log(result);
console.log(`02 part one: ${vector}`);
//.map((x) => parseInt(x, 10));
const resultPart2 = {};
measures.split(/\r?\n/).forEach((val) => {});
console.log(resultPart2);
console.log(`02 part two: ${vector}`);
