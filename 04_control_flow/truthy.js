//  Truthy Values => "0",'false'," "(space),[],{},function(){}
// const userEmail = "Dns@google.com"
const userEmail = []
if(userEmail){
    // console.log("Got User Mail");
}else{
    // console.log("Access Denied");
}
if(userEmail.length === 0){
    // console.log("Array is empty");
}
const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
// console.log("Object is empty");

}
// Falsy Values =>  False,0,-0,BigInt 0n,"",undefined,NaN
//  Nullish Coalescing Operator (??) = Null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
console.log(val1);
 
