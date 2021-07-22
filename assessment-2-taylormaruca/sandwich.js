function countDown() {
    for (let i = 5; i >= 1; i--) {
        console.log(i);
    }
}
countDown();

function countUp(start, end) {
    for (i = start; i <= end; i++) {
        console.log(i);
    }
}
countUp(54, 62);

function isLong(word) {
    return word.length > 10 ? true : false;
}
console.log(isLong("somereallylongword"));
console.log(isLong("no"));

function whatWaterState (temperature) {
    if (temperature <= 32) {
        console.log("solid");
    }
    else if (temperature > 32 && temperature < 212) {
        console.log("liquid");
    }
    else {
        console.log("gas");
    }
}
whatWaterState(100);
whatWaterState(32);
whatWaterState(5);
whatWaterState(212);

let sandwiches = [
    {
      "type": "italian",
      "calories": 1000,
      "cost": 7.69,
      "isVegetarian": false
    },
    {
        "type": "veggie",
        "calories": 500,
        "cost": 5.50,
        "isVegetarian": true
      },
      {
        "type": "meatball",
        "calories": 900,
        "cost": 8.25,
        "isVegetarian": false
      },
      {
        "type": "jackfruit",
        "calories": 650,
        "cost": 8.5,
        "isVegetarian": true
      }
]

function makeSandwich(sandwichArray, type, calories, cost, isVegetarian) {
    sandwichArray.push({type: type, calories: calories, cost: cost, isVegetarian: isVegetarian});
}
makeSandwich(sandwiches, "buffalo chicken", 1050, 7.25, false);
console.log(sandwiches);


function findVegetarianSandwich(sandwichArray) {
  var veggie = sandwichArray.find(item => item.isVegetarian === true);
  return veggie;
}
console.log(findVegetarianSandwich(sandwiches));

function findCheapestSandwich(sandwichArray) {
  let cheapest = sandwichArray.reduce((prev, curr) => prev.cost < curr.cost ? prev : curr);
  return cheapest;
}
console.log(findCheapestSandwich(sandwiches));