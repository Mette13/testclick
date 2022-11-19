
//Start
//start screen(div).

//Pressed
//see when the button is pressed, add random, animate and sound.
document.querySelector(".btn").addEventListener("click", function(){
    Move();
    Animate();
    Sound();
})

//Random
//button moves to a diffrent place on the screen.
function Move(){
    var moveTop = Math.floor(Math.random() *90)
    var moveLeft = Math.floor(Math.random() *90)
    document.querySelector(".btn").style.top = moveTop+"%";
    document.querySelector(".btn").style.left = moveLeft+"%";
}

//Animate
//animation when the button is clicked(class=pressed)
function Animate(){
    document.querySelector(".btn").classList.add("pressed")

    setTimeout(function(){
        document.querySelector(".btn").classList.remove("pressed");
    }, 200)
}

//Sound
//sound that the button makes when pressed.

function Sound(){
    
}