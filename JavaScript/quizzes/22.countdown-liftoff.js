/* NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks.
 * During the final minute, NASA has 6 tasks to complete:
 *
 * Orbiter transfers from ground to internal power (T-50 seconds)
 * Ground launch sequencer is go for auto sequence start (T-31 seconds)
 * Activate launch pad sound suppression system (T-16 seconds)
 * Activate main engine hydrogen burnoff system (T-10 seconds)
 * Main engine start (T-6 seconds)
 * Solid rocket booster ignition and liftoff! (T-0 seconds)
 *
 * NOTE: "T-50 seconds" read as "T-minus 50 seconds".
 *
 * Directions:
 *
 * Write a while loop that counts down from 60 seconds and:
 *
 * If there's a task being completed, it prints out the task
 * If there is no task being completed, it prints out the time as T-x seconds
 *
 * Use the task and time descriptions described above.
*/
/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
let countdown = 60;

while (countdown >= 0) {
    if (countdown === 50) {
        console.log("Orbiter transfers from ground to internal power");
    } else if (countdown === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if (countdown === 16) {
        console.log("Activate launch pad sound suppression system");
    } else if (countdown === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    } else if (countdown === 6) {
        console.log("Main engine start");
    } else if (countdown === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    } else {
        console.log("T-" + countdown + " seconds");
    }
    countdown--;
}
