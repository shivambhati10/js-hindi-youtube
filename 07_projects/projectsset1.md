# projects related to DOM

## project link
[click here ](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

```javascript
console.log("shivam")
//saare buttons ko select krna pdega then to select body
//phle saare buttons select krne ke liye
const buttons=document.querySelectorAll('.button');
console.log(buttons);
//ab body select krni h
const body=document.querySelector("body");

//events-->click krna, cursor move krna 

//nodelist-->foreach loop
buttons.forEach(function(button){
  console.log(button);
  //ab yaha event ko sun ne waala likhenge click event function ke through lekin jab ek event hota h to aapko sath m carry krna hota h-->event object
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target); //iss se ye pata chalta h ki event kaha se aara h mtlb kya click krne se kya event hora h

    if(e.target.id==='grey'){
      body.style.background=e.target.id;
    }
    if(e.target.id==='white'){
      body.style.background=e.target.id;
    }
    if(e.target.id==='blue'){
      body.style.background=e.target.id;
    }
    if(e.target.id==='yellow'){
      body.style.background=e.target.id;
    }
  })
});
```