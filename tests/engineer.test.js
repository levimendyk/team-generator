const Engineer = require("../utils/engineer");

test("Can respond with a GitHUb account", () => {
  const testValue = "GitHubUser";
  const newEngineer = new Engineer("Bob", 1, "test@test.com", testValue);
  expect(newEngineer.github).toBe(testValue);
});
