"use strict";
const messageWrapper = document.getElementById('message');

const w = prompt('Type a number for your value W.');
const x = prompt('Type a number for your value X.');
const y = prompt('Type a number for your value Y.');
const z = prompt('Type a number for your value Z.');


let message = '{' + '(' + w + '+' + x + ')' + '-' + y + '}' + '×' + z + '=' + ((Number(w) + Number(x) - Number(y)) * Number(z));

messageWrapper.innerText = message;








