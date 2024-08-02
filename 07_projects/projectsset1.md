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

## project 2 solution

```javascript
//isme submit waala event h
//jab bhi form submit hota h to uski value URL m ya server ke paas chli jaati
//value rokne ke liye-->form ka default action rokne ke liye use events
const form = document.querySelector('form');
//agr hum height or weight ki value function ke bahar lenge to, empty value milegi humko
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(Document.querySelector('#height').value);
  //iss se jo value aari h form m height waale column m string ki form m usko convert krdenge integer ki form m
  const weight = parseInt(Document.querySelector('#weight').value);
  const results = Document.querySelector('#results');
  //hum isko andar isley likh rhe h kyuki hume submit krne ke baad values chahiye

  if (height === '' || height < 0 || isNAN(height)) {
    results.innerHTML = `please give the valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNAN(weight)) {
    results.innerHTML = `please give the valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the results
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```
## project 3 solution code
```javascript
const clock=document.getElementById('clock')

//ek clock display krvani h...jo hare sec change ho
//aisa method hona chahiye jo har moment pr run ho, or jisse m control kr sku

//ye kehta h ki mujhe ek method dedo or bta do kitni baar run krna h, setinterval is use for events
setInterval(function(){
  let date =new Date()
// console.log(date.toLocaleTimeString());
clock.innerHTML=date.toLocaleTimeString();
},1000);//iss se har sec ka time dikhayega

```



