"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello World");
console.log(1 + 1000);
function add(a, b) {
    return a + b;
}
add(1, 2);
var printIterate = function (n) {
    n.forEach(function (i) { return console.log(i); });
};
printIterate([1, 2, 3, 4, 5]);
var typeAnnotatedVariable = 10;
function yell(message) {
    return message.toUpperCase();
}
// yell(123); --> this will throw an error an not let you compile, because the argument is not a string
function double(n) {
    return n * 2;
}
console.log(double(10));
// object types
function printFullName(name) {
    var _a;
    console.log("".concat(name.first.toUpperCase(), " ").concat((_a = name.last) === null || _a === void 0 ? void 0 : _a.toUpperCase()));
}
printFullName({ first: "arthur" });
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var pt = new Point();
pt.x = 0;
pt.y = 0;
console.log("".concat(pt.x, ", ").concat(pt.y));
var myDistance = 0;
function distance(p1, p2) {
    return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));
}
var point1 = { x: 12, y: 26 };
var point2 = { x: 3, y: 4 };
myDistance = distance(point1, point2);
console.log(myDistance);
// unknow typing
function f1(a) {
    a.b();
}
/*
function f2(a: unknown) {
  a.b();
}
*/
function printID(id) {
    console.log("Your ID is: ".concat(id));
}
printID(101);
printID("202");
// printID({ myID: 22342 }); --> this will throw an error because the argument is not a number or a string
function printMultiple(id) {
    if (typeof id === "string") {
        console.log("Your ID is: ".concat(id.toUpperCase()));
    }
    else if (typeof id === "number") {
        console.log("Your ID is: ".concat(id));
    }
    else {
        console.log("Your ID is: ".concat(JSON.stringify(id)));
    }
}
printMultiple("101");
printMultiple(202);
printMultiple({ myID: 22342 });
printMultiple([1, 2, 3, 4, 5]);
function handleArtistsResponse(response) {
    if (response.error) {
        console.error(response.error.message);
    }
    else {
        console.log(response.artists);
    }
}
// typeError example: handleArtistsResponse({artists: []}) because success is missing
// The main difference between interfaces and intersections is the way they handle errors.
/* typeof type guard */
function strip(x) {
    if (typeof x === "number") {
        return x.toFixed(2);
    }
    return x.trim();
}
console.log(strip("  123.456  "));
console.log(strip(123.456));
/* Truthiness narrowing */
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
printAll("abc");
printAll(["a", "b", "c"]);
printAll(null);
var log = function (message, userID) {
    if (userID === void 0) { userID = "Not signed in"; }
    var time = new Date().toLocaleTimeString();
    console.log(time, message, userID);
};
log("Page loaded");
/* Type inference examples */
var a = 10; // infered as number
// a = "10"; --> this will throw an error because a is a number
var b = [1, null]; // infered as (number | null)[]
// b[2] = "a"; --> this will throw an error because b is a number
/*
window.onmousedown = (mouseEvent) => { // infered as (mouseEvent: MouseEvent) => void
  console.log(mouseEvent.button);
}

window.onmousedown = (mouseEvent: any) => { // infered as (mouseEvent: any) => void
  console.log(mouseEvent.button);
}
*/
/* Generics */
function identity(arg) {
    return arg;
}
var output = identity("myString");
var inferedOutput = identity("myString");
var myIndentity = identity;
/* Namespaces */
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
// Some samples to try
var strings = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validators) {
        var isMatch = validators[name_1].isAcceptable(s);
        console.log("'".concat(s, "' ").concat(isMatch ? "matches" : "does not match", " '").concat(name_1, "'."));
    }
}
