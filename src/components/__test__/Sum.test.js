import { Sum } from "../Sum";

test("Sum of two numbers", () => {
  const result = Sum(1, 2);

  expect(result).toBe(3);
});
