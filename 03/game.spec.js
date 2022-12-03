const Utils = require('../util');
const Game = require("./game");

function calculatePrio(s) {
  if (!s) {
    return 0;
  }
  const prio = s.charCodeAt(0);
  return prio > 96 ? prio - 96 : prio - 38;
}

let testData = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;
const utils = new Utils();

let tested = new Game();
describe("Game", () => {
  test("defines interface", () => {
    expect(typeof tested.parseData).toBe("function");
  });

  xtest("parseData should return an object with numbers and boards", () => {

    const inputData = utils.syncReadFile('input');
    console.log(inputData);
    // const data = utils.splitString(testData)
    const data = inputData.map(d => {
      const middle = d.length / 2;
      return {
        c1: d.slice(0, middle).split(''),
        c2: d.slice(middle, d.length).split('')
      };
    })
      .map(r => new Set(r.c1.filter(c => r.c2.includes(c))))
      .map(items => calculatePrio(Array.from(items)[0]))
      .reduce((acc, add) => acc + add, 0);

    console.log(data);

  });

  test("execute part 2", () => {
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
