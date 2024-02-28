import {findNumber, daysLeftUntilChristmas, multiplication, division, longestString, largestNumber, remouveChar, sumOfCubes, compareObject, filterArray, extractValues, deleteRollno, getCylinderVolume, clock, checkCase, add} from "./exo";

describe("findNumber", () => {
    it('test if the user number not match', () => {
        Math.random = jest.fn(() => 0.5)
        expect(findNumber(2)).toBe("Not matched");
      });
    
    it('test if the user number match', () => {
        Math.random = jest.fn(() => 0.5)
        expect(findNumber(6)).toBe("Good Work");
    });
    
})

describe("daysLeftUntilChristmas", () => {
    test("return the number of days until christmas", () => {
        jest.useFakeTimers().setSystemTime(new Date('2024-02-26'));
        expect(daysLeftUntilChristmas()).toBe(302);
    })
})

test('multiplication of two numbers', () => {
    expect(multiplication(2, 3)).toBe(6);
});

test('division of two numbers', () => {
    expect(division(6, 3)).toBe(2);
});

test('return longest string of an array', () => {
    const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
    expect(longestString(items)).toBe("communiqué");
});

test('return the largest number', () => {
    const array = [56, 5, 66, 33, 99, 3, 9];
    expect(largestNumber(array)).toBe(99);
});

test('remouve chars that appears more than once', () => {
    expect(remouveChar("comportement")).toBe("cprn");
});

test('return the sum of cubes of all numbers betwen 1 and the given number', () => {
    expect(sumOfCubes(5)).toBe(225);
})

test('test if two objects are equals', () => {
    expect(compareObject({nom : "lucas", prenom: "luc"}, {nom : "lucas", prenom: "luc"})).toBe(true);
});

test("return the array without values that are equal to the parameters values", () => {
    expect(filterArray([3, 4, 6, 7, 8, 23], 3, 7)).toEqual([4, 6, 8, 23]);
});

test('extract out the values at the specified indexes from a specified array', () => {
    expect(extractValues([2, 4, 5, 8, 4, 7], 2, 4)).toEqual([5, 4]);
});

test('get the volume of a Cylinder with four decimal places', () => {
    class Cylinder {
        constructor(radius, height){
            this.radius = radius;
            this.height = height;
        }
    
        get volume(){
            let volume = (3.14 * 2 * this.radius * this.height).toFixed(4);
            return parseFloat(volume);
        }
    }
    const cylender = new Cylinder(4.34, 6);

    expect(getCylinderVolume(cylender)).toBe(163.5312);
});

test('check if a string is lower case or not', () => {
    expect(checkCase("manger")).toBe(true);
});

describe("add", () => {
    it('async addition function with succes', () => {
        return expect(add(3, 5)).resolves.toBe(8);;
    });

    it('async addition function with error', () => {
        return expect(add(3)).rejects.toEqual(new Error("Must provide two parameters"));
    });
});
