//ARRAYS
//()-->paranthesis
//{}--> curly braces
//arrays are written in sqaure brackets
//kisi bhi type ke elements ko le skte h hum array m
// js arrays are resizable

const myArr = [0,1,2,,3,4,5]
// //to acces arrays
// console.log(myArr[0]);

//arrays in js form shallow copies while performing copy operation
//deep copy->A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.
//shallow copy-->A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too
// const myheroes =["shaktimanb","homelander"]
// const myArr2= new Array(1,2,34,5,6)// ye automatically square brackets ko add krdega



// //array methods
// myArr.push(6)//add values in array
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9) //add 9 to the first place
// myArr.shift() //9 ko hatane ke liye
// console.log(myArr.includes(9)) //ans will be false boolean
// console.log(myArr.indexOf(9)) //ans will be -1 bcoz 9 is not there in the list
// const newArr = myArr.join() //join combine bhi kar deta h or array ka type bhi string krdiya h


// console.log(myArr);
// console.log(typeof newArr);

// console.log("shivam");

//SLICE OR SPLICE

console.log("A",myArr);
//original array

const myn1= myArr.slice(1,3) //2 index tak jaayega 3 ko include nahi krega


console.log(myn1);//slice m last range include nahi hui h

//using slice in B
console.log("B",myArr);

const myn2= myArr.splice(1,3)
//using splic in C
console.log("C",myArr);//ans is  C[0,4,5]
console.log(myn2); // ans is [1,2,3]
//splice m original arrray hee manipulate ho jaata h mtlb change ho jaata h
//splice [1,2,3] nikal jaayega baaki bachi hui array ans m aayegi