const name1 = prompt("Please enter first name");
const name2 = prompt("Please enter second name");
const name3 = prompt("Please enter third name");

if ((name1.length > name2.length) && (name1.length > name3.length)) {
    console.log(`${name1} has the longest name`);
}
else if ((name2.length > name1.length) && (name2.length > name3.length)) {
    console.log(`${name2} has the longest name`);
}
else if ((name3.length > name1.length) && (name3.length > name2.length)) {
    console.log(`${name3} has the longest name`);
}
else if ((name1.length === name2.length) && (name1.length > name3.length)) {
    console.log(`${name1} and ${name2} tie for longest length`);
}
else if ((name1.length === name3.length) && (name1.length > name2.length)) {
    console.log(`${name1} and ${name3} tie for longest length`);
}
else if ((name2.length === name3.length) && (name2.length > name1.length)) {
    console.log(`${name2} and ${name3} tie for longest length`);
}
else if ((name1.length === name2.length) && (name1.length === name3.length) && (name2.length === name3.length)) {
    console.log(`${name1}, ${name2}, and ${name3} are the same length`);
}
else {
    console.log();
}