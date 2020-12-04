// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest

// -----COMPLETE------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

// write out basic form of the tests
// // create sentence saying what I want "two numbers total"
// // needs and argument and a return

describe("addThemUp", () => {
  test("takes two numbers and returns the sum", () => {
    expect(addThemUp(1, 2)).toEqual(3)
    expect(addThemUp(4, 5)).toEqual(9)
  })
})

// needs a function to operate, DO NOT NEED console.log();
// just yarn jest in terminal

// --------------------1b) See the test fail. THEN write the code to make the test pass.\

// Function takes two numbers
const addThemUp = (num1, num2) => {
  // and returns the sum
  return num1 + num2
}

//had .toEqual(5), remember the return in the test, must be the same as the return in the function!!!
// EX: .toEqual("sum") ------PASS

// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

// need two arguments
//  return is area, base * height/2

describe("traingleArea", () => {
  test("multiply base times height then divide by two to return the area", () => {
    expect(triangleArea(5, 10)).toEqual(25)
    expect(triangleArea(2, 4)).toEqual(4)
  })
})

// --------------------2b) See the test fail. THEN write the code to make the test pass.

// function takes two numbers
const triangleArea = (num1, num2) => {
  // then multiply base times height and divide by two
  return (num1 * num2) / 2
}
