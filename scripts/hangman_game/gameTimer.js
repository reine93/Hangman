class GameTimer {
    constructor() {
      this.startTime = 0;
      this.updatedTimer = null;
      this.elapsedTime = 0;
      this.timeInSec = 0;
    }
  
    startTicking() {
      this.startTime = Date.now();
      this.updatedTimer = setInterval(() => this.tickTock(), 1);
    }
  
    stopTicking() {
      clearInterval(this.updatedTimer);
    }
  
    tickTock() {
      const currentTime = Date.now();
      this.elapsedTime = currentTime - this.startTime;
      this.timeInSec = Math.round(this.elapsedTime / 1000);
      userInterface.displayTime(this.timeInSec);
    }
  
  }
  




