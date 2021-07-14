let radiusCirc = prompt("Please enter the radius of the circle: ");
let radius = prompt("Please enter the radius of the circle: ");
let side = prompt("Please enter length of the side: ");
let base = prompt("Please enter the base of the triangle: ");
let height = prompt("Please enter the height of your triangle: ");

function getAreaOfCircle (radius) {
    const areaCirc = Math.PI * radius * radius;
    return areaCirc;
}

function getCircumferenceOfCircle (radius) {
    const circumference = 2 * Math.PI * radius;
    return circumference;
}

function getAreaOfSquare (side) {
    const areaSquare = side * side;
    return areaSquare;
}

function getAreaOfTriangle (base, height) {
    const areaTri = (base * height)/2;
    return areaTri;
}

console.log(getAreaOfCircle(radius));
console.log(getCircumferenceOfCircle(radius));
console.log(getAreaOfSquare(side));
console.log(getAreaOfTriangle(base, height));
