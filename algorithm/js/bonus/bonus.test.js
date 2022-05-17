import {
  countTotalOfArray,
  findEvenNumbersInArray,
  findMaxInArray,
  findMinInArray,
  findOddNumbersInArray,
  isEvenNumber,
  isOddNumber,
} from "./bonus.js";

const expect = chai.expect;

describe("countTotalOfArray function", () => {
  it("Should be false when array is not Array Type", () => {
    expect(countTotalOfArray("ABC")).to.be.false;
  });

  it("Should return 0 when array is empty", () => {
    expect(countTotalOfArray([])).to.equal(0);
  });

  it("Should return 5 when array is [1,2,3,4,5]", () => {
    expect(countTotalOfArray([1, 2, 3, 4, 5])).to.equal(5);
  });
});

describe("findMinInArray function", () => {
  it("Should return 0 when array is empty", () => {
    expect(findMinInArray([])).to.equal(0);
  });

  it("Should return 1 when array is [1]", () => {
    expect(findMinInArray([1])).to.equal(1);
  });

  it("Should return -5 when array is [1,4,-5,20,50]", () => {
    expect(findMinInArray([1, 4, -5, 20, 50])).to.equal(-5);
  });

  it("Should return 0 when array is [1,0,4,10,50]", () => {
    expect(findMinInArray([1, 0, 4, 10, 50])).to.equal(0);
  });

  it("Should return 5 when array is [100,99,98,10,5]", () => {
    expect(findMinInArray([100,99,98,10,5])).to.equal(5);
  });

  it("Should return 364801279 when array is [396285104,573261094,759641832,819230764,364801279]", () => {
    expect(findMinInArray([396285104,573261094,759641832,819230764,364801279])).to.equal(364801279);
  });
});

describe("findMaxInArray function", () => {
    it("Should return 0 when array is empty", () => {
      expect(findMaxInArray([])).to.equal(0);
    });
  
    it("Should return 1 when array is [1]", () => {
      expect(findMaxInArray([1])).to.equal(1);
    });
  
    it("Should return -1 when array is [-1,-4,-5,-20,-50]", () => {
      expect(findMaxInArray([-1,-4,-5,-20,-50])).to.equal(-1);
    });
  
    it("Should return 50 when array is [1,0,4,10,50]", () => {
      expect(findMaxInArray([1, 0, 4, 10, 50])).to.equal(50);
    });
  
    it("Should return 100 when array is [100,99,98,10,5]", () => {
        expect(findMaxInArray([100,99,98,10,5])).to.equal(100);
      });
      
    it("Should return 819230764 when array is [396285104,573261094,759641832,819230764,364801279]", () => {
      expect(findMaxInArray([396285104,573261094,759641832,819230764,364801279])).to.equal(819230764);
    });
  });

describe("isOddNumber function", () => {
  it("Should be false when number is string ABC", () => {
    expect(isOddNumber("ABC")).to.be.false;
  });

  it("Should be false when number is undefined", () => {
    expect(isOddNumber(undefined)).to.be.false;
  });

  it("Should be false when number is 0", () => {
    expect(isOddNumber(0)).to.be.false;
  });

  it("Should be false when number is 2", () => {
    expect(isOddNumber(2)).to.be.false;
  });

  it("Should be true when number is 1", () => {
    expect(isOddNumber(1)).to.be.true;
  });

  it("Should be true when number is -1", () => {
    expect(isOddNumber(-1)).to.be.true;
  });
});

describe("isEvenNumber function", () => {
  it("Should be false when number is string ABC", () => {
    expect(isEvenNumber("ABC")).to.be.false;
  });

  it("Should be false when number is undefined", () => {
    expect(isEvenNumber(undefined)).to.be.false;
  });

  it("Should be true when number is 0", () => {
    expect(isEvenNumber(0)).to.be.true;
  });

  it("Should be true when number is 2", () => {
    expect(isEvenNumber(2)).to.be.true;
  });

  it("Should be false when number is 1", () => {
    expect(isEvenNumber(1)).to.be.false;
  });
});

describe("findOddNumbersInArray function", () => {
  it("Should return [] when array is empty", () => {
    expect(findOddNumbersInArray([])).to.deep.equal([]);
  });

  it("Should return [1,3] when array is [1,2,3,4,5]", () => {
    expect(findOddNumbersInArray([1, 2, 3, 4, 5])).to.deep.equal([1, 3, 5]);
  });

  it("Should return [] when array is not exist odd number: [2,4,6,10,2,12]", () => {
    expect(findOddNumbersInArray([2, 4, 6, 10, 2, 12])).to.deep.equal([]);
  });

  it("Should return [-1,-1,-3] when array is not exist odd number: [-1,2,-2,-1,10000,-3,10000,400,200]", () => {
    expect(
      findOddNumbersInArray([-1, 2, -2, -1, 10000, -3, 10000, 400, 200])
    ).to.deep.equal([-1, -1, -3]);
  });
});

describe("findEvenNumbersInArray function", () => {
  it("Should return [] when array is empty", () => {
    expect(findEvenNumbersInArray([])).to.deep.equal([]);
  });

  it("Should return [2] when array is [1,2,3,5]", () => {
    expect(findEvenNumbersInArray([1, 2, 3, 5])).to.deep.equal([2]);
  });

  it("Should return [2,6] when array is not exist odd number: [1,2,3,'4',5, 6]", () => {
    expect(findEvenNumbersInArray([1, 2, 3, "4", 5, 6])).to.deep.equal([2, 6]);
  });

  it("Should return [2,-2,10000,10000,400,200] when array is not exist odd number: [-1,2,-2,-1,10000,-3,10000,400,200]", () => {
    expect(
      findEvenNumbersInArray([-1, 2, -2, -1, 10000, -3, 10000, 400, 200])
    ).to.deep.equal([2, -2, 10000, 10000, 400, 200]);
  });
});
