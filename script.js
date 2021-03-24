/* Global Constants */
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

/* Global Variables */
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.2;
var guessCounter = 0;
var numMistakes = 0;
var clueHoldTime = 1000;
var time;
var seconds = 0;

function genPattern(){
  for (let i = 0; i< 8; i++){
    pattern[i] = Math.floor(Math.random() * 5) + 1;
  }
}

function startGame(){
  //initalize game variables
  genPattern();
  progress = 0;
  clueHoldTime = 1000;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  time = setInterval(timer, 1000);
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  end();
}

// Sound Synthesis Functions
const freqMap = {
  1: 293.6,
  2: 369.9,
  3: 415.3,
  4: 440,
  5: 493.8
}
const fM2 = {
  1: 246.9,
  2: 293.6,
  3: 329.6,
  4: 369.9,
  5: 415.3
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  d.frequency.value = fM2[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  f.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    d.frequency.value = fM2[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    f.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    f.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  clueHoldTime -= 95;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function timer(){
  var ctime = 10 - seconds;
  seconds++;
  document.getElementById("timer").innerHTML = ctime + " s";
  if(ctime == 0){
    end();
    loseGame();
  }
}

function end(){
  clearInterval(time);
  seconds = 0;
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1) {
        winGame();
        end();
      }else{
        //Add next segment
        progress++;
        end();
        playClueSequence();
        time = setInterval(timer, 1000);
      }
    }else guessCounter++;
  }else if(numMistakes < 2){
    numMistakes ++;
    end();
    if(numMistakes == 2){
      alert("Oops! You have " + (3 - numMistakes) + " try left! Let's hear the clue again");
    } else {
      alert("Oops! You have " + (3 - numMistakes) + " tries left! Let's hear the clue again");
    }
    playClueSequence();
    time = setInterval(timer, 1000);
  }else {
    loseGame();
    end();
  }
}

function loseGame(){
  numMistakes = 0;
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var d = context.createOscillator()
var g = context.createGain()
var f = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
f.connect(context.destination)
f.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
d.connect(f)
o.start(0)
d.start(0)
document.getElementById("timer").innerHTML = "0 s";