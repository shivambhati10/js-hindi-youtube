//dates aRe calculated in milliseconds
//DATES are object
//in js months are started from 0.


// let myDate= new Date() //date ka ek object bna diya
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate)

// let newDate= new Date(2023,0,23,3,4);
// console.log(newDate.toDateString());
let newDate= new Date("01-14-2024"); //isme months ki shuruwaat 1 se hoti h
//this is yy/mm/dd
console.log(newDate.toLocaleString());

//in india we follow mm/dd/yy

//now timestamps it is used where we have to create the poll
// let myTimeStamp= Date.now()
// console.log(myTimeStamp);//ans will be in miliseconds
// console.log(myTimeStamp.getTime());

//to convert into seconds
//date.now give the exact date of now in millisecond
// console.log(Math.floor(Date.now()/1000)); //ans will be in seconds

let newDate1= new Date();
// console.log(newDate1);
//console.log(newDate1.getDate()); //iss se bss agr hum month print hoga

// 
//FEATURES OF LOCALESTRING
//localestring khud hee ek object h
//jo output aara tha usko aap khud customize kr skte ho
newDate1.toLocaleString('default',{
    weekday: "long",
    
})
console.log(newDate1);