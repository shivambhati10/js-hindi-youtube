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


## project 4 solution code
```javascript
let randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');

//now take user input
const userInput=document.querySelector('#guessField');
//ye previous guess of arrrays h
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');
//ye neeche waala ek array hoga,jo user value guess krega usko dikha denge taaki user dubara se usi samne value ko guess na kre

let prevGuess=[];
let numGuess=1;

let playGame=true;//games m iss condition ka true hona jroori hota 
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();//kyuki form h taaki values server tak na jaaye
    const guess=parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number');
  } else if(guess<1){
    alert('Please enter a  number greater than 1');
  } else if(guess>100){
    alert('Please enter a  number less than 100');
  }else{
    prevGuess.push(guess)
    if(numGuess==11){
      displayGuess(guess)
      displayMessage(`game over. Random number was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }

  }
}

function checkGuess(guess){
  //kahi value random number ke equal to nahi h,and value should be in between 1 and 
  if(guess===randomNumber){
    displayMessage(`you guessed it right `);
    endGame();

  }else if(guess<randomNumber){
   displayMessage(`number is tooo low`);
  }else if(guess>randomNumber){
    displayMessage(`number is tooo high`);
 }
  
}
function displayGuess(guess){
//input value ko dubara khali krdenge,innerHTML m apna guess add krdenge,numbers ko kam krdenge
userInput.value='';
guessSlot.innerHTML+= `${guess}  `;//value push krre h
numGuess++;
remaining.innerHTML=`${11-numGuess}`;

}

function displayMessage(message){
// low or hi m message paaas krega
lowOrHi.innerHTM=`<h2>${message}</h2>`;
}

function endGame(){
  //game end bhi krna podega
  userInput.value=''; //value khali krdi
  userInput.setAttribute('disabled','');//user koi or value set na kr paaye ,key value pair h
  p.classList.add('button');
  p.innerHTML=`<h2 id="newGame"> Start new Game </h2>`;
  startOver.appendChild(p);//p add krdiya startOver m. 
  playGame=false;
  newGame();

}


function newGame(){
  // new game bhi shuru krna pdega
  const newGamebutton=document.querySelector('#newGame');
  newGamebutton.addEventListener('click',
  function(e){
    //saari values or variables ko reset krdenge
     randomNumber=parseInt(Math.random()*100 +1);
     prevGuess=[];
     numGuess=1;
     guessSlot.innerHTML= '';
     remaining.innerHTML= `${11-numGuess}`;
     userInput.removeAttribute('disabled');
     startOver.removeChild(p);
     playGame=true;


  });
} 

```



