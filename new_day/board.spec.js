const Board = require("./board");

const testData = ``;
let tested = new Board();
describe("Board", () => {
  test("defines interface", () => {
    expect(typeof tested.parseData).toBe("function");
  });

  test("parseData should return a list of point of data", () => {
    actual = tested.parseData(testData);
    expect(actual.length).toBe(25);
  });

  test("hasFullRow should return true when all values in a row is selected", () => {});

  test(`hasFullColumn should return true when all values in a column is selected`, () => {});
});
