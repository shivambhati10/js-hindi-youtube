//kchh loops direct hee arrays ki proprty m add krdiye jaate h

const coding =["js","ruby","java","python"]

coding.forEach( function (val) {   //val ki jagah kchh bhi naam rakh skte h array par iterate krvane ke liye
    // console.log(val)
} ) //iss function ko call back kaha gya h to, iss waale function naam nahi hota h
//kyuki ye function array ke andar chal raha h to ye val unki value lekar aayega parameter ki tarah


//one more variation--> arrow function
coding.forEach( (item)=>{
    // console.log(item);
})

// one more way
function printMe(item){
    // console.log(item);
}
coding.forEach(printMe);

//for each ke paas sirf ek hee parameter ka access nahi hota ,iske paas index bhi aata h and pura array bhi aata h

// coding.forEach( (item,index,arr)=>{ //ab iss se item uska index and pura array print ho jaayega
//     console.log(item,index,arr)
// })


// //array ke andar objects-->more used in for each loopp
// [{}, {}, {}]
//ye jroori h kyuki-->database se jo value aati h vo array ki form m aati h

const myCoding= [
{
    languagename: "javascript",
    languagefilename:"js"
},
{
    languagename: "javas",
    languagefilename:"java"
},
{
    languagename: "python",
    languagefilename:"py"
}
]
myCoding.forEach( (item)=>{
    console.log(`${item.languagename} : ${item.languagefilename}`);
   
})
