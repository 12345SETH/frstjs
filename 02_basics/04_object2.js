// const tinderUser = new Object() - SINGLETON OBJECT
const tinderUser = {} // NON - SINGLETON OBJECT
tinderUser.id = "awd345"
tinderUser.name = "Ram"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
const snapUser = {
    email : " dns@google.com",
    fullName : {
        userFullName :{
            firstName : " DNS",
            lastName : " Server"             
        }
    }
}
// console.log(snapUser["fullName"]["userFullName"]);
const obj1 = {1:"A", 2: "B"}
const obj2 = {3:"C",4: " D"}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2} // SPREAD OPERATION
// console.log(obj3);
const user = [
    {
        id:1,
        email:"abc@google.com"
    },
    {
        name:"DNS",
    },{

    }
]
// (user[1].email)
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



