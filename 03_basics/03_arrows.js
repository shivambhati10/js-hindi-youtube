//THIS--> this keyword current context ke baare m btata h
//ARROW FUNCTION-->isko smjhane ke liye this keyword samajhna pdega

const user={ //ye to object h
    username:"shivam",
    price: 999,
    //current context iske andar aayega bss
    //ye welcome message ussi ko jaana chahiye jo function m aayega
    //ab aisa bhi ho skta h ki koi or aaye or naam change krde shivam se kchh or
    welcomemessage: function(){
        // console.log(`${this.username} ,welcome to website`)
        // console.log(this) //ye print krdega dono ko achhhe se
   }
}
//context mtlb values, value change kri to ho gyi
// user.welcomemessage()
// user.username="rahul"
// user.welcomemessage()
// console.log(this)//ye ans dega {} empty kyuki global m kch h hee nahi
//windows-->browser ke andar jab engine run krta h js wala to sbse jaada jo global object window h

// function chai(){
//     let username="shivam"
//     //function ke andar this use nahi kr paa raha hu
//     //ye object ke andar chlega(not sure)
//     console.log(this.username);// ans is undefined


// DECLARING FUNCTIONS USING ARROW FUNCTION
const chai= ()=> {
    let username= "shivam"
    console.log(this.username) //ye bhi ans undefined hee dega
}
// chai()


//ARROW FUNCTION ()=>{}
//     const addTwo=(num1,num2)=> {
//         return num1+ num2
//     }
//    console.log( addTwo(3,4))


//IMPLICIT RETURN--> {} isko hata do return keyword hata do, ek hee line m krdo sara
const addTwo=(num1,num2)=> num1+ num2

console.log( addTwo(3,4))
//{ } isme return keyword likhna hee hoga
//() paranthesis isme return keyword nahi use krte

//()iss se fayda kya hora h
//jab object return krenge to ( )iska kaise use hoga

const addtwo=(num1,num2) =>({username:"shivam"})
console.log(addtwo(3,4))

//arrow functions in array

const myarray=[1,2,33445,6,3]
myarray.forEach( () => {}) //forEach is a loop