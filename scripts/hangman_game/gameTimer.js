class GameTimer {
    #updatedTimer;

    constructor() {
      this.startTime = 0;
      this.elapsedTime = 0;
      this.timeInSec = 0;
      this.oldTimeinSec = -1;
    }

  //defines start time and initializes tickTock() every sec
    startTicking() {
      this.startTime = Date.now();
      this.#updatedTimer = setInterval(() => this.tickTock(), 100);
    }
  //stops initializing tickTock()
    stopTicking() {
      clearInterval(this.#updatedTimer);
      return;
    }
  // calculates elapsed time in ms and displays timeInSec
    tickTock() {
      const currentTime = Date.now();
      this.elapsedTime = currentTime - this.startTime;
      this.timeInSec = Math.round(this.elapsedTime / 1000);

      if (this.timeInSec !== this.oldTimeinSec) {
        this.oldTimeinSec = this.timeInSec;
        userInterface.displayTime(this.timeInSec);
      }
    }
  
  }
  




