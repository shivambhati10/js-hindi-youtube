//code ko aapne package m band krdiya h fir uski aap jaha chahe uski copies le jaa skte h

function sayMyname(){//function definition
 console.log("s");//jitna baar bhi isko call krvana ho hum krva skte h
 console.log("h");
 console.log("i");
 console.log("v");
 console.log("a");
 console.log("m");

}
//sayMyname is function reference, ()ye execute
// sayMyname()

// function addTwonumbers(num1,num2){ //parameters-->function ki defintion m hote h parameters jaise num1, num2
//     console.log(num1+num2)
// }

function addTwonumbers(num1,num2){ //parameters-->function ki defintion m hote h parameters jaise num1, num2
 //1.
    // let result =num1+num2;
    // return result //ab undefined nahi aayega
    // console.log("shivam")//ye print nahi hoga kyuki function ne pehle hee return lga diya h
//2.
    //directly return bhi kr skte h
    return num1+num2
}

const result =addTwonumbers(3,5) //arguements-->jab function ko call krate h uske andar jo values paas krte h jaise 3 and 5
//output aara h 8, but result ki value is undefined?
// console.log("Result:",result); //Result: undefined 
//function return krna h undefined lekin console sirf print krra h

function loginUsermessage(username="sam"){
    if(username===undefined)//or we can write if(!username)
    {
        console.log("please enter a username")

    }
    return `${username} just logged in`
}
// loginUsermessage("shivam") //yaha kchh output nahi aayega kyuki console nahi lga h
// console.log(loginUsermessage("shivam"))
// console.log(loginUsermessage())//undefined just logged in
//ab agr hum parameter m hee value daal denge to kabhi undefined nahi hoga
//kyuki agr arguement m value paas krenege to firr parameter waali value ko overwrite krdega.
 
// ********** next class on fuction ********


//aage jaake projects m aap shopping cart bnayenge-->
//shopping cart m ye nahi pata hota h ki kitne no. of items or arguement aayenge

//rest=spread operator (...) for shopping cart problrm
//rest operator se saare items ko array m daal skte h
function calculateCartPrice(val1,val2, ...num1){
    return num1
} 
// console.log(calculateCartPrice(200,300,400,500))//val1 ->200,val2->300, baaki values rest m(...)


//how to paas object in a functin
const user={
    username:"shivam",
    price:199
}

function handleObject(anyobject){//parameter m kchh bhi naam de skte h
      console.log(`username is ${anyobject.username} and price is ${anyobject.price}`); //function response krega parameter ke basis par

 }

handleObject(user)//yaha par compulsory object ka hee name paas krna pdega
//aap directly bhi object ko pass kr skte h function m

handleObject({
    username:"shiv",
    price:999
})

//passing arrays in function
const myNewarray=[200,300,400,500]

function returnSecondValue(getarray){//yaha bhi kchh bhi naam le skte h
    return getarray[1] //300 will be output

}
console.log(returnSecondValue(myNewarray));

