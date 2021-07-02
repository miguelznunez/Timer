var timeBegan = null; // did the clock start?
var timeStopped = null; // at what time was the timer stopped?
var stoppedDuration = 0; // how long was the timer stopped?
var startInterval = null; // this is needed to stop the startInterva() method
var flag = false; // to control the start/stop of the timer

const container = document.getElementsByClassName("container")[0];

container.addEventListener("click", () => {
  if(!flag){
    startTimer();
    flag = true;
  }
  else{
    stopTimer();
    flag = false;
  }
})

container.addEventListener("dblclick", () => {
  resetTimer();
})

startTimer = () => {
  if(timeBegan === null)
    timeBegan = new Date();

  if(timeStopped !== null)
    stoppedDuration += (new Date() - timeStopped);

  startInterval = setInterval(clockRunning, 10);
}

stopTimer = () => {
  timeStopped = new Date();
  clearInterval(startInterval);
}

clockRunning = () => {
  var currentTime = new Date();
  var timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);

  var minutes = timeElapsed.getUTCMinutes();
  var seconds = timeElapsed.getUTCSeconds();
  var milliseconds = timeElapsed.getUTCMilliseconds();

  milliseconds = Math.floor(milliseconds/10);

  document.getElementById("timer-display").innerHTML = 
  (minutes = minutes < 10 ? '0' + minutes:minutes) + ":"+
  (seconds = seconds < 10 ? '0' + seconds:seconds) + ":" +
  (milliseconds = milliseconds < 10 ? '0' + milliseconds:milliseconds);
}

resetTimer = () => {
  clearInterval(startInterval);
  timeBegan = null;
  timeStopped = null;
  stoppedDuration = 0;
  document.getElementById("timer-display").innerHTML = "00:00:00";
  flag = false;
}
