// import { readFileSync, promises as fsPromises } from 'fs';

const { readFileSync, promises: fsPromises } = require('fs');
/**
 * splits string by newline default
 */

module.exports = class Utils {
  constructor() { }
  splitString = (s = "", regExp = /\r?\n/) => s.split(regExp);
  // ✅ read file SYNCHRONOUSLY
  syncReadFile = (filename, regExp = /\r?\n/) => {
    const contents = readFileSync(filename, 'utf-8');

    const arr = this.splitString(contents, regExp);

    // console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

    return arr;
  }
};

