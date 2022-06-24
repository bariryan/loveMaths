document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button"); 
    for (let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type")=== "submit"){
               alert("You clicked Submit!");
            } else{
               let gameType = this.getAttribute("data-type");
               alert(`you clicked ${gameType}`);
            }
        })
    }
})

//wait for the DOM to load before running the game
//get the button elements and event listeners to them

document.addEventListener('DOMContentLoaded', function(){
    let buttons = this.doctype.getElementsByTagName('button');
    for(let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type')=== 'submit'){
                alert('you clicked submit');
            }else{
                let gameType = this.getAttribute('data-type');
                alert(`you clicked ${gameType}`);
            }
        })
    }
})
/**
 * the main game LOOP, 
 * called when the script is first loaded
 */
function runGame(){
    // creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25)+ 1;
    let num2 = Math.floor(Math.random()*25)+ 1;

}

function checkAnswer(){

}

function calculateCorrectAnser(){

}

function incrementScore(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}
