var diceImage = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var output = Math.floor(Math.random()*6)+1 ;
var diceOutcome = "images/"+ diceImage[output-1];
console.log(diceOutcome);
document.querySelectorAll("img")[0].setAttribute("src",diceOutcome);
var output1 = Math.floor(Math.random()*6) +1;
var randomDice = "images/dice"+ output1+".png"
document.querySelectorAll("img")[1].setAttribute("src",randomDice);
if(output>output1){
    document.querySelector("h1").innerHTML = "&#128681; Player 1 Wins";
}
else if(output===output1){
    document.querySelector("h1").innerHTML = "DRAW";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins &#128681;";
}