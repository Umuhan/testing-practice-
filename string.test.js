// stringLength.test.js

const reverseString = require("./app.js");

test("returns correct reverse of a string", () => {
  expect(reverseString("hello")).toBe("olleh");

  expect(reverseString("1234567890")).toBe("0987654321");
});
