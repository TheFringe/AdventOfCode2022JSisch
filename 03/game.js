// const Board = require("./board");

module.exports = class Game {
  constructor(data = "") {
    this.gameData = this.parseData(data);
  }

  parseData(data = "") {
    const temp = data.split(/\r?\n\r?\n/);
    const result = [];
    for (let i = 1; i < temp.length; i++) {
      result.push(new Board(temp[i], i - 1));
    }

    return {
      numbers: temp[0].split(",").map((n) => parseInt(n, 10)),
      boards: result,
    };
  }
  run() {
    // for (let board of this.gameData.boards) {
    //   console.table(board.points);
    // }
    for (let n of this.gameData.numbers) {
      for (let board of this.gameData.boards) {
        board.selectPoint(n);
        if (board.hasFullRow() || board.hasFullColumn()) {
          const unmarked = board.unmarkedSum();
          return { last: n, unmarkedSum: unmarked, result: n * unmarked };
        }
      }
    }
    return -1;
  }

  runPart2() { }
};
