//singleton
const tinderUser= new Object()
tinderUser.id="12345"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    fullname:{
        userfullname:{
            firstname:"shibam",
            lastname:"bhati"
        }

    }
}
//acccessing objects
// console.log(regularUser.fullname);

const object1 ={1:"a", 2:"b"}
const object2={ 3:"c", 4:"d"}

// const object3={object1,object2}//object ke andar object aajayega\
 
//assign -->concatenate two objects
// const object3= Object.assign({},obect1,object2) //isme {} ye target h and , object1 and object2 are source


//sabse jaada use hoga spread operator(glass waala eg), to add values of two object
const object3={...object1,...object2}
// console.log(object3);

//ye syntax tab use krenge jab database se value aati h
//jab users database se aaynege to array of objects m aayneg
const users=[ //array of objects
    {
       id:1,
       email:"shivam@gmail.com",


    },
    {
        name:"shivam",
        lastname:"bhati"

    },
    {

    }
]
users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
//isme hum objects ki saari keys print krvayi or iska dataype jo aaaya h vo h array

console.log(Object.entries(tinderUser)); // [['key','value'],

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//**********oBJECT DE STRUCTURE */

//react se object milega uski de structuring krke value deni hogi

const course={
    coursename1:" js in hindi",
    price: "999",
    courseInstructer: "shivam"

}   
// course.courseInstructer

const {courseInstructer: instructor}= course //yaha. humne naam bhi change krdiya courseinstructor se instructotr bna diya
console.log(instructor);

//react
//de structuring ka pta chlega ye neeche waale curly braces ko dekhkar
// const navbar= ({company}) => {

// }
// navbar(company="shivam")

//API-> jab apna kam dusre par daalna ho
//API is ki backend se kchh values aati h , unh values ko aap kaise likhte h
// ab values aati h aapne paas json ki form m

// {
//     //ye json h
//     name: "shivam",
//     coursename: "js in hindi",
//     price:  "free"
// }

//APIs in array format
[
    {},
    {},
    {}
]
//jitna bhi API h je json format hee h
