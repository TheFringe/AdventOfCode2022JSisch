const Game = require("./game");

const testData = ``;
let tested = new Game();
describe("Game", () => {
  test("defines interface", () => {
    expect(typeof tested.parseData).toBe("function");
  });

  test("parseData should return an object with numbers and boards", () => {
    const actual = tested.parseData(testData);
    expect(actual.boards.length).toBe(1);
  });

  test("execute With testdata", () => {
    tested = new Game(testData);
    const result = tested.run();
    console.log(`Resultat: ${result.result}`, result);
  });
  test("execute With data", () => {
    tested = new Game(data);
    const result = tested.run();
    console.log(`Resultat: ${result.result}`, result);
  });
  test("executePart2 With data", () => {
    //tested = new Game(testData);
    tested = new Game(data);
    // console.log(tested.gameData);
    const result = tested.runPart2();
    console.log(`Resultat Part 2: ${result.result}`, result);
  });
});

const data = ``;
