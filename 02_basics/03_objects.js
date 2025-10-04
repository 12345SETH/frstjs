// singleton - Object.create
// OBJECT LITERALS
const mySym = Symbol("key1")
const JsUser = {
    name : "DNS",
    "full name": "DNS SERVER",
    [mySym]: "mykey1",
    age : 18,
    address : "Lucknow",
    email : "dns@google.com",
    isLoggedIn : false,
    isLoggedInDays : ["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
JsUser.email = "dns@microsoft.com"
// Object.freeze(JsUser)
JsUser.email = "dns@apple.com"
// console.log(JsUser);
JsUser.greeting = function(){
    console.log("Hey JsUser!!");
}
JsUser.greeting2 = function(){
console.log(`Hey JsUser,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());


 