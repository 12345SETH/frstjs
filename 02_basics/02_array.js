const arr1 = ["Hero","Villan","Thor"]
const arr2 = ["AntMan","Swordsman","Superman"]
// arr1.push(arr2)
// const arr3 = arr1.concat(arr2) // CONCAT RETURNS NEW ARRAY
const newArr = [...arr1,...arr2]  // SPREAD OPERATION
const bigArr = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
const real_bigArr = bigArr.flat(Infinity) // FLAT OPERATION
// console.log(real_bigArr);
// console.log(Array.isArray("DNS"));
// console.log(Array.from("DNS"));
// console.log(Array.from({name : "DNS"}));// INTERESTING CASE
let a1 = 100;
let a2 = 200;
let a3 = 300;
console.log(Array.of(a1,a2,a3));

