// add elements to an array
var lastBench = ['kalam', 'balam', 'salam'];
lastBench.push('jalam');
lastBench.push('palam');
lastBench.push('nalam');

// console.log(lastBench);

var friendsAge = [11, 13, 17, 12];
// friendsAge.push(15);
console.log(friendsAge);

// remove an element from an array
var lastItem = friendsAge.pop();
// friendsAge.pop();
console.log(lastItem);
console.log(friendsAge);

// var firstItem = friendsAge.shift();
friendsAge.shift();
console.log(friendsAge);

friendsAge.unshift('kaka');
console.log(friendsAge);