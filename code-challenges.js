// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js
//
// Please read all questions thoroughly
// Psuedo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process
//
// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// create a function thar takes in number
const theTemp = (temp) => {
  // I need to create an if/else statement with a return telling me corresponding temperature
  // if temp ===212, return that its at boiling point
  if (temp === 212) {
    return `${temp3} is at boiling point`
    // else if temp is greater than 212 its above boiling point
  } else if (temp > 212) {
    return `${temp2} is above boiling point`
    // else if temp is less than 212 its below boiling point
  } else if (temp < 212) {
    return `${temp1} is below boiling point`
  }
}

// call the numbers in my function
console.log(theTemp(temp1))
console.log(theTemp(temp2))
console.log(theTemp(temp3))

// ---COMPLETE------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

// create a function that takes in an array
const multiply = (array) => {
  // create a variable that is an array
  let fullArray = []
  // loop though the array
  for (let i = 0; i < array.length; i++) {
    // push the numbers into an array after the loop and multiply by 5
    fullArray.push(array[i] * 5)
  }
  // return the multiplied array
  return fullArray
}
// call the numbered array into the function
console.log(multiply(myNumbers1))

// ----COMPLETED------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

// create a function that takes in a an array
const timesFive = (array) => {
  // .map through the array
  return array.map((value) => {
    // multiply each number by 5
    return value * 5
  })
}
// call array of numbers into the function
console.log(timesFive(myNumbers2))

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

// create a function to take in a "str"
const vowel = (str) => {
  // Split the "str"
  let stringSplit = str.split("")
  // filtered out all of the vowels
  let filterArray = stringSplit.filter((value) => {
    return (
      value !== "a" &&
      value !== "e" &&
      value !== "i" &&
      value !== "I" &&
      value !== "o" &&
      value !== "u"
    )
  })
  // return the filtered array rejoined into a "str"
  return filterArray.join("")
}
// call the variables through our function
console.log(vowel(stringWithVowels1))
console.log(vowel(stringWithVowels2))

// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

var notAString1 = true
var notAString2 = 42

// create a function that takes in a "string"
const notAString = (string) => {
  // refactored if to make sure if it is === to a "string"
  if (typeof string === "string") {
    // split my "string" if it was a "string"
    let stringSplit = string.split("")
    // filter through the splitString and turn it into an array
    let filterArray = stringSplit.filter((value) => {
      return (
        value !== "a" &&
        value !== "e" &&
        value !== "i" &&
        value !== "I" &&
        value !== "o" &&
        value !== "u"
      )
    })
    // return the filtered vowels rejoined as a "string"
    return filterArray.join("")
  } else {
    // else return this statement
    return `${string} is not a string`
  }
}
console.log(notAString(notAString1))
console.log(notAString(notAString2))

// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [
  { name: "Itchy", animal: "mouse" },
  { name: "Stimpy", animal: "cat" },
  { name: "Daffy", animal: "duck" },
  { name: "Scratchy", animal: "cat" },
  { name: "Ren", animal: "dog" },
  { name: "Felix", animal: "cat" },
]

// then use a key: value
// var myObject = {key:"value", key2:"value "}
// create a function that takes in an array
const catOnly = (array) => {
  // filter the array that turns our value into "cat"
  return array.filter((value) => value.animal === "cat")
}
// call the array through our function
console.log(catOnly(toonimals))

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

// crate a funtion that takes in str
const noCats = (array) => {
  // .filter out every animal !== "cats"
  let catFilter = array.filter((value) => value.animal !== "cat")
  // return only the "str names" take the filtered array and map though it give us just the names, also .join(" ") with a space inbetween to seperate the words
  return catFilter.map((value) => value.name).join(" ")
}

console.log(noCats(toonimals))
