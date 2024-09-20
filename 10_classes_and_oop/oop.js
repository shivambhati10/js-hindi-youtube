//object literal
const user={
    username: "hitesh",
    loginCount: 8,
    SignedIn: true,

    //method
//     getUserDetails: function(){
//         // // console.log("Got user details from database")
//         // console.log(`username: ${this.username}`); //this is use for current context values
//         // console.log(this);  //jitna bhi current context memory m pada h


//     }

}
// console.log(user.username);
// console.log(user.getUserDetails())


// Constructor function ==> ye aapko naya instance(nayi jagah deta h) using new keyword

// const promiseOne= new Promise() //ye new keyword hee constructor h, ye kaam krta h ek hee object literal se tum multiple instances bana sako
//this ek object h, or uske andar value daali jaati h

function User(username, logincount, isLoggedIn){
    this.username= username;
   // left waali value hmara variable h, and right vaali value ko tum paas krke dere ho
   this.logincount= logincount;
   this.isLoggedIn= isLoggedIn;

   return this  // is se itna farak nahi pdta return kro ya na kro
}

const userOne= new User("shivam", 12, true) //use new keyword ki bhai mujhe naya instance do taaki values overwrite na ho
const userTwo= new User("rahul", 14, false)
//humne userone ko console kiya lekin output m aagyi usertwo ki value \..overwrite krdiya usertwo ne userone ko ==> iska sol h ki new keyword
console.log(userOne.constructor); //constructor property reference hoti h khudi ke baare m...ye bata deti h ki konse function par aap kaam krre ho

// NEW KEYWORD.
//. 1. jab new keyword use krenge to ek empty object create hota h , jisko instance bola jata h
// 2. ek constructor function call hota h, new keyword ki wajah se, ye uske andar jitne arguements h unko pack krke aapko dedeta h
// 3. this keyword ke andar jo bhi arguements likhe h vo inject ho jaate h
// 4. aapko mil jaate h function ke andar.

