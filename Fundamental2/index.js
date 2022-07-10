'use strict';

// let hasDriverLicence=false;
// const passTest=true;

// if (passTest) hasDriverLicence=true;

// if(hasDriverLicence) console.log('i can sdtgdfh');

// const interface="Audio";
// const private=54;
// Functions
// function logger() {
//     console.log('My name is Jonas');
//   }
//   // calling / running / invoking function
//   logger();
//   logger();
//   logger();
//   function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
//   }
//   const appleJuice = fruitProcessor(5, 0);
//   console.log(appleJuice);
//   const appleOrangeJuice = fruitProcessor(2, 4);
//   console.log(appleOrangeJuice);
  

//   // Function Declarations vs. Expressions
  // Function declaration
//   const age1 = calcAge1(1991);//work krega
//   function calcAge1(birthYeah) {
//     return 2037 - birthYeah;
//   }
// //   const age1 = calcAge1(1991);
// const age2 = calcAge2(1991);//not worked
//   // Function expression anonymus function
//   const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah;
//   }
  
//   console.log(age1, age2);


// Arrow functions
// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'Jonas')); 
// console.log(yearsUntilRetirement(1980, 'Bob'));


// Functions Calling Other Functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
//   }
//   function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//     return juice;
//   }
//   console.log(fruitProcessor(2, 3));

// Reviewing Functions
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// }
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// Introduction to Arrays
// const friends = ['Michael', 'Steven', 'Peter'];
// const y = new Array(1991, 1984, 2008, 2020);
// // console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice']
// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);
// // Exercise
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// Basic Array Operations (Methods)   add push  and unshift   and remove pop  and shift,indexOf
// Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);
// friends.unshift('John');
// console.log(friends);
// Remove elements
// const friends = ['Michael','Bob', 'Steven', 'Peter'];
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);
// friends.shift(); // First
// console.log(friends);
// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));
// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));
// if (friends.includes('Steven')) {
//   console.log('You have a friend called Steven');
// }
// console.log(friends);

 