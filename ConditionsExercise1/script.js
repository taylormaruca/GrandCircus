let actualTemp = prompt("Please enter the actual temp");
let desiredTemp = prompt("Please enter the desired temp");

if (actualTemp === desiredTemp) {
    console.log("Standby");
}
else if (actualTemp > desiredTemp) {
    console.log("Run A/C");
}
else {
    console.log("Run heat");
}
