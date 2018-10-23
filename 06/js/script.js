"use strict";

/*
not completed
(function () {
})();
*/

const messageWrapper = document.getElementById('message');
/*getElementBuId is the least expensive 
=== taking the least of time to load*/

const name = prompt('What is your name?');
const age = prompt('What is your age?');
const music = prompt('What is your favorite band?');
/*
let age = prompt('What/'s is your age?');
let age = prompt("What's your age?");
let age = prompt('What is your age?, 31'); default value
*/

/*
console.log('Hello, ' + name + '!');
alert('Hello, ' + name + '!');
console.log(You are ' + age + 'years old!);
alert('You are ' + age + 'years old!);
*/

let message = 'Hello, ' + name + '!\n';
message += 'You are ' + age + ' years old!\n';

if (age > 30) {
   message += 'That\'s old!\n';
} else if (age == 0) { //== double equals: testing values
   message += 'HUH?\n';
} else if (age < 13) { // <=
   message += 'Should you even be on the internet?\n';
}
// if the statements are both true, it will not execute the both but just the one that is primarily written --- write the precise range for the value

message += music + ' rocks!' + ' Sweet!';

/* += === adding on to the the message already have */
/* \n === line break */

messageWrapper.innerText = message;
/* innerText === content inside h1 tag */

console.log(message);
