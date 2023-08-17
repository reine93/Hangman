class GameTimer {
    constructor() {
      this.startTime; // ovo samo vrati undefined
      this.updatedTimer; // ovo bi mogla biti privatna varijabla
      this.elapsedTime = 0;
      this.timeInSec = 0;
    }
  //defines start time and initializes tickTock() every sec
    startTicking() {
      this.startTime = Date.now();
      this.updatedTimer = setInterval(() => this.tickTock(), 1); // 1 milisekunda je jako često
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
      userInterface.displayTime(this.timeInSec); // update UIa je generalno sporo/skupo - bilo bi dobro napraviti update samo ako se vrijednost promijenila
    }
  
  }
  




