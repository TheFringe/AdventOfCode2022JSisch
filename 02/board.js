
const winMap = new Map();
winMap.set('AX', 3);
winMap.set('BY', 3);
winMap.set('CZ', 3);
winMap.set('AY', 6);
winMap.set('BZ', 6);
winMap.set('CX', 6);
winMap.set('AZ', 0);
winMap.set('BX', 0);
winMap.set('CY', 0);

const factorMap = new Map();
factorMap.set('X', 1);
factorMap.set('Y', 2);
factorMap.set('Z', 3);

const part2Map = new Map();
part2Map.set('AX', 'Z');
part2Map.set('AY', 'X');
part2Map.set('AZ', 'Y');
part2Map.set('BX', 'X');
part2Map.set('BY', 'Y');
part2Map.set('BZ', 'Z');
part2Map.set('CX', 'Y');
part2Map.set('CY', 'Z');
part2Map.set('CZ', 'X');

module.exports = class Board {
  constructor(data = "", index = -1) {
    //   this.points = this.parseData(data); // parse data
    this.index = index;
  }

  parseData(data) {
    const parsedResult = [];
    const rows = data.split(/\r?\n/);
    rows.forEach(r => {
      const row = r.split(' ');
      parsedResult.push({ a: row[0], x: row[1] });
    });
    console.log('parsed length: ' + parsedResult.length);
    return parsedResult;
  }
  parseDataPart2(data) {
    const parsedResult = [];
    const rows = data.split(/\r?\n/);
    rows.forEach(r => {
      const row = r.split(' ');
      const a = row[0];
      const q = row[1];
      const x = part2Map.get(a + q);
      parsedResult.push({ a, x });
    });
    console.log('parsed length: ' + parsedResult.length);
    return parsedResult;
  }
  calculateWins(data) {
    const result = [];
    data.forEach((value) => {
      //console.log(`key: ${key}, value: ${value}`);
      const val = this.calculateResult(value.a, value.x);
      result.push(Number(val));
    });
    console.log('result length: ' + result.length);
    return result;
  };

  calculateWinsPart2(data) {
    const result = [];


  }

  calculateResult(a, x) {
    // A,X Rock
    // B,Y Paper
    // C,Z Scissor
    const p = winMap.get(a + x);
    const f = factorMap.get(x);
    // console.log(`${a}${x} = ${p}+${f}`, f + p);
    return p + f;
  }
};


