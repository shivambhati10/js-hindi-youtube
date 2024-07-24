// console.log(2>1);
// console.log(2>=1);
// console.log(2<1); //answer will be in true or false
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1); //true aayega kyuki js ne khud hee 2 ko number m convert krdiya h
//iss tareeke ke conversion ko hum avoid hee krte h jo neeche likhe hue h
console.log(null>0);  // false 
console.log(null==0); //false
console.log(null>=0); //true why??
//reason is that an == and comparisons > < >= =< work differently
//comparison convert null to a number, treating as a zero


// strict check -->  ===
// ye datatype bhi check krta h
console.log("2"===2);