const { repair, fail, succeed } = require("./enhancer.js");
// test away!

const weapon1 = {
  name: "Bear Claw",
  durability: 70,
  enhancement: 0
};

const weapon2 = {
  name: "fiery cannon",
  durability: 100,
  enhancement: 25
};

describe("enhancer.js", () => {
  test("can run the tests", () => {
    expect(true).toBe(true);
  });
});

it("succeed() should increase enhancement by 1", () => {
  const item = {
    name: "Bear Claw",
    durability: 70,
    enhancement: 0
  };
  expect(succeed(weapon1).enhancement).toEqual(1);
});

describe(" Testing enhancer.repair", () => {
  it("should return durability to be restored to 100", () => {
    expect(weapon2.durability).toEqual(100);
  });
});
