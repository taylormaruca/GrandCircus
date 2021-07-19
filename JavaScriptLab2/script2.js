const student = {
    name: "Mitch",
    location: "Michigan",
    payingAttention: true,
    tvShows: ["Big Brother", "Survivor", "Criminal Minds"],
};

//loop over all the keys and print values
for(let key in student) {
    console.log(student[key]);
};

//remove the paying attention key
console.log(`Delete payingAttention key`);
delete(student.payingAttention);
for(let key in student) {
    console.log(student[key]);
};

// //delete 1st item in array and replacing with something new
console.log(`Delete 1st item in TV Shows array`);
student.tvShows.splice(0, 1, "Show");
for(let key in student) {
    console.log(student[key]);
};

//add new TV show in array
console.log(`Adding a new show`);
student.tvShows[3] = "Love Island";
for(let key in student) {
    console.log(student[key]);
};

//write a function called location that accepts
//a student object and logs the name
function location (s) {
    console.log(`Name of student:`, s.name);
};
location(student);

student.changeName = function (arg) {
    this.name = arg;
}
student.changeName("Taylor");

console.log(`Printing new name`);
for(let key in student) {
    console.log(student[key]);
};