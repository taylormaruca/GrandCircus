function printTens () {
    for(i = 10; i <= 100; i++) {
        if(i % 10 === 0) {
            console.log(i);
        }
    }
}
printTens();

function countUntilTens(step) {
    let start = step;
    console.log(start);
    while(start % 10 !== 0) {
        start += step;
        console.log(start);
    }
}
(countUntilTens(6));

function hasVowels(word) {
    var vowels = "aeiouAEIOU";
    for(let i = 0; i < word.length; i++) {
    if (vowels.indexOf(word[i]) >= 0) {
        return true;
    }
    }
    return false;
}
console.log(hasVowels("Elm"));
console.log(hasVowels("elm"));
console.log(hasVowels("plz"));

function testTemperature (desiredTemp, actualTemp) {
    if (actualTemp === desiredTemp) {
        console.log("Standby");
    }
    else if (actualTemp > desiredTemp) {
        console.log("Run A/C");
    }
    else {
        console.log("Run heat");
    }
}
testTemperature(72, 83);
testTemperature(72, 72);
testTemperature(72, 64);

let dealership = [
    {
      "make": "Toyota",
      "model": "Prius",
      "year": 2020,
      "hybrid": true
    },
    {
        "make": "Toyota",
        "model": "Prius",
        "year": 2021,
        "hybrid": true
      },
      {
        "make": "Ford",
        "model": "F-150",
        "year": 2015,
        "hybrid": false
      },
      {
        "make": "Ferrari",
        "model": "Enzo",
        "year": 2004,
        "hybrid": false
      }
]

function findCars(arrayOfCars, model) {
    let getModel = arrayOfCars.filter(item => item.model == model);
    return getModel;
}
console.log(findCars(dealership, "Prius"));

function addCar(arrayOfCars, make, model, hybrid) {
    arrayOfCars.unshift({make: make, model: model, year: 2021, hybrid: hybrid});
}
addCar(dealership, "Honda", "Civic", true);
console.log(dealership);

function areThereAnyHybridsForSale(arrayOfCars) {
    let getHybrid = arrayOfCars.filter(item => item.hybrid == true);
    return getHybrid;
}
console.log(areThereAnyHybridsForSale(dealership));