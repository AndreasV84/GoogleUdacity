/*
 * Programming Quiz: Out to Dinner (2-10)
 *
 * Create a variable called bill and assign it the result of `10.25 + 3.99 + 7.15`
 *
 * Next, create a variable called tip and assign it the
 * result of multiplying bill by a 15% tip rate.
 *
 * Finally, add the bill and tip together and store it into a variable called total.
 *
 * Print the total to the JavaScript console.
 *
 */

// your code goes here
let bill = 10.25 + 3.99 + 7.15;
let tip = bill * 0.15;
let total = bill + tip;
console.log(total.toFixed(2));
