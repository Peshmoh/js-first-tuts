//const = a variable that cant be changed

const PI = 3.14159;
let radius;
let circumfrence;

//PI = 420.69

radius = window.prompt("enter the radius of a circle");
radius = Number(radius);

circumfrence = 2 * PI * radius;

console.log("the circumfrence is!",circumfrence);