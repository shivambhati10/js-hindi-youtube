// Immediately Invoked Function Expressions (IIFE)

//IIFE-->kisi function ko likhte hee execute krvana ho, global variables hmare function m dikkat na de

(function chai(){
    //named iife
    console.log(`DB CONNECTED`)
})() ; // ; ye lagana jroori h isme kyuki iife ko nahi pata ki rukna kaha par h

// do paranthesis h ()() 1 waala to function definition h
//second waala h execution jaise chai() isme () ye

//arrow function ki tarah likhna
( ()=>{
    console.log(`DB CONNECTED TWO`);
}

)();
((name)=> {
    console.log(`db connected here also ${name}`)
}


)("shivam bhati")

//jab do iife ek saath likho use ; semicolon
