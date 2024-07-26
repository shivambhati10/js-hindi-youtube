
//{}-->scope
// var c=300
//var ke andar dikkat h kyuki agr hum scope ke andar bhi declare krre h value ko or scope ke bahar access krva rahe h to vo ho jaayegi
//access isley hum var ko avoid krte h

let a=200;
if(true){
    //let a=10 //kchh bhi output nahi aaygea, var ke alawa
    //const b=20 //kyuki output ke andar h
     c=30
}
// for(let i=0;i<Array.length;i++){
//     const element= array[i];
// }
// console.log(a);
// console.log(b);
// console.log(c);

//jo browser m jaakr scope check krte h console se vo alag h
//or jo code m node ke through scope check krte h vo alag h


//***** next class ***** */

//closure-->ISKE LIYE DOM(documented object model) aaana chahiye

//nested scope
//bada chote se ice cream nahi maang skta 
//yaha par bada one h
function one(){
    const username="shivam"
    function two(){
       const website= "youtube"
       console.log(username) ;//inner function accessing outer function
      
    }
    // console.log(website); //ye error dega
    two()

}
// one()

if(true){
    const username="shivam"
    if(username==="shivam"){
        const website="youtube"
        console.log(username+ website)
    }
    // console.log(website); //outside the scope

}
// console.log(username) //outside the scope


//+++++ INTERESTING+++++++++
//basic function
console.log(addone(5)) //ans aa jaayega 6
function addone(num){
    return num +1
}
//addone(5)

//ye bhi function h, lekin isko expression bhi bol dete h, neeche wale ko
//ye bhi technique h function ke liye

addtwo(8)//declaration se phle hee access kr rha hu //yaha error aajayegi, kyuki ye function ka dusra type h,
//hosting concept se ye phle hee kisi variable ke andar rkha h,to isko access nahi kr skte
const addtwo=function(num){
    return num +2;
}
//addtwo(8)