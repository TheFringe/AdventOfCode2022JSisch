const Point = require("./point");
module.exports = class Board {
  constructor(data = "", index = -1) {
    this.points = this.parseData(data); // parse data
    this.index = index;
  }

  parseData(data) {
    const result = [];
    const rows = data.split(/\r?\n/);
    this.columnsCount = rows.length;
    for (let y = 0; y < this.columnsCount; y++) {
      const temp = this.parseRowData(rows[y], y);
      result.push(...temp);
    }
    return result;
  }
};
