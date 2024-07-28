// for of

// //array ke andar objects
// [{}, {}, {}]

const arr=[1,2,4,5,6]
for (const num of arr) { //yaha par object se mtlb h array , object ,string
  console.log(num);
    
}

// const greeting= "hello users";
// for (const greet of greeting) {
//     console.log(`each char is ${greet}`)
// }

//maps--> datatypes in js,unique values hoti h isme
//ye object h jo hold krta h key value pair ko

const map= new Map()
map.set('IN',"India") //key and value pair h
map.set('USA', "united states of america")
map.set('FR',"france")
map.set('IN',"India") //ab yaha par ye dubara print nahi hoga,only unique values it takes

// console.log(map);

//ab map main for of looop lgate h

for(const [key,value] of map){
    console.log(key,':-',value);
}

//for of in object ->OBJECTS ARE NOT ITERABLE  BY FOROF
const myObj = {
    'game':'NFS',
    'game2':'spiderman'
    
}
for(const [key,value] of myObj){
    console.log(key,':-',value);
}


