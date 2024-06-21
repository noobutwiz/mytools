// var tweet = prompt("Compose you tweet");
// var tweetCount = tweet.length;
// alert("You have written " + tweetCount + " " + "characters, you have " + (140 - tweetCount) + " " + "characters remaining");

// You have written 182 characters, you have -42 characters left.

// var name = "Angela";
// name.slice(0,3);

// var tweet = prompt("Compose you tweet");
// var tweetUnder140 = tweet.slice(0,140);
// alert(tweetUnder140);

// var name = prompt("What is your name?");
// var firstLetter = name.slice(0, 1);
// var firstLetter = firstLetter.toUpperCase();
// var theRestOfTheLetter = name.slice(1, name.length);
// var theRestOfTheLetter = theRestOfTheLetter.toLowerCase();
// var capitalizedName = firstLetter + theRestOfTheLetter;
// alert("Hi " + capitalizedName + " Welcome Back!");

// var dogAge = prompt("What is your dog age?");
// humanAge = (dogAge - 2) * 4 + 21;
// alert("Your dog age is " + humanAge + " years old in human years.");

// function lifeInWeeks(age) {
//   var age = prompt(age);
//   var yearsRemaining = 90 - age;
//   var days = yearsRemaining * 365;
//   var weeks = yearsRemaining * 52;
//   var months = yearsRemaining * 12;

//   console.log(
//     "You have " +
//       days +
//       " days, " +
//       weeks +
//       " weeks, and " +
//       months +
//       " months left."
//   );
// }

// function getMilk(money) {
//   money = prompt(money);
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   var numberOfBottles = Math.floor(money / 1.5);
//   console.log("buy " + calcBottles(money, 1.5) + " bottles of Milk");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");

//   return calcChange(money, 1.5);
// }

// function calcBottles(startingMoney, costPerBottle) {
//   var numberOfBottles = Math.floor(startingMoney / costPerBottle);
//   return numberOfBottles;
// }

// function calcChange(startingAmount, costPerBottle) {
//   var change = startingAmount % costPerBottle;
//   return change;
// }

// console.log("Hello Master, here is your " + getMilk() + " change.");

// BMI Calculator:

// var height = prompt("What is you height in meters?");
// var weight = prompt("What is your weight in kilogram?");

// var calculatedHeight = height * height;

// function bmiCalculator() {
//   var result = weight / calculatedHeight;
//   return result;
// }

// console.log(
//   "Your BMI is " + Math.floor(bmiCalculator()) + ". Please stay healthy!"
// );
// console.log(bmiCalculator());

// Another solution for BMI Calculator using Math.pow with result using Math.round:

// var height = prompt("What is you height in meters?");
// var weight = prompt("What is your weight in kilogram?");

// var calculatedHeight = Math.pow(height, 2);

// function bmiCalculator() {
//   var result = weight / calculatedHeight;
//   return result;
// }

// console.log(
//   "Your BMI is " + Math.round(bmiCalculator()) + ". Please stay healthy!"
// );
// console.log(bmiCalculator());

// Sablay to!!!

// var n = Math.random(prompt("Give a number from a dice"));

// function randomNumberFromDice() {
//     var randomN = n * 6;
//     return randomN;

// }

// console.log("This is a random number " + Math.floor(randomNumberFromDice()) + "." );

// end of Sablay to!!!

// var n = Math.random();

// n = n * 6;
// n = Math.floor(n) + 1;

// console.log(n);

// LOVE SCORE

// var name1 = prompt("Person 1");
// var name2 = prompt("Person 2");

// var name1FirstLetter = name1.slice(0, length);
// var name1FirstLetter = name1FirstLetter.toUpperCase();
// var name1TheRest = name1.slice(1, name1.length);
// var name1TheRest = name1TheRest.toLowerCase();
// var name1Final = name1FirstLetter + name1TheRest;

// var name2FirstLetter = name2.slice(0, length);
// var name2FirstLetter = name2FirstLetter.toUpperCase();
// var name2TheRest = name2.slice(1, name2.length);
// var name2TheRest = name2TheRest.toLowerCase();
// var name2Final = name2FirstLetter + name2TheRest;

// var love = Math.random() * 100;
// love = Math.floor(love) + 1;

// alert(name1Final + " and " + name2Final + " are " + love + "% match!!");

// END OF LOVE SCORE

var name1 = prompt("Person 1");
var name2 = prompt("Person 2");

var name1FirstLetter = name1.slice(0, length);
var name1FirstLetter = name1FirstLetter.toUpperCase();
var name1TheRest = name1.slice(1, name1.length);
var name1TheRest = name1TheRest.toLowerCase();
var name1Final = name1FirstLetter + name1TheRest;

var name2FirstLetter = name2.slice(0, length);
var name2FirstLetter = name2FirstLetter.toUpperCase();
var name2TheRest = name2.slice(1, name2.length);
var name2TheRest = name2TheRest.toLowerCase();
var name2Final = name2FirstLetter + name2TheRest;

var love = Math.random() * 100;
// var love = prompt("Enter love"); // to test via manual input
love = Math.floor(love) + 1;
// love = Math.floor(love); // to test via manual input

if (love > 91) {
  alert(name1Final + " and " + name2Final + " are " + love + "% Match!");
}
if (love > 71 && love <= 90) {
  alert(
    "Finally! " + name1Final + " and " + name2Final + " is " + love + "% match."
  );
}

console.log(love);
