$(document).ready(function() {
    //variables
      crystals = ['assets/images/red.png','assets/images/blue.png','assets/images/yellow.png','assets/images/green.png'];
    
      var counter = 0;
      var wins = 0;
      var losses = 0;
      //win and loss counter
      $('#win').text(wins);
      $('#loss').text(losses);
      
      newCrystals();
      newGame();
      function newCrystals () {
        var numbers = []
          while(numbers.length < 4){
            var randomNumber = Math.ceil(Math.random()*15)
            var found = false;
            for (var i=0; i< numbers.length; i++){
            if (numbers[i] == randomNumber){
              found = true; break
            }
            }
            if(!found)numbers[numbers.length]=randomNumber;
          }
        //console.log(newCrystals);		
        