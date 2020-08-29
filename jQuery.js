var playing = false;
var score;
var trialsleft;
var fruit = ['Apple', 'Banana', 'grapes', 'mango','pineapple', 'watermelon','strawberry','peach'];
$(function(){
    //Click on the Start/Reset Button
    $("#startreset").click(function(){
        //we are playing
        if( playing == true ){
            //reload page
            location.reload();
        }
        else {
            playing = true;
            score = 0;
            $("#trialsleft").show();
            $("#startreset").html("Reset Game");
            $("#scorevalue").html(score);
            trialsleft = 3;
            addHearts();
            startFruits();    
        }
    });
    
    
       
    
});


    //Check if we are playing
        //If we are playing
            //reload the page
        //If NP
            //show trials left
            //change button text to reset game
          
//Slice fruit
    //change point

function addHearts(){
                for(i =0 ; i<trialsleft; i++){
                $("#trialsleft").append('<img src="/Images/heart.png" class ="life">');
            }
}
function startFruits(){
    $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({'left' : Math.round(900*Math.random()), 'top' : -50});
      //1.create a random fruit
            //create random step
            //2.move the fruit down by onestep loop every 30 seconds
                //check if fruit is too loaw
                    //if not too low move it down by another step so repeat #2
                    //otherwise if fruit is too low, then ask for amount of trials
                        //if we do have trials left - create new random fruit, and remove 1 hert then repeat
}
function chooseFruit(){ 
    $("#fruit1").attr('src', 'Images/'+fruit[Math.round(7*Math.random())]+'.png');
}