var prompt = require('sync-prompt').prompt;
var colors = require('colors');

var money = 100;

while (money > 0) {
  var bet = prompt("Place a bet between 5 and 10 dollars: ");
  bet = parseInt(bet);

  var guess = prompt("Choose a number between 1 and 10: ");
  guess = parseInt(guess);

  var gamble = function(guess) {
    var number = Math.floor(Math.random() * 10) + 1
    if (guess === number) {
      money += (bet * 2);
      console.log(("You got it! Current total: " + money).green);
    } else if ((guess + 1) === number || (guess - 1) === number) {
      console.log(("Close! You keep your bet. Total: " + money).yellow);
    } else {
      money -= bet;
      console.log(("Womp, womp. You lose the bet. Total: " + money).red);
    }
  }
  gamble(guess);
};

console.log("Looks like you're out of cash! Better luck next time.".blue);