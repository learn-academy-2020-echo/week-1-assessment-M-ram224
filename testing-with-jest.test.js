// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// -----COMPLETE------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.
// almost didnt add yarn to jest before running haha
// write out basic form of the tests
// // create sentence saying what I want "two numbers total"
// // needs and argument and a return
describe("addThemUp",() =>{
  test("takes two numbers and returns the sum",()=>{
    expect(addThemUp(2 + 3)).toEqual(5)
  })
})
// needs a function to operate, DO NOT NEED console.log();
// just yarn jest in terminal
const addThemUp = () =>{
  return "sum"
}
//
// // --------------------1b) See the test fail. THEN write the code to make the test pass.

describe("addThemUp",() =>{
  test("takes two numbers and returns the sum",()=>{
    expect(addThemUp(2 + 3)).toEqual("sum")
  })
})

const addThemUp = () =>{
  return "sum"
// }
//had .toEqual(5), remember the return in the test, must be the same as the return in the function!!!
// EX: .toEqual("sum") ------PASS


// // --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.
//
// // need two arguments
// // need three expects??
// // return is area, base * height/2
// describe("traingleArea",() =>{
//   test("multiply base times height then divide by two to return the area",()=>{
//     expect(addThemUp("base")).toEqual(5)
//     expect(addThemUp("height")).toEqual(10)
//   })
// })
// // if else statement?
// // possibly let?
//
// const triangleArea = (area) =>{
//   let area = [5 * 10 / 2]
//
//   }
//   return "area"
// }

// failed first attempt, my function = --(area)-- is the problem
// put copy of code below now working on that till it passes.
//syntax error next, and also am trying to change postion of return back inside const function {}
// line 68 addThemUp not defined
// expect(NaN).toEqual(expect.any(Number))??
// --------------------2b) See the test fail. THEN write the code to make the test pass.

describe("triangleArea",() =>{
  test("multiply base times height then divide by two to return the area",()=>{
    expect(triangleArea("base")).toEqual(5)
    expect(triangleArea("height")).toEqual(10)
    expect(triangleArea("triangle")).toEqual("area")

  })
})
// if else statement?
// possibly let?
// the area needs to be dividing the base and height, what function would do that?
// var findArea = [5 , 10, 2]
// honetsly I am lost, been at this for hours now, lookeed through notes, stllabus, and googled, am i not understanding the simplicity of it?

const triangleArea = (area1) =>{
  let area1 = [a + b]
  let a = [5 * 10]
  let b = [a / 2]


  return "area"
  }
