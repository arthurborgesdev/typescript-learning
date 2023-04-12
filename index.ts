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

// unknow typing

function f1(a: any) {
  a.b();
}

/*
function f2(a: unknown) {
  a.b();
}
*/

function printID(id: number | string) {
  console.log(`Your ID is: ${id}`);
}

printID(101);

printID("202");

// printID({ myID: 22342 }); --> this will throw an error because the argument is not a number or a string

function printMultiple(id: string | number | object) {
  if (typeof id === "string") {
    console.log(`Your ID is: ${id.toUpperCase()}`);
  } else if (typeof id === "number") {
    console.log(`Your ID is: ${id}`);
  } else {
    console.log(`Your ID is: ${JSON.stringify(id)}`);
  }
}

printMultiple("101");

printMultiple(202);

printMultiple({ myID: 22342 });

printMultiple([1, 2, 3, 4, 5]);

// printMultiple(null); won't work because null is not a string, number or object

/* Intersection types */

interface ErrorHandling {
  success: boolean;
  error?: { message: string }
}

interface ArtistsData {
  artists: { name: string }[]
}

interface ArtistsResponse extends ErrorHandling, ArtistsData {}

function handleArtistsResponse(response: ArtistsResponse) {
  if (response.error) {
    console.error(response.error.message);
  } else {
    console.log(response.artists);
  }
}

// typeError example: handleArtistsResponse({artists: []}) because success is missing

// The main difference between interfaces and intersections is the way they handle errors.


/* typeof type guard */

function strip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }
  return x.trim();
}

console.log(strip("  123.456  "));

console.log(strip(123.456));

/* Truthiness narrowing */

function printAll(strs: string | string[] | null) { // checking for truthiness of strs, makes it so that it can't be null and avoid the error
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

printAll("abc");

printAll(["a", "b", "c"]);

printAll(null);

/* Function type expressions */

type Log = (message: string, userID?: string) => void;

let log: Log = (message, userID = "Not signed in") => {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, userID);
}

log("Page loaded");

/* Type inference examples */

let a = 10; // infered as number

// a = "10"; --> this will throw an error because a is a number

let b = [1, null]; // infered as (number | null)[]

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

function identity<Type>(arg: Type): Type {
  return arg;
}

let output = identity<string>("myString");

let inferedOutput = identity("myString");

/* Generic Interface */

interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

let myIndentity: GenericIdentityFn = identity;

