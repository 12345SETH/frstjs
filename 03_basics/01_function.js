function addNum(Num1,Num2){
    let result = Num1+Num2
    return result
}
const result = addNum(5,null)
// console.log("Result : ",result);
function loginUserMess(username){
    if(!username){
        console.log("Enter a Username");
        return
    }
    return `${username}Just Logged In`
}
 const display = loginUserMess(" ")
//  console.log(display);
 function calculateCartPrice(val1,val2,...num){ // REST METHOD - ...variable that stores rest all elements into an array
    return num 
 }
//  console.log(calculateCartPrice(200,300,700,1000,590));
 const user = {
    username:"DNS",
    price:99
 }
 function handleObject(anyObject){
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
return
 }
//  handleObject(user)
handleObject({
    username:"DNS",
    price:199
})
const arr = [100,200,674,1000]
function returnValue(getArray){
return getArray[1]
}
console.log(returnValue([300,500,2000,450]));
