for (let i=1; i <= 10; i++) {
    console.log(i);
}

for (let j=10; j >=1; j--) {
    console.log(j);
}

let k=1;
while (k <= 10) {
    console.log(k);
    k++;
}

let n=10;
while (n >= 1) {
    console.log(n);
    n--;
}

let m=1
do {
    console.log(m);
    m++;
} while (m <= 10);

let b=10;
do {
    console.log(b);
    b--;
} while (b >= 1);

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let g=0; g <= numbers.length; g++) {
    console.log(numbers[g]);
}

let word = prompt("Please enter a word");
while (word.length < 10) {
    word = " " + word;
    word.length++;
}
console.log(word);