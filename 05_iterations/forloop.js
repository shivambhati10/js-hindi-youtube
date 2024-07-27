// FOR
for (let index = 0; index< 9; index++) {
    const element =index;
    console.log(element);
}
// for (let i= 0; i< 10; i++) {
//     console.log(`outer loop value:${i}`)
//     for (let j = 0; j < 10 ;j++) {
//        console.log(i+'*'+j+'='+i*j);    
//     }
    
// }


// break and continue
//condition ke basis pr loop ko rokna
// for (let ind = 0; ind <=20; ind++) {
//     if(ind==5){
//         console.log(`detected 5`)
//         break //yaha par break ke baad kchh nahi print hoga
//     }
//     console.log(`value of i is ${ind}`)
    
// }
for (let ind = 0; ind <=20; ind++) {
    if(ind==5){
        console.log(`detected 5`)
        continue //isme hum bass val=5 ko skip krdenge or baaki aage ka print hoga sab
    }
    console.log(`value of i is ${ind}`)
    
}
