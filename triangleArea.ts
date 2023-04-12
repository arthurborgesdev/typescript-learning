import { Triangle } from "./triangle";

function triangleArea(triangle: Triangle) {
  console.log((triangle.base * triangle.height) / 2);
}

const triangle = new Triangle();
triangle.base = 10;
triangle.height = 20;

triangleArea(triangle);