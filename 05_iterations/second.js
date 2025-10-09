//  for , of 
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}
const greetings = "HEY THERE!"
for (const greet of greetings) {
    // console.log(`Each character is : ${greet}`);
}
//   MAPS 
const map = new Map()
map.set(`IN`,"India")
map.set(`USA`,"United States Of America")
map.set(`FR`,"France")
// console.log(map);
for (const [key,value] of map) {
    // console.log(key,`:-`,value);
}
const myObj = {
    game1 : 'COC',
    game2 : 'Valorant' 
}
for (const key in myObj) {
    // console.log(` The name of ${key} is ${myObj[key]}`);
}
const games = ["COC","GOD OF WAR","CS","VALORANT"]
for (const key in games) {
   console.log(`${games[key]}`);
}
