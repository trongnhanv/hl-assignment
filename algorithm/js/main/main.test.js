import { miniMaxSum } from "./main.js";

const expect = chai.expect;

describe("findMinMaxOfarrayay function", () => {
  it("Should return {min: 10, max: 14} when array is [1,2,3,4,5]", () => {
    expect(miniMaxSum([1, 2, 3, 4, 5])).to.include({
      min: 10,
      max: 14,
    });
  });

  it("Should return {min: 4, max: 4} when array is [1,1,1,1,1]", () => {
    expect(miniMaxSum([1, 1, 1, 1, 1])).to.include({
      min: 4,
      max: 4,
    });
  });

  it("Should return {min: 7934, max: 7958} when array is [1995,1983,1996,1984,1971]", () => {
    expect(miniMaxSum([1995, 1983, 1996, 1984, 1971])).to.include({
      min: 7933,
      max: 7958,
    });
  });

  it("Should return {min: 2063136757, max: 2744467344} when array is [256741038,623958417,467905213,714532089,938071625]", () => {
    expect(
      miniMaxSum([
        256741038, 623958417, 467905213, 714532089, 938071625,
      ])
    ).to.include({
      min: 2063136757,
      max: 2744467344,
    });
  });
});
