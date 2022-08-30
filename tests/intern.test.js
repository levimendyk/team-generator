const Intern = require * "../utils/intern";

test("Can respond with a School Name", () => {
  const testValue = "DU";
  const newIntern = new Intern("Bob", 1, "test@test.com", testValue);
  expect(newIntern.school).toBe(testValue);
});
