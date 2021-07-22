// // 0. Write a function that writes the numbers 0 through 10, without a loop, [0, 10)
// function countWithoutLoop(n, m) {
//     if (n < m) {
//       console.log(n);
//       n++;
//       countWithoutLoop(n, m);
//     }
//   }
//   countWithoutLoop(0, 10)

// // 1. Write a function that writes the numbers 0 through 10, with a loop, [0, 10)
// function countWithLoop () {
//     for (i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }
// countWithLoop();

// // 2. Write a function that writes the numbers 1 through 10, with a loop [1, 10]
// function loopOneThroughTen () {
//     for (i= 1; i <= 10; i++) {
//         console.log(i);
//     }
// }
// loopOneThroughTen();

// //3. Write a function that writes the even numbers, 0 through 100 [0, 100]
// function evenNumbers () {
//     for (i= 0; i <= 100; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }
// evenNumbers();

// // 4. Write a function that writes the odd numbers, 0 through 100 [0, 100]
// function oddNumbers () {
//     for (i= 0; i <= 100; i++) {
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//     }
// }
// oddNumbers();

// // 5. Write a function that writes the numbers 0 through 100, skipping by 5 each time
// function skipFive () {
//     for (i= 0; i <= 100; i++) {
//         if (i % 5 === 0) {
//             console.log(i);
//         }
//     }
// }
// skipFive();

// // 6. Write a function writes the numbers 100 through 0, [100, 0), counting down
// function countDesc () {
//     for (i= 100; i > 0; i--) {
//             console.log(i);
//     }
// }
// countDesc();

// // 7. Write a function that writes the even numbers 100 through 0, counting down
// function countDescEven () {
//     for (i= 100; i >= 0; i--) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }
// countDescEven();

// // 8. Write a function with three arguments, start, end, skip, that implements a loop
// function createALoop (start, end, skip) {
//     for (i = start; i <= end; i += skip) {
//         console.log(i);
//     }
// }
// createALoop(0, 20, 5);


// // 9. Write a function that returns an array with the numbers 0 through 10
// function arrayOneThrough10 () {
//     let array =[];
//     for (i = 0; i <= 10; i++) {
//         array.push(i);
//     }
//     console.log(array);
// }
// arrayOneThrough10();

// // 10. Write a function with three arguments, name, age, city, that returns an object with those properties set
// function makeAnObject(name, age, city) {
//     // Define desired object
//     var obj = {
//       name:  name,
//       age: age,
//       city: city
//     };
//     console.log(obj);
//   }
//   makeAnObject("Taylor", 28, "Ypsilanti");

// // 11. Create a string array that lists your family members
// let familyArray = ["Jim,", "Jennifer", "Chris", "Taylor"];
// console.log(familyArray);

// // 12. Create a function that takes an array parameter, loops through family members and outputs, "Hello (name)"
// function loopArray (array) {
//     for (i = 0; i < array.length; i++)
//     console.log(`Hello`, array[i]);
// }
// loopArray(["Jim", "Jennifer", "Chris", "Taylor"]);

// // 13. Create an object array that contains movies: title, year, favorite
// let movies = [
//     {
//       "title": "Deadpool",
//       "year": "2018",
//       "favorite": true
//     },
//     {
//         "title": "Endgame",
//         "year": "2019",
//         "favorite": true
//     },
//     {
//         "title": "Escape Room",
//         "year": "2021",
//         "favorite": false
//     },
// ]

// // 14. Create a function that takes an array parameter, loops through the movies, outputting favorites
// function favoriteMovies (array) {
//     for (i = 0; i < array.length; i++) {
//         if (array[i].favorite === true) {
//         console.log(array[i]);
//         }
//     }
// }
// favoriteMovies(movies);

// // 15. Create a function that takes an array parameter, that returns all favorites
// function myFavoriteMovie(array) {
//     let favorites = array.filter(item => item.favorite === true);
//     return favorites;
// }
// console.log(myFavoriteMovie(movies));

// // 16. Create a function that takes an array parameter, that returns all movies of a year
// function movieYear (array, year) {
//     for (i = 0; i < array.length; i++) {
//         if (array[i].year == year) {
//         console.log(array[i]);
//         }
//     }
// }
// movieYear(movies, 2018);

// // 11a. Write a function that takes two parameters, and returns the sum
// function sum(a, b) {
//     let mySum = a+b;
//     return mySum;
// }
// console.log(sum(6,2));

// // 12a. Write a function that takes two parameters, console logs the sum, and then returns the sum
// function sumTwo(a, b) {
//     let mySum = a+b;
//     console.log(mySum);
//     return mySum;
// }
// sumTwo(3, 5);

// // 13a. Write a function that takes two parameters, and returns the multiplication of the two numbers
// function multiply(a, b) {
//     let answer = a*b;
//     return answer;
// }
// console.log(multiply(3, 5));

// // 14a. Pass the result of (11a and 12a to 13a)
// sum1 = sum(1,2);
// sumDos = sumTwo(1,2)
// console.log(multiply(sum1,sumDos));