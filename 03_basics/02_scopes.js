let a = 300  // GLOBAL SCOPE
if(true){
    let a = 10   /// BLOCK SCOPE
    const b = 20
    // console.log("Inner : ",a);
}
// console.log(a);
function one(){
    const username= "DNS"
    function two(){
        const website = " instagram"
    //     console.log(username);
 }
    // console.log(website);
    two()
}
one()
if(true){
    const username = "DNS"
    if(username == "DNS"){
        const website = " Insta"
        // console.log(username + website );
    }
    // console.log(website);
}
// console.log(username);
console.log(add1(5))
function add1(num){
    return num + 1;
}
const add2 = function(num){
    return num + 2
}
console.log(add2(5))