let doorImage1 = document.getElementById('door1'); // element 'door1' (closed door img) into a var called doorImage1
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg" // img link of the robot into a var
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg"
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg"
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg"

let numClosedDoors = 3; // closed doors initial statement

let openDoor1;
let openDoor2;
let openDoor3;

let currentlyPlaying = true;

let startButton = document.getElementById('start');


let randomChoreDoorGenerator = () => {

  let choreDoor = Math.floor(Math.random() * numClosedDoors);

  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
};

doorImage1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)){  // condition to determine if isCLicked function has NOT happened YET for this particular image
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

startButton.onclick= () => {
  if(!currentlyPlaying){ // condition to make not possible to reset the game mid-round (possible reset not during the game, only when it's over!)
    startRound();
  }
};
// function to reset all the values for a new round


let startRound = () => {

  door1.src = closedDoorPath; // element from ID img in HTML
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;

  numClosedDoors = 3;

  currentlyPlaying = true;

  startButton.innerHTML = 'Good luck!';

  randomChoreDoorGenerator();

};
// reset function called on start button


let gameOver = (status) => {
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?'; // to change the start button status
  } else {
    startButton.innerHTML = 'Game Over! Play again?';
  }
  currentlyPlaying = false; // to make sure that additional doors can't be clicked after the ChoreBot door is clicked
};


let playDoor = (door) => {
  numClosedDoors--; // function to decrease the initial doors closed statement at each click on at any door

  if(numClosedDoors === 0){ // statement to check if the game winning condition has been reached
    gameOver('win');
  } else if (isBot(door)) { // function with an argument in a else if condition
    gameOver();
  }
};

let isBot = (door) => {
  if(door.src === botDoorPath){
    return true;
  } else {
    return false;
  }
};
// function to check if a door has the game-ending ChoreBot

let isClicked = (door) => {
  if(door.src === closedDoorPath){
    return false; // not clicked yet door
  } else {
    return true; // already clicked door
  }
};

startRound();
