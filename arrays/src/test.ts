import assert = require('assert');

import { customArray } from './index.js';

new customArray([1,2,3,4]).each(function(el) {
});

assert.equal(1, new customArray([1,2,3]).filter((el) => el === 1));

assert(new customArray([1,2,3]).contains(1));

assert(new customArray([1,2,3]).equal([1,2,3]));
assert(new customArray([1,2]).add([3,4]).equal([1,2,3,4]));

var authors = [
  {name: 'Shakespeare', Genre: 'Literature'},
  {name: 'Ian Fleming', Genre: 'Crime'}
];

assert.equal(new customArray(authors).where({name:'Shakespeare'}).length, 1);

var odds = new customArray([1, 2, 3, 4, 5, 6]).reject(function(num){ return num % 2 == 0; });
assert(new customArray([1,3,5]).equal(odds));

assert(odds.every(function(num) { return num % 2 === 1; }));
