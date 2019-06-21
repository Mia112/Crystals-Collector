var generatedNumber;
var lost;
var win;


//create 4 crystals
for(var i = 0; i < 4; i++) {

// add a random hidden value between 1 and 12 on each crystals
    var randomNumber = Math.floor(Math.random() * 12) + 1;
       
        // console.log(randomNumber);

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "num-value": randomNumber
        });
    
    $(".crystals").append(crystal);
   
}
// capture our random number shown at the start of the game, between 19 - 120.
    //the math here is: Math.floor(Math.random() * (max - min)) + min
    generatedNumber = Math.floor(Math.random() * 101) + 19;

    // console.log(generatedNumber);

//this is the element/area that displays the choosen number on the page
    $("#random-result").html('Choosen Number: ' + generatedNumber);

//this allow us to click on each crystal 
    $(".crystal").on('click', function() {

    // console.log($(this));

//to get the value of each crystal that we click
    $(this).attr('num-value');

    console.log($(this).attr('num-value'));
});