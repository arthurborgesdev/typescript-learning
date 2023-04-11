export {} // here because we have both TS and JS on the same directory

console.log("Hello World");

console.log(1+ 1000);

function add(a: number, b: number) {
  return a + b;
}

add(1, 2);

const printIterate = (n: number[]) => {
  n.forEach((i) => console.log(i));
}

printIterate([1, 2, 3, 4, 5]);

const typeAnnotatedVariable: number = 10;

function yell(message: string) {
  return message.toUpperCase();
}

// yell(123); --> this will throw an error an not let you compile, because the argument is not a string

function double(n: number): number {
  return n * 2;
}

console.log(double(10));

// object types
function printFullName(name: { first: string; last?: string }) {
  console.log(`${name.first.toUpperCase()} ${name.last?.toUpperCase()}`);
}

printFullName({ first: "arthur"});

class Point {
  x: number;
  y: number;
}

const pt = new Point();
pt.x = 0;
pt.y = 0;

console.log(`${pt.x}, ${pt.y}`);

// pt.x = "0" --> Type string is not assignable to type number

interface Point {
  x: number;
  y: number;
}

let myDistance: number = 0;

function distance(p1: Point, p2: Point) {
  return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
}

let point1 = { x: 12, y: 26 };
let point2 = { x: 3, y: 4 };

myDistance = distance(point1, point2);

console.log(myDistance);