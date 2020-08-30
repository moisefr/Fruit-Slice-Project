var playing = false;
var score = 0;
var trialsleft;
var fruit = ['Apple', 'Banana', 'grapes', 'mango','pineapple', 'watermelon','strawberry','peach'];
var step;
var action;
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
            $("#wrong").hide();
            startFruits();    
        }
    });
    //Slice Fruit using the mouseover Method
    $("#fruit1").mouseover(function(){
            //Slice fruit
        //change point
        score++;
        $("#scorevalue").html(score);//updates the score
        $("#slicesound")[0].play();//play sound
        clearInterval(action);//stop fruit and hide it
        $("#fruit1").hide("explode", 150);//slice fruit
        setTimeout(startFruits, 500);
        

    });
//JQUERY CLICK/Hover/mousover EVENTS ABOVE    
//CUSTOM FUNCTIONS BELOW
    function addHearts(){
        $("#trialsleft").empty();        
        for(i =0 ; i<trialsleft; i++){
                $("#trialsleft").append('<img src="/Images/heart.png" class ="life">');
            }
    }
    function startFruits(){
        runFruits();
        //IMPORTANT WAY TO DO CUSTOM ANIMATIONS USE SET INTERVAL AND CHANGE A CSS ELEMENT move fruit down by 1
        //declare it with a variable that spits out a value when the function is called
        action = setInterval(function(){
            $("#fruit1").css('top', $("#fruit1").position().top + step);
            //check if fruit is too low
            if($("#fruit1").position().top > $("#fruitcontainer").height()){
                //Check the amount of trials left
                if(trialsleft > 1){
                    runFruits();
                    trialsleft --;
                    addHearts()
                }else{// game over
                    playing = false;
                    $("#startreset").html("Start Game");
                    $("#trialsleft").hide();
                    $("#wrong").show();
                    $("#endgamge2").html("Your Score is: " + score);
                    $("#trialsleft").hide();
                    $("#score").hide();
        //                stopAction();
                }
            }
        }, 10);

    }
    function chooseFruit(){ 
        $("#fruit1").attr('src', 'Images/'+fruit[Math.round(7*Math.random())]+'.png');
    }
    function runFruits(){
        $("#fruit1").show();
        chooseFruit();
        //random horizontal position
        $("#fruit1").css({'left' : Math.round(900*Math.random()), 'top' : -50});
        //Generate Random from 1 through 10
        step = 1 + Math.round(9*Math.random());
    }
    function stopAction(){
        clearInterval(action);
        $("#fruit1").hide();
    }
});