function diceRoll(die, die2, dice1, dice2) {
   die = Math.floor(Math.random() * 6) + 1;
   die2 = Math.floor(Math.random() * 6) + 1;
   
   var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'; 
   dice1 = document.getElementById("dice");
   dice2 = document.getElementById("dice2");
    
   dice1.style.backgroundColor = hue;
   dice2.style.backgroundColor = hue;
    
   dice1.innerHTML = die;
   dice2.innerHTML = die2;

   var diceTotal = die + die2;
     
   var results = document.getElementById("results");
   results.innerHTML = "You rolled " + diceTotal + ".";
    
   if ( die === die2 ) {
            results.innerHTML += '<br> Doubles! You get a free turn!';
        }
}

document.getElementById("roll").addEventListener('click', diceRoll);