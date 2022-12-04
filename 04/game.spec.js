const Utils = require('../util');

const intervalIncludes = (i1, i2) => {
  const result = i1.start >= i2.start && i1.end <= i2.end ||
    i2.start >= i1.start && i2.end <= i1.end;
  console.log(i1, i2, result);
  return result;
};

const intervalPart2 = (i1, i2) => {
  // x1 <= y2 && y1 <= x2
  const result = i1.start <= i2.end && i2.start <= i1.end;
  console.log(i1, i2, result);
  return result;
}

function calculatePrio(s) {
  if (!s) {
    return 0;
  }
  const prio = s.charCodeAt(0);
  return prio > 96 ? prio - 96 : prio - 38;
}

const getInterval = (arr) => {
  return {
    start: Number(arr[0]),
    end: Number(arr[1])
  }
};
const splitPair = (s) => {
  return {};
};
let testData = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;


const utils = new Utils();

describe("Game", () => {

  test("parseData should return an object with numbers and boards", () => {

    //  const inputData = utils.splitString(testData)
    const inputData = utils.syncReadFile('input')
      .filter(inp => inp !== '')
      .map(pair => pair.split(','))
      .map(pair => {
        const int1 = pair[0].split('-');
        const int2 = pair[1].split('-');
        return {
          intervall1: getInterval(int1),
          intervall2: getInterval(int2)
        }
      })
      // filter part one
      //.filter(team => intervalIncludes(team.intervall1, team.intervall2));
      // filter part 2
      .filter(team => intervalPart2(team.intervall1, team.intervall2));
    //.forEach(p => console.log(p + '\n'));
    console.log(inputData.length);
    // const data = utils.splitString(testData)

  });

  xtest("execute part 2", () => {
    //const data = utils.splitString(testData);

    //console.log(data);
    const data = utils.syncReadFile('input');
    const groupedData = [];
    for (let i = 0; i < data.length; i += 3) {
      groupedData.push(data.slice(i, i + 3));
    }
    const badges = groupedData.map(rucksack => {
      return {
        e1: rucksack[0].split(''),
        e2: rucksack[1]?.split(''),
        e3: rucksack[2]?.split('')
      };
    })
      .map(r => {
        const r12 = r.e1.filter(b => r.e2.includes(b));
        const r123 = r12.filter(b => r.e3.includes(b));
        return r123[0];
      })
      .map(badge => calculatePrio(badge))
      .reduce((acc, add) => acc + add, 0);
    console.log(badges);
  });
});
