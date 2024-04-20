let randomNumber=Math.round((Math.random()*100+1))
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHigh=document.querySelector(".lowOrHigh");

const startOver=document.querySelector(".resultParas");

const p=document.createElement('p');

let prevGuess=[]
let numGuess=1
let playGame=true

if(playGame)
{
  //input and store user choice
   submit.addEventListener('click',function(e)
   {
     e.preventDefault();
     const guess=parseInt(userInput.value);
     console.log(typeof guess);
     validateGuess(guess);

   })
}
function validateGuess(guess)
{
  //validate guess entered
  if(isNaN(guess))
  {
  alert('Please Enter a valid number');
  }
  else if(guess<1)
  {
    alert('Please Enter a number above 1');
  }
  else if(guess>100)
  {
    alert('Please Enter a number below 100');
  }
  else
  {
    prevGuess.push(guess);
    if(numGuess === 11)
    {
      displayGuess(guess);
      displayMessage(`Game over. Number was ${randomNumber}`);
      endGame();
    }
    else
    {
      displayGuess(guess);
      checkGuess(guess);
    }
  }

}

function checkGuess(guess)
{
  if(guess === randomNumber)
  {
      displayMessage(`You guessed it right`);
      endGame();
  }
  else if(guess < randomNumber-10 )
  {
    displayMessage(`Number is tooo low`);
  }
  else if(guess < randomNumber )
  {
    displayMessage(`Number is low`);
  }
  else if(guess > randomNumber+10 )
  {
    displayMessage(`Number is tooo high`);
  }
  else
  {
    displayMessage(`Number is high`);
  }

}

function displayGuess(guess)
{
  userInput.value='';
  guessSlot.innerHTML +=` ${guess}, `
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`;
}

function displayMessage(message)
{
  lowOrHigh.innerHTML=`<h2>${message}</h2>`
}

function endGame()
{
  userInput.value='';
  userInput.setAttribute("disabled",'');
  p.classList.add('button');
  p.innerHTML=`<h2 id='newGame'>Start New Game</h2>`;
  startOver.appendChild(p);
  playGame=false;
  newGame();
}

function newGame()
{

 const newGameButton=document.querySelector('#newGame');
 newGameButton.addEventListener('click',function(e){
  randomNumber=Math.round((Math.random()*100+1));
  prevGuess=[];
  numGuess=1;
  guessSlot.innerHTML='';
  remaining.innerHTML=`${11-numGuess}`;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);
  playGame=true;
})

}

