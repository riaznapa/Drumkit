
// Detecting Button Press

var drumClick = document.querySelectorAll(".drum");

for(var i = 0; i < drumClick.length; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    /*
    this.style.color = "#fff";  // "this" gives the identitiy of the click
    console.log(this.innerHTML);
    */
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}

// Detecting Keyboard press

document.addEventListener("keydown", function(event){

  makeSound(event.key);

  buttonAnimation(event.key);
});


// After detecting button click OR keypress the follwoing will happen

function makeSound(key){
  switch (key) {
    case "w":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
      break;

    case "a":
    var kickBass = new Audio("sounds/kick-bass.mp3");
    kickBass.play();
    break;

    case "s":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case "d":
    var tomOne = new Audio("sounds/tom-1.mp3");
    tomOne.play();
    break;

    case "j":
    var tomTwo = new Audio("sounds/tom-2.mp3");
    tomTwo.play();
    break;

    case "k":
    var tomThree = new Audio("sounds/tom-3.mp3");
    tomThree.play();
    break;

    case "l":
    var tomFour = new Audio("sounds/tom-4.mp3");
    tomFour.play();
    break;

    default: console.log();
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 200);

}
/*

// javascript Object //


function HouseKeeper(name, yearsOfExperience, language, hasLicence){
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.language = language;
    this.hasLicence = hasLicence;
    this.clean = function(){
      alert("Cleaning going on");
    };
}

// --- A constructor function helps to creat new object with inputs,
//      formally to say, to initialize object ---

var houseKeeper1 = new HouseKeeper("Sara", 3, ["English", "French"], true);
var houseKeeper2 = new HouseKeeper ("Jane", 12, ["Bangla", "German"], false);

console.log(houseKeeper2.name);
console.log(houseKeeper2.yearsOfExperience);
console.log(houseKeeper1.language);

*/
