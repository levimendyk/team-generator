const Employee = require("../utils/employee");

test("Can create a new employee", () => {
  const newEmployee = new Employee();
  expect(typeof newEmployee).toBe("object");
});
