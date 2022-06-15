var randomNumber1=Math.floor(Math.random()*7);
var randomDice1="images/dice"+randomNumber1+".png";
diceImg1=document.querySelectorAll("img")[0].setAttribute("src",randomDice1);



var randomNumber2=Math.floor(Math.random()*7);
var randomDice2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

var winner=document.querySelector("h1");

if(randomNumber1===randomNumber2){
    winner.innerHTML="😅 Tie";
}
else if(randomNumber1>randomNumber2){
    winner.innerHTML="Player 1 Win";

}
else{
    winner.innerHTML="Player 2 Win";

}