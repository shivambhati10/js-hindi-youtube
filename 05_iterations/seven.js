// REDUCE -->call back func milta h, add krdeta h array ki sabhi values ko
//accumulator -->khali empty variable diya jaata h, initialvalue jaise shuruwaat m 0 dedete h, jaati h iske andar
//currentvalue-->jo array m h
// //(accumulator, currentvalue)=> accumulator+currentvalue(inh dono ka sum accumulator m chala jaata h)

const myNums=[1,23,4,5,6]

// const myTotal= myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval ${currval}`)//har baari agr pata krna h ki acc or currval m kya aara h
//     return acc+ currval;
// }, 0) //  ye 0 yaha par initialvalue h jo shuruwat m acc m daalni h


//arrow function m krte h reduce ko
const myTotal= myNums.reduce((acc,curr)=> acc+curr,0)
console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"ds course",
        price: 999
    },
    {
        itemName:"python course",
        price: 299
    },
    {
        itemName:"cpp course",
        price: 2992
    }
]
const pricetoPay=shoppingCart.reduce( (acc,currval)=>acc+currval.price ,0)
console.log(pricetoPay);