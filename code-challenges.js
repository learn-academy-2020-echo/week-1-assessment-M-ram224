// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js
//
// Please read all questions thoroughly
// Psuedo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process
//
// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// // Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"
//
var temp1 = 35
var temp2 = 350
var temp3 = 212
// I need to create an if/else statement with a return telling me corresponding temperature
// I have the output for "35 is below boiling point" for all three outputs...why?
// how do I make change this to make the code read through past my if??
//
//if cold = 35
  // return "35 is below boiling point" and repeat foing down!

const theTemp = () =>{
  if (cold == temp1){
    return "35 is below boiling point"
  }else if (spicy == temp2) {
    return "350 is above boiling point"
  }else if (justRight == temp3) {
    return "212 is at boiling point"
  }
  }

// // // I want the out put to be a string
console.log(theTemp(cold));
console.log(theTemp(spicy));
console.log(theTemp(justRight));

// // // ---COMPLETE------2) Create a function that multiplies each number in the array by 5 using a for loop.
// // Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]
// //
// // had a few spelling errors and braces were () in my .log, but i had the setup correct.
// // // // jazz really helps with the thinking
// // //
var myNumbers1 = [3, 7, 0, 6, -9]
for(let i = 0; i < myNumbers1.length; i++){
  console.log(myNumbers1[i] * 5);
}
// FINISHED
//
// ----COMPLETED------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]
//
var myNumbers2 = [8, -7, 0, 6, 2].map(value=>{
      return value * 5
    })
  console.log(myNumbers2);
// // had a bit of trouble at first with trying to add .length
// // was over thinking it, also missed the return and was getting no argument back
// FINISHED

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

// need to .filter()
// need to stretch/ seperate the letters
// then pull out all vowels
// Am very stuck, I know i have the answer in the

// heres an example from notes
// var str = "javascript is awesome"
// //
// // Expected output --> "jvscrpt s wsm"
// //Have an array of every letter in a single spot
// // //return only the letters that are not vowels
// const vowel = (string) => {
//   let stringSplit = string.split("")
//   let filteredArray = stringSplit.filter(value => {
//   return  value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u" && value !== "y"
//   })
//   return filteredArray.join("")
// }
// console.log(vowel(str))

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

var split1 = stringWithVowels1.split("")
var split2 = stringWithVowels2.split("")
// need to create array to fix my const
const vowel = (pullVowelArray) =>{
  let i=0; i<pullVowelArray.length; i++{
    if value !=="a" && value !=="e" && value !=="i" && value !=="I" && value !=="o" && value !=="u"
      return pullVowelArray
  // let pullVowels2 = stringWithVowels2.split("")
  // let filtered = pullVowels.filter(value =>{
  //   return value !== "a" && value !=="e" && value !=="i" && value !=="I" && value !=="o" && value !=="u"
  }
// return vowel.join("")
var rejoin1 = (split1).join("")
var rejoin2 = (split2).join("")

console.log(rejoin1);
console.log(rejoin2);


// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

var notAString1 = true
var notAString2 = 42





// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

//
// // will need higher order function filter() also will need .map()
// //only get back which cats.
//
var toonimals = [
  { name: "Itchy", animal: "mouse" },
 { name: "Stimpy", animal: "cat" },
 { name: "Daffy", animal: "duck" },
 { name: "Scratchy", animal: "cat" },
 { name: "Ren", animal: "dog" },
 { name: "Felix", animal: "cat" }]

// I am going to .map First for the array of objects
// then filter out the "cats"
// then use a key: value
// var myObject = {key:"value", key2:"value "}

const catOnly = (cats) =>{
  array.map()

  return toonimal.animal === ("")
//
// }
// // console.log(toonimal.animal); gives you all animals, I need to hone in on "cat"
//

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"
