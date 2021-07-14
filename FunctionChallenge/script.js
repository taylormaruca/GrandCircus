function logRectInfo (topLeft, bottomRight) {
    let length = Math.abs(topLeft[0] - bottomRight[0]);
    let width = Math.abs(topLeft[1] - bottomRight[1]);
    let area = length*width;
    let perimeter = 2*(length + width);
    console.log(`Area: ${area} Perimeter: ${perimeter}`);
}

logRectInfo([1,2], [5,4]);
logRectInfo([4, 6], [3,2]);