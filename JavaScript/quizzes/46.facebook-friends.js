/*
 * Programming Quiz: Facebook Friends (7-5)
 *
 * Create an object called facebookProfile. The object should have 3 properties:
 * 1.your name
 * 2.the number of friends you have, and
 * 3.an array of messages you've posted (as strings)
 *
 * The object should also have 4 methods:
 * 1.postMessage(message) - adds a new message string to the array
 * 2.deleteMessage(index) - removes the message corresponding to the index provided
 * 3.addFriend() - increases the friend count by 1
 * 4.removeFriend() - decreases the friend count by 1
 *
 */

// your code goes here
let facebookProfile = {
  name: "Andreas",
  friends: 5,
  messages: ['Hi', 'Hello', 'Howdy'],
  postMessage: function post(message) {
      facebookProfile.messages.push(message);
  },
  deleteMessage: function del(index) {
      facebookProfile.messages.splice(index,1);
  },
  addFriend: function add() {
      facebookProfile.friends++;
  },
  removeFriend: function remove() {
      if (facebookProfile.friends > 0) {
          facebookProfile.friends--;
      }
  }
};

facebookProfile.postMessage('No');
console.log(facebookProfile.messages);
