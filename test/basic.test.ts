import webInit from "../src/webInit";

test("Page render", () => {
  expect(webInit()).toBe(true);
});
