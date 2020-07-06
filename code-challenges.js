// ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended
//----------------------------------------------------------------------------
// ((1)) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit. Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"
var temp1 = 35
var temp2 = 350
var temp3 = 212
// Create a function
// Nestle if/else statements for the three variables of temp using string interpolation
const boilingPt = (temp) => {
  if (temp < 212){
    return `${temp1} degrees Farhenheit is below boiling point.`
  }
  else if (temp > 212){
    return `${temp2} degrees Farhenheit is above boiling point.`
  }
  else if (temp = 212) {
    return `${temp3} degrees Farhenheit is at boiling point.`
  }
  else {
    return "undefined"
  }
}
console.log(boilingPt(temp1)); //prints: 35 degrees Farhenheit is below boiling point.
//----------------------------------------------------------------------------
// ((2)) Create a function that multiplies each number in the array by 5 using a for loop. Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]
var myNumbers1 = [3, 7, 0, 6, -9]
//Create a funtion named 'multiples' to build a loop that'll multiply every value of the oldArray, "myNumber1" by 5
//Create a variable to hold the new array of the multiples called "newArr"
//Create the loop nestled in the function that'll multiply the oldArray by 5 while also pushing the modidified array into the new array using the method .push
const multiples = (oldArray) => {
  let newArr = []
  for (let i=0; i<oldArray.length; i++){
    newArr.push(oldArray[i] * 5)
  }
  return newArr
}
console.log (multiples(myNumbers1)) //prints: [15, 35, 0, 30, -45]
//----------------------------------------------------------------------------
// ((3)) Create a function that multiplies each number in the array by 5 using map. Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]
var myNumbers2 = [8, -7, 0, 6, 2]
//Create a function named multiplyByFive and use the map method to iterate the called array, myNumber2
//Then return the output-value with a multiplication of 5
  const multiplyByFive = myNumbers2.map(value => {
    return value *5
  })
console.log(multiplyByFive); //prints: [40, -35, 0, 30, 10]
//----------------------------------------------------------------------------
// ((4)) Create a function that takes in an array and returns an array with only the values at odd indexes.
// Use the test variables provided below. Expected output: [ "Chai tea", "Mocha", "Double espresso" ]
//index:              0               1             2            3...
var coffeeRun = ["Vanilla latte", "Chai tea", "Black coffee", "Mocha", "Americano", "Double espresso"]
//Declare a function entitled oddIndexExtract for the project
//Return with a .filter-method using both value and index arguments. Remember that higher order functions can house up to 3 built-in arguments (value, index, array)
const oddIndexExtract = (oldArray) => {
  return oldArray.filter((value, index)=> {
    return index %2 !== 0
  })
}
console.log(oddIndexExtract(coffeeRun)); //prints: ["Chai tea", "Mocha", "Double espresso"]
//----------------------------------------------------------------------------
// ((5)) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"
var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"


//Create a function to process a string for vowel removal
const vowelsRemoved = (string) => {
//Must create a variable to house new array for the string.
//Turn string into an array
//use filter to draw vowels out using conditional statements in filter)
  let consonants = string.filter (value => {
    return value %2 !==0
  })
//Return new filtered array
  return oddNums
}
console.log(newArray(arr2))


//----------------------------------------------------------------------------
// ((6)) Expand the logic from #5 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var stringWithVowels3 = true
var stringWithVowels4 = 42
var stringWithVowels5 = "CodingIsGreat"
