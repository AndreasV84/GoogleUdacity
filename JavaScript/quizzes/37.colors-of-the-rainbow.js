/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Using only the splice() method, insert the missing colors into the array,
 * and remove the color "Blackberry" by following these steps:
 *
 * Remove "Blackberry"
 * Add "Yellow" and "Green"
 * Add "Purple"
 *
 */

let rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// your code goes here

rainbow.splice(2,1);
rainbow.splice(2,0,"Yellow","Green");
rainbow.splice(5,0,"Purple");
