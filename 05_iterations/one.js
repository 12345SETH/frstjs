//  for loop
for (let i = 0;i <=10;i++) {
    const element = i;
    if(element==5){
        // console.log("5 is best number");
    }
    // console.log(element);
}
for (let i = 0; i <=4; i++) {
    // console.log(`Outer loop value : ${i}`);
    
for (let j = 0; j <=4; j++) {
    // console.log(`Inner loop value : ${j}`);
// console.log(i+`*`+j+` =` +i*j);
}
}
let array = ["MATHS","ENGLISH", "HINDI"]
// console.log(array.length);

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log(element);
    
}
//  BREAK AND CONTINUE
// for (let i = 1; i <=20; i++) {
//     if(i==5){
//         console.log(" 5 is Detected");
//         break
//     }
//    console.log(`Value of i is : ${i}`);
// }
for (let i = 1; i <=20; i++) {
    if(i==5){
        // console.log(" 5 is Detected");
        continue
    }
//    console.log(`Value of i is : ${i}`);
}
//                                          WHILE AND DO - WHILE LOOP
// let i = 0
// while(i<=10){
    // console.log(`Value of i is : ${i}`);
    // i = i + 2
// }
let myArray = ["HEY","HELLO","HI"]
let i = 0
while(i<myArray.length){
    // console.log(`Value is : ${myArray[i]}`);
    i = i+1
}
let score = 11;
do{
    console.log(`Score is : ${score}`);
    score = score +1
}while(score<=10);
