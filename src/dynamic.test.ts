describe("Dynamic", () => {
    test("dynamic import", async () => {
        const test = await import("./dynamic");
        expect(test.test).toBe("hello world");
    });
});
