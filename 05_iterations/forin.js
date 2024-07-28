// FOR IN --> OBJECTS CAN ITERATE, or dusro data structures ko bhi iterate kr skta h
//for of--> ye arrays ke liyye h, and maps ke liye
const myObj ={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"

}
for (const key in myObj) {
//    console.log(`${key} shortcut is for ${myObj[key]}`);
}

//for in for arrays

const programming=["js","rb","py","java","cpp"] //arrrays ki keys 0 se start hoti h, lekin object m jo marzi tum daal skte ho
for (const key in programming) {
//   console.log(programming[key])
}


//can we use forin loop for maps
//maps are not iterable for forin loop
// const map= new Map()
// map.set('IN',"India") //key and value pair h
// map.set('USA', "united states of america")
// map.set('FR',"france")
// map.set('IN',"India")

for (const key in map) {
   console.log()
}
// kch ans nahi aayega 

