// stringLength.test.js

const stringLength = require("./app.js");

test("returns correct length of a string", () => {
  expect(stringLength("hello")).toBe(5);
  expect(stringLength("")).toBe(0);
  expect(stringLength("1234567890")).toBe(10);
});
