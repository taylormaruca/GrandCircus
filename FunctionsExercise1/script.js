let radiusCirc = prompt("Please enter the radius of the circle: ");
let radius = prompt("Please enter the radius of the circle: ");
let side = prompt("Please enter length of the side: ");
let base = prompt("Please enter the base of the triangle: ");
let height = prompt("Please enter the height of your triangle: ");

function getAreaOfCircle (radiusCirc) {
    let areaCirc = Math.PI * radiusCirc * radiusCirc;
    return areaCirc;
}

function getCircumferenceOfCircle (radius) {
    let circumferenceCirc = 2 * Math.PI * radius;
    return circumferenceCirc;
}

function getAreaOfSquare (side) {
    let areaSquare = side * side;
    return areaSquare;
}

function getAreaOfTriangle (base, height) {
    let areaTri = (base * height)/2;
    return areaTri;
}

console.log(getAreaOfCircle(radiusCirc));
console.log(getCircumferenceOfCircle(radius));
console.log(getAreaOfSquare(side));
console.log(getAreaOfTriangle(base, height));
