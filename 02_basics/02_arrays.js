const marvel_heros= ["thor","ironman","spiderman"];
const dc_heros=["superman","batman"]

// marvel_heros.push(dc_heros) //ye dc waali array ko as a element lelega
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //gives output as a batman, not a good practice
// const allHeros= marvel_heros.concat(dc_heros)
// console.log(allHeros);
//push existing array par react krta h lekin jo concat h vo return krtA H NEW ARRAY

//SPREAD OPERATOR
//kaanch ka glass neeche daalenge to spread ho 
const all_new_heroes= [...marvel_heros,...dc_heros]
console.log(all_new_heroes);

const anotherArray= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
//flat-> sabhi array ko ek hee array m add krdega
const real_another_array=anotherArray.flat(Infinity)
console.log(real_another_array);


//to check for array->isArray
console.log(Array.isArray("shivam"));
//to convert into the array-->from
console.log(Array.from("shivam"));

//you can pass object also
console.log(Array.from({name:"shivam"}));//interesting bcoz 
//ans is empty array because it is not defined which is key or value

let score1=100
let score2=200
let score3=399
//in teeno ko ek array m convert krna
console.log(Array.of(score1,score2,score3));
