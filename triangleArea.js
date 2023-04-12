"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var triangle_1 = require("./triangle");
function triangleArea(triangle) {
    console.log((triangle.base * triangle.height) / 2);
}
var triangle = new triangle_1.Triangle();
triangle.base = 10;
triangle.height = 20;
triangleArea(triangle);
