// numbers

const score =400 //datatype is number
console.log(score)
//if we want to explicitally add datatype as a number then
const balance = new Number(100) //ab confirm h ki datatype number hee hoga
console.log(balance)

console.log(balance.toString().length); //ab isko number ko humne string m convert krdiya h
//output will be 3 bcoz there are 3 characters
console.log(balance.toFixed(2));
//o/p will be 100.00 because hume precision iska 2 value tak chahiye
//mtlb decimal ke baad 2 zero chahiye


const otherNumber = 23.8966
console.log(otherNumber.toPrecision(4));
//ye string return krti h jisme number hote h 
//isme jaise 4 ka precision diya h to 9 waali chhez ko round off krke 0 krdegi and 8 ko 9 bna degi

const hundreds =100000;
console.log(hundreds.toLocaleString('en-IN'));
//numbers ka representation easy krna


//***********MATHS************ */

//MATHS LIBRARY JS MAIN BY DEFAULT AATI H
//ye apne aap m ek object h

// console.log(Math);
// console.log(Math.abs(-4)) //only negative changes to positive
// console.log(Math.round(4.3)) //round off the value
// console.log(Math.ceil(4.2)) //upar wali value lega roundoff krke output will be 5
// console.log(Math.floor(4.9)) //output will be 4
// console.log(Math.min(2,3,1,4,6,6))


//math library yaha random par sbse jaada use hogi
// console.log(Math.random()); //random ki value hmesha 0 and 1 ke beech m aayegi
// console.log((Math.random()*10)+1);
//aapko kinh do number ke beech m values chahiye uspar depend krta h ki aapko kiss se multiply krna h

//trick and formula to learn
const min=10
const max=20
//hume 10 and 20 ke beech value chahiye

//imp line
console.log(Math.floor(Math.random()*(max-min+1))+min);
//max-min se range mil jaayegi and +1 isley ki zero na aaye, and floor isley ki decimal value na aaye roundoff kkrke lower value aaye.