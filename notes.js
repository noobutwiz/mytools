// var tweet = prompt("Compose you tweet");
// var tweetCount = tweet.length;
// alert("You have written " + tweetCount + " " + "characters, you have " + (140 - tweetCount) + " " + "characters remaining");

// You have written 182 characters, you have -42 characters left.

// var name = "Angela";
// name.slice(0,3);

// var tweet = prompt("Compose you tweet");
// var tweetUnder140 = tweet.slice(0,140);
// alert(tweetUnder140);

var name = prompt("What is your name?");
var firstLetter = name.slice(0, 1);
var firstLetter = firstLetter.toUpperCase();
var theRestOfTheLetter = name.slice(1, name.length);
var theRestOfTheLetter = theRestOfTheLetter.toLowerCase();
var capitalizedName = firstLetter + theRestOfTheLetter;
alert("Hi " + capitalizedName + " Welcome Back!");

var dogAge = prompt("What is your dog age?");
humanAge = (dogAge - 2) * 4 + 21;
alert("Your dog age is " + humanAge + " years in human");
