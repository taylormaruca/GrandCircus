const name = "Taylor Maruca";
var age = 28;
const birthday = "March 22nd, 1993";
let detroitGC = true;
let lifeEvents = ["I was born in San Jose, CA.", "I went to EMU.", "I've broken 26 bones.", "I moved across the country at age 23."];

if (detroitGC = true) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}
else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for (let i=0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;
let randomNumber;
while (randomNumber = Math.floor(Math.random() * 10) + 1) {
    if (randomNumber !== 5) {
        counter++;
        console.log(`${randomNumber} !== 5`);
    }
    else {
        counter++;
        console.log(`${randomNumber} === 5. It took ${counter} iterations to randomly generate the number 5.`);
        break;
    }
}

let wage = prompt("Please enter your hourly pay:");
let hours = prompt("Please enter the total number of hours worked this week:");
let pay;
let weeks;
if (hours > 40) {
    let regpay = (wage * 40);
    let overtimepay = ((wage * 1.5) * (hours - 40));
    pay = (regpay + overtimepay);
    weeks = Math.ceil(1000000/pay);
    console.log(`My wage is ${wage} dollars per hour and I worked ${hours} hours this week, so I earned ${pay} dollars. I made an additional ${overtimepay} dollars working overtime. It would take me ${weeks} weeks to make $1,000,000.`)
}
else {
    pay = wage * hours;
    weeks = Math.ceil(1000000/pay);
    console.log(`My wage is ${wage} dollars per hour and I worked ${hours} hours this week, so I earned ${pay} dollars. It would take me ${weeks} weeks to make $1,000,000.`)
}


