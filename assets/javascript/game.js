var generatedNumber;
var lost = 0;
var win =0;
var previous = 0;


var resetAndStart = function (){

    $(".crystals").empty();

    var images = [
        "assets/image/img8.jpg",
        "assets/image/img1.jpg",
        "assets/image/img4.jpg",
        "assets/image/img3.jpg"
       
    ]
    
    // capture our random number shown at the start of the game, between 19 - 120.
    //the math here is: Math.floor(Math.random() * (max - min)) + min

    generatedNumber = Math.floor(Math.random() * 101) + 19;
    
    // console.log(generatedNumber);
    
    //this is the element/area that displays the choosen number on the page
    //$("#random-result").html('Choosen Number: ' + generatedNumber);
       
    $("#random-result").html(generatedNumber);

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
        crystal.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover",
            "width": "250px",
            "height": "225px",
            "align-content": "center"

        });
        
        $(".crystals").append(crystal);

    }

    $("#previous").html("Your Total: " + previous);
}

    resetAndStart ();

    //this allow us to click on each crystal 
    //event Delegation
    
    $(document).on('click', ".crystal", function() {

    // console.log($(this));

    //to get the value of each crystal that we click
    
    var number = parseInt($(this).attr('num-value'));

    // console.log($(this).attr('num-value'));
        
    previous += number;

    $("#previous").html("Your Total: " + previous);

    console.log(previous);
    
    if(previous > generatedNumber) {
        
        lost++

        $("#lost-count").html("Lost: " + lost);
        
        previous = 0;

        resetAndStart();

        // console.log("You Lost! ");
    }
    else if(previous === generatedNumber) {
        
        win++;
        
        $("#win-count").html("Win: " + win);
            
        previous = 0;


        resetAndStart();
      
    }
      

});
