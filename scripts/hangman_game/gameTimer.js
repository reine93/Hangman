class GameTimer {
    constructor() {
      this.startTime;
      this.updatedTimer;
      this.elapsedTime = 0;
      this.timeInSec = 0;
    }
  //defines start time and initializes tickTock() every sec
    startTicking() {
      this.startTime = Date.now();
      this.updatedTimer = setInterval(() => this.tickTock(), 1);
    }
  //stops initializing tickTock()
    stopTicking() {
      clearInterval(this.updatedTimer);
      return;
    }
  // calculates elapsed time in ms and displays timeInSec
    tickTock() {
      const currentTime = Date.now();
      this.elapsedTime = currentTime - this.startTime;
      this.timeInSec = Math.round(this.elapsedTime / 1000);
      userInterface.displayTime(this.timeInSec);
    }
  
  }
  




