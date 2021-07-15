const randomDamage = () => Math.floor(Math.random() * 10) + 1;
//console.log(randomDamage());

const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor((Math.random() * 2));
    //console.log(randNum);
    return randNum ? opt2 : opt1;
}
//console.log(chooseOption(100, 200));

const attackPlayer = function (health) {
    return health - randomDamage();
}
//console.log(attackPlayer(10));

const logHealth = (player, health) => console.log(`${player}'s health: ${health}`);

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

const isDead = (health) => health <= 0 ? true : false;
//console.log(isDead(5));

let player1 = prompt("Please enter player 1 name");
let player2 = prompt("Please enter player 2 name");
let player1Health = prompt("Please enter player 1 health");
let player2Health = prompt("Please enter player 2 health");
function fight (player1, player2, player1Health, player2Health) {
    while (true) {
        const attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }
        }
    }
}
fight(player1, player2, player1Health, player2Health);

let width = prompt("Please enter the width of the square");
function printSquare (width) {
    for (let i = 0; i < width; i++) {
        let square = '';
        for (j = 0; j < width; j++) {
            square += '#';
        }
        console.log(square);
    }
}
printSquare(width);

let width = prompt("Please enter the width of the triangle");
function printTriangle(width) {
    let triangle = "";
    for (var i = 1; i <= width; i++) {
      for (var j = 1; j <= i; j++) {
        triangle += "#";
      }
      triangle += "\n";
    }
    return triangle;
  }
  console.log(printTriangle(width));

let urgent = prompt("Enter true if urgent, otherwise enter false");
let important = prompt("Enter true if important, otherwise enter false");
function prioritize (urgent, important) {
    if (urgent === true && important === true) {
        return 1;
    }
    else if (urgent === false && important === true) {
        return 2;
    }
    else if (urgent === true && important === false) {
        return 3;
    }
    else {
        return 4;
    }
}
console.log(prioritize(urgent, important));

let number = prompt("Please enter a number between 1 and 100");
function getGrade (number) {
    if (number >= 90) {
        let grade = "A";
        return grade;
    }
    else if (number >= 80) {
        let grade = "B";
        return grade;
    }
    else if (number >= 70) {
        let grade = "C";
        return grade;
    }
    else if (number >= 60) {
        let grade = "D";
        return grade;
    }
    else {
        let grade = "F";
        return grade;
    }
}
console.log(getGrade(number));




