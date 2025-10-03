let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// let myNewDate = new Date(2023,0,23)
// let myNewDate = new Date(2023,0,23,5,3)
// let myNewDate = new Date("2023-01-12")
let myNewDate = new Date("01-14-2023")

// console.log(myNewDate.toDateString());
// console.log(myNewDate.toLocaleString());
  let myTimeStamp = Date.now()
//   console.log(myTimeStamp);
//   console.log(myNewDate.getTime());
//   console.log(Math.floor(Date.now()/1000)); TIME IN SECONDS
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
newDate.toLocaleString('default',{
weekday:"long"
})

  
 