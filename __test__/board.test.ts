import { createField } from "../src/objects/fieldObject";

test("create Field", () => {
  const div = document.createElement("div");
  expect(createField(1, div)).toStrictEqual({
    id: 1,
    field: expect.any(Element),
    shooted: false,
    ship: false,
  });
});
