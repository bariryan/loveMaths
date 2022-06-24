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

function runGame(){

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
