/*
 * Programming Quiz: Laugh (5-4)
 *
 * Write an anonymous function expression that stores a function
 * in a variable called "laugh" and outputs the number of "ha"s
 * that you pass in as an argument.
 *
 */

let laugh = function(num) {
    let msg = "";
    for (let i = 1; i <= num; i++) {
      msg += "ha";
    } return msg + "!";
};

console.log(laugh(10));
