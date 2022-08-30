const Manager = require("../utils/manager");

test("Can respond with an office number", () => {
  const testValue = 100;
  const newManager = new Manager("Bob", 1, "test@test.com", testValue);
  expect(newManager.officeNumber).toBe(testValue);
});
