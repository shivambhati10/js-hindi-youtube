const name="shivam"
const repoCount= 50

console.log(name+ repoCount + "value");

//stirng interposition
//place holders bnate h jisme variable ko inject kr skte h
console.log('hello my name is ${name} and my repo count is ${repoCount}');
// ye syntax jaada sahi h upar waale se

//one more way to declare the string
const gameName= new String('shivam-hc-dot-com')

console.log(gameName[0]);

console.log(gameName.__proto__); //accessing object syntax

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-4,3) //slice m aap negative values add kr skte ho
console.log(anotherString);

const newSTRone= "    shivam   "

console.log(newSTRone);
console.log(newSTRone.trim());
//trim remove the spaces 

const url= "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20', '-')); //ye replace krdega - iss se

console.log(url.includes('hitesh')) //kya hmare data m hitesh h ya nahi

//converting upper string into array using split
console.log(gameName.split('-'));