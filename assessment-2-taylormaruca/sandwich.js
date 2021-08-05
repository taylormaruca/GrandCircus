function countDown() {
    for (let i = 5; i >= 1; i--) {
        console.log(i);
    }
}

function countUp(start, end) {
    for (i = start; i <= end; i++) {
        console.log(i);
    }
}

function isLong(word) {
    return word.length > 10 ? true : false;
}

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

let sandwiches = [
    {
      type: "italian",
      calories: 1000,
      cost: 7.69,
      isVegetarian: false
    },
    {
      type: "veggie",
      calories: 500,
      cost: 5.50,
      isVegetarian: true
      },
      {
      type: "meatball",
      calories: 900,
      cost: 8.25,
      isVegetarian: false
      },
      {
      type: "jackfruit",
      calories: 650,
      cost: 8.5,
      isVegetarian: true
      }
]

function makeSandwich(sandwichArray, type, calories, cost, isVegetarian) {
    const sandwich = {type: type, 
                      calories: calories, 
                      cost: cost, 
                      isVegetarian: isVegetarian};

    sandwichArray.push(sandwich);
}

function findVegetarianSandwich(sandwichArray) {
  const veggie = sandwichArray.find(item => item.isVegetarian === true);
  return veggie;
}

function findCheapestSandwich(sandwichArray) {
  const cheapest = sandwichArray.reduce((prev, curr) => prev.cost < curr.cost ? prev : curr);
  return cheapest;
}