/*
Programming 1: Essentials
College Week 1
*/
console.log("Hello world");
console.log("Hallo 1PGMA");

// Console log name with variable
const firstName = "Michael";
const lastName = "Vanderpoorten";
console.log(firstName);
console.log(lastName);

// variables with var (= old-school)
var a; // waarde = undefined
console.log(a);
a = 31; // waarde = 31;
a = 20;
console.log(a);
var b = 16;

// new school = let & const
let c = 10;
let e;
console.log(c);
c = 20;
console.log(c);

const d = 10;
// d = 20; // -> error
console.log(d);

const name = "Michael Vanderpoorten"; // string
const isLector = true; // boolean (true or false)
const porto = 0; // number
const club = 4; // number
const pi = 3.14; // number (float)
const car = null; // null

// strings advanced
console.log(firstName + " " + lastName);

// optie 1
// const sentence = "De beer zei \"hallo\"";
// optie 2
const sentence = 'De beer zei "hallo"';

const work = "lector";
// doel: ik ben Michael en mijn beroep is lector
// optie 1
console.log("Ik ben " + firstName + " en mijn beroep is " + work);
// optie 2
console.log(`Ik ben ${firstName} en mijn beroep is ${work}`);

// multi lines
console.log("Hallo, \nwelkom in mijn les");
console.log(`Hallo,
welkom in mijn les`);

// numbers
const width = 100 * 50;
console.log(width);
const sum = a + b + c;
console.log(sum);
const length = 100 / 50;
console.log(length);
const min = 100 - a;
console.log(min);
