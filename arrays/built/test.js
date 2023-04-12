"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var index_js_1 = require("./index.js");
new index_js_1.customArray([1, 2, 3, 4]).each(function (el) {
});
assert.equal(1, new index_js_1.customArray([1, 2, 3]).filter(function (el) { return el === 1; }));
assert(new index_js_1.customArray([1, 2, 3]).contains(1));
assert(new index_js_1.customArray([1, 2, 3]).equal([1, 2, 3]));
assert(new index_js_1.customArray([1, 2]).add([3, 4]).equal([1, 2, 3, 4]));
var authors = [
    { name: 'Shakespeare', Genre: 'Literature' },
    { name: 'Ian Fleming', Genre: 'Crime' }
];
assert.equal(new index_js_1.customArray(authors).where({ name: 'Shakespeare' }).length, 1);
var odds = new index_js_1.customArray([1, 2, 3, 4, 5, 6]).reject(function (num) { return num % 2 == 0; });
assert(new index_js_1.customArray([1, 3, 5]).equal(odds));
assert(odds.every(function (num) { return num % 2 === 1; }));
