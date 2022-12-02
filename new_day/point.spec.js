const Point = require("./point");

describe("Point", () => {
  const point = new Point(5, 4, 25);
  test("defines setSelected(value) and isSelected()", () => {
    expect(typeof point.setSelected).toBe("function");
    expect(typeof point.isSelected).toBe("function");
  });

  test("setSelected sholud set selected if not already selected", () => {
    point.setSelected(1);
    expect(point.isSelected()).toBeFalsy();

    point.setSelected(25);
    expect(point.isSelected()).toBeTruthy();
    point.setSelected(1);
    expect(point.isSelected()).toBeTruthy();
  });
});
