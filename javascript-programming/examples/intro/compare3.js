"use strict";

console.log(2 === 2);                  // true
console.log(2 === 3);                  // false
console.log(2 === null);               // false
console.log(2 === undefined);          // false

console.log(undefined === undefined);  // true
console.log(null === null);            // true
console.log(NaN === NaN);              // false !!!

console.log('' === '0');               // false
console.log(0 === '');                 // false
console.log(0 === '0');                // false

console.log(false === 'false');       // false
console.log(false === '0');           // false

console.log(false === undefined);     // false
console.log(false === null);          // false
console.log(null === undefined);      // false

console.log(' \t\r\n ' === 0);        // false
