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
