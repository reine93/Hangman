class GameTimer {
    constructor() {
      this.startTime = 0;
      this.updatedTimer = null;
      this.elapsedTime = 0;
      this.timeInSec = 0;
    }
  //defines time and sets interval
    startTicking() {
      this.startTime = Date.now();
      this.updatedTimer = setInterval(() => this.tickTock(), 1);
    }
  //stops (clears) interval
    stopTicking() {
      clearInterval(this.updatedTimer);
    }
  //called every second by startTicking(), defines elapsed time in ms and displays timeInSec
    tickTock() {
      const currentTime = Date.now();
      this.elapsedTime = currentTime - this.startTime;
      this.timeInSec = Math.round(this.elapsedTime / 1000);
      userInterface.displayTime(this.timeInSec);
    }
  
  }
  




