const user = {
     username: " DNS",
     price: 99,
     welcomeMessage: function(){
     //  console.log(`${this.username} welcome to our website`);
     //  console.log(this);
     }
}
user.welcomeMessage()
user.username = " BHEEM"
user.welcomeMessage()
// console.log(this);
// function check(){
//      let username = "DNS"
//      console.log(this.username);
// }
// check()
const check = () => {
      let username = "DNS"
     // console.log(this);
}
check()
// const sumNo = (num1,num2) => {
// return(num1+num2);
// }
// const sumNo = (num1,num2) => (num1+num2) 
// console.log(sumNo(56,4))
// const sumNo = (num1,num2) => ({username:"DNS"})
// console.log(sumNo(20,20));

