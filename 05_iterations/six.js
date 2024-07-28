const coding =["js","ruby","java","python"]

// const values= coding.forEach( (item)=>{
//     console.log(item); //yaha to values print ho jaayengi
// })
// console.log(values); //for each return krega undefined

const Mynums=[1,23,4,5,67,8,4,,32,,2]
// FILTER OPERATION-->ye bhi for each ki tarah call back leta h, or isme condition bhi use hoti h
//ye values ko return krta h,lekin foreach  loop nahi krta
// const newNums=Mynums.filter( (num)=>num>4)
//  console.log(newNums) //return krdega value ko

//one more way
//  const newNums=Mynums.filter( (num)=>{
//     return num>4 //jab {} ye lgate h to return keyword ko use krte h
//  })


//ek arrray se dusre m copy krna value ko
// const newNums=[]
// Mynums.forEach( (num)=>{
//     if(num>4){
//         newNums.push(num);
//     }
// } )
//  console.log(newNums)


//const userbooks=books.filter( (bk)=>bk.genre=='history')

//map
// const Mynumber=[1,2,3,5,6,7,8,9]
// const newNums= Mynumber.map( (num)=>num+10)
// console.log(newNums)


//chaining
const Mynumber=[1,2,3,5,6,7,8,9]
const newNums= Mynumber
               .map( (num)=>num*10) //jo yaha result aayega vo seconnd map m paas ho jaayega
               .map( (num)=> num+1) //jitni marzi utni chaining kr skte h
               .filter( (num)=>num>=40)
console.log(newNums)
