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

function getMilk(money) {
  money = prompt(money);
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  var numberOfBottles = Math.floor(money / 1.5);
  console.log("buy " + calcBottles(money, 1.5) + " bottles of Milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return calcChange(money, 1.5);
}

function calcBottles(startingMoney, costPerBottle) {
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
  var change = startingAmount % costPerBottle;
  return change;
}

console.log("Hello Master, here is your " + getMilk() + " change.");
