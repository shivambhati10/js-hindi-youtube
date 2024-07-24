//kis tarah se data ko memory main rakha jaata hain and access kiya jaata h uske basis par data ka 2 categorization hai
//1. primitive and 2. non-primitive

//primitive--> ye call by value hote h original data nahi uska copy diya jaata h to jo bhi changes hote h vo copy data m hote h


// 7 types : string , number , boolean , null, undefined , symbol, 
//BIgint


//imp ye neeche walaa note h
//javascript is a dynamically type language 
//kyuki js variable ko uska type assign karti h runtime m on the basis of value



//non -primitive(reference)
//types: array, objects, functions

const id = Symbol('123')
const anotherId= Symbol('123')
console.log(id===anotherId);
//out is false for upper operation


//arrrays
const heros = ["shaktiman","flying jatt"]

//objects--> in key value pairs
let myobj= {
    name: "shivam",
    age:21,
}

//functions
// function ko store krne ke liye ek variable use krlo
const myFunction = function(){
    console.log("hello world");
}

// to find the datatype of an variable
console.log(typeof id);

//typeof agr krnege null ka to ans object aayega


//++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive ), heap memory(non-primitve)
//jab stack memory declare hoti h to uski copy milti h
//jab heap m define hoti h to waha se milta h reference original value m changes hote hain
 let mychannel =" shivamyoutubes"

 let anothername = mychannel
 anothername= "chaiaurcode"
 console.log(anothername);
 console.log(mychannel);
 //isme alag alag output milenge kyuki changes jo hue h vo copy m hue h


//object creation
 let userOne= {
    email:"shivam@gmail.com"

 }
let userTwo= userOne

userTwo.email= "bhati@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

//dono ka same output hoga kyuki jo changes hue h vo original data m hue h because of non-primitive datatype

