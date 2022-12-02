module.exports = class Point {
  constructor(x, y, value) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.selected = false;
  }
  /**
   * if selected is false then sets selected to true if
   * val is same as value of point
   */
  setSelected(val) {
    if (this.selected) {
      return;
    }
    this.selected = this.value === val;
  }

  isSelected() {
    return this.selected;
  }
};
