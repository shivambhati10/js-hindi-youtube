//SINGLETON-->koi bhi constructor jisse aap bnate h to singleton ek object bnta h mtlb ye apni tarah ka ek hee object h
//jab hum literal ki tarah declare krte h to singleton nahi bnta
// Object.create -->aise bnta h singleton object

//object literals -->object ka declare karne ka tareeka h

//object literal
const mySym= Symbol("key1")
//interview question--> ek symbol ko as a key kaise use krenge, and print krke dikha do



const jsUser={
    name:"shivam", //name is key(key are in form of string js khud hee maan leta h usko) and shivam is value
    age: 21,
    mySym:"MYKEY1",
    [mySym]:"mykey1", //now its type will be symbol
    location : "ncr",
    email: "shivam990@gmail.com",
    isloggedIn: false,
    lastLoginDays:["monday","sunday"]

}
//two ways to access object
// console.log(jsUser.email)//jab dot lete h to string ki tarah nahi access krte
// console.log(jsUser["email"]) //better way than uparale se 
// console.log(jsUser.mySym); //ye lekin symbol ki tarah use nahi ho raha h, string ki tarah ho raha h
// console.log(typeof jsUser.mySym)
// console.log(jsUser[mySym]) //ye symbol ki tarah use ho raha h lekin output same hee rhega

//obect ki values ko change krna
jsUser.email="shivambhati990@gmail.com"

//agr chahte h ki value change hee na ho object ki to
//use freeze on object
// Object.freeze(jsUser)
jsUser.email="shivam@skype.com"
console.log(jsUser)

//functions ko aap variables ki tarah treat kr skte h
jsUser.greeting= function(){
    console.log("hello js user");

}
jsUser.greeting2= function(){
    console.log('hello js user, ${this.name}');

}
console.log(jsUser.greeting()) //output is undefined
console.log(jsUser.greeting2()); //function return back aayega,function execute nahi hua h bss function ka reference aaya h
