class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const student = new Student("Taylor", 28);

class Vehicle {

    isRunning;

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isRunning = false;
    }

    start() {
        if (this.isRunning === true) {
            console.log("The car is already running");
        }
        else {
            this.isRunning = true;
        }
    }

    stop() {
        if (this.isRunning === false) {
            console.log("The vehicle is not running");
        } 
        else {
            this.isRunning = false;
        }
    }
}

const newVehicle = new Vehicle('Honda', 'Civic', 2019);
console.log(newVehicle);
newVehicle.start();
console.log(newVehicle);
newVehicle.stop();
console.log(newVehicle);