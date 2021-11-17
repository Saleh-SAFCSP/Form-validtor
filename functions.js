/* Higher order function

Types of functions :

1- Normal function
2- Callback function
3- Higher order function


The most famous Higher order function in array :

1- forEach
2- map
3- filter
4- sort
5- reduce

*/

// function f1() {}
// const f2 = () => {};
// const callBackFunction = () => {
//   console.log('Hey from callback');
// };
// const orignalFunction = (callback) => {
//   callback();
// };
// orignalFunction(callBackFunction);
// orignalFunction(() => {
//   console.log('Hey from callback 2');
// });

const agesList = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// FOREACH
// console.log(agesList);
// console.log(agesList.length);
// for (let i = 0; i < agesList.length; i++) {
//   console.log(`${i} : ${agesList[i]}`);
// }
// agesList.forEach((age, i) => {
//      console.log(`${i} : ${age}`);
// });

// MAP
// let ageListTimesTwo = [];
// for (let i = 0; i < agesList.length; i++) {
//   ageListTimesTwo.push(agesList[i] * 2);
// }
// console.log(ageListTimesTwo);
// const ageListAfterMap = agesList.map((age, i) => {
//   console.log(`${i} : ${age}`);
//   return age * 2;
// });
// console.log(ageListAfterMap);
// const names = ['ali', 'ahmad', 'saleh', 'khalid'];
// console.log(`welcome ` + names);
// const namesAfterMap = names.map((name, i) => {
//   return `${i} Welcome ${name} to the website`;
// });
// console.log(namesAfterMap);

// Filter
// let ageListFilter = [];
// for (let i = 0; i < agesList.length; i++) {
//   if (agesList[i] >= 20) {
//     ageListFilter.push(agesList[i]);
//   }
// }
// console.log(ageListFilter);
// const ageListAfterFilter = agesList.filter((age) => {
//   if (age >= 20) {
//     return true;
//   }
// });
// const ageListAfterFilter = agesList.filter((age) => age >= 20);
// console.log(ageListAfterFilter);

// SORT
// const sortAge = agesList;
// for (let i = 0; i < sortAge.length; i++) {
//   for (let j = 0; j < sortAge.length; j++) {
//     if (sortAge[j] > sortAge[j + 1]) {
//       let temp = sortAge[j];
//       sortAge[j] = sortAge[j + 1];
//       sortAge[j + 1] = temp;
//     }
//   }
// }
// console.log(sortAge);
// const ageListAfterSort = agesList.sort((age1, age2) => {
//   if (age1 < age2) {
//     return -1;
//   } else {
//     return 1;
//   }
// });

// Reduce
// const numbers = [1, 2, 3, 4, 5, 6];
// let total = 1;
// for (let i = 0; i < numbers.length; i++) {
//   total = total * numbers[i];
// }
// console.log(total);
// const numbersAfterRedcuse = numbers.reduce((number1, number2) => {
//   return number1 * number2;
// });
// console.log(numbersAfterRedcuse);

// const msg = 'saleh joined the room';
// console.log(msg.includes('room'));
// console.log(agesList.indexOf(20554));
// console.log(agesList.includes(12));
