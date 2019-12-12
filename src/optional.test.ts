import {optional} from "./optional";

describe("Optional", () => {
    test("should return something", () => {
        expect(optional({prop:{is: "something"}})).toBe("something");
    });

    test("should return undefined", () => {
        expect(optional({prop:{}})).toBe(undefined);
        expect(optional({})).toBe(undefined);
        expect(optional()).toBe(undefined);
    });
});
