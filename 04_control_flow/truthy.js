const userMail= "shivam990@gmail.com"
//yaha par maan liya gaya h ki userMail true h , agr userMail khali hota to usko false maante 
if(userMail){
   console.log("got user mail");
}else{
    console.log("dont have user mail")
}


//falsy values--> false, 0, -0, BigInt 0n , "", null, undefined, NaN iske alawa baaki sab truthy value h

// truthy value--> "0" (string ke andar 0), 'false' ," " space dediya string m ,[] empty array, {} empty object, function(){} -->empty function 

//array for falsy ke liye
// const usermail1= []
// if(usermail1.length===0){
//     console.log("array is empty")
// }

//for empty object
const emptyobj= {}
if(Object.keys(emptyobj).length===0){ //object ka O capital hona chahiye
    console.log("object is empty");
}


// Nullish coalescing operator (??): null undefined
//ye operator jab use hota h jab ans m null or undefined ki jagah kchh or value assign krni ho
//ye operator null or undefined ke liye bana h
let val1;
val1=5??10 //ans is 5
//iska mtlb h ki agr dono m se kchh bhi aara h to vo hee assign krdo
val2=null??10 //ams is 10
 val3=null??10??20 //isme aayega 10, jo null ke baad aye vo value assign hoti h
 
console.log(val1);
console.log(val2)

//terniary operator 
// condition  ? true: false

const tea= 100
tea>=80? console.log("less than 80") : console.log("more than80")
