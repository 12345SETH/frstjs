const arr = [1,2,3,4,5,6]
const name = ["Aman","IronMan","Hulk","Widow"]
const arr2 = new Array(1,4,8,6,9)
// console.log(arr[0],name[2],arr2);
// arr.push(7)
// console.log(arr);
// arr.pop()
// arr.unshift(8)
// arr.shift()
// console.log(arr.includes(8));
// console.log(arr.indexOf(4));
const newArr = arr.join()
// console.log(arr);
// console.log(newArr);
// console.log(typeof newArr);

console.log("A = ",arr);
const arrn1 = arr.slice(1,3)
console.log(arrn1);
console.log("B = ",arr);
const arrn2 = arr.splice(1,3)
console.log("C = ",arr);
console.log(arrn2);
