import { add } from "./calculator";

describe("Calculator", () => {
  describe("add", () => {
    it("adds two numbers together", () => {
      const result = add(1, 2);
      expect(result).toBe(3);
    });
  });
});
