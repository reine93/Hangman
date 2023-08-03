class HangmanDraw {//uses HTML5 Canvas API to draw hangman
    constructor(canvas) {
        this.canvas = canvas; 
        this.ctx = canvas.getContext("2d");
        this.hangmanParts = [ //array of hangman parts (stick figure)
            //head
            () => {
                this.ctx.beginPath();
                this.ctx.arc(200, 100, 30, 0, Math.PI * 2);
                this.ctx.stroke();
            },
            //body
            () => {
                this.ctx.moveTo(200, 130);
                this.ctx.lineTo(200, 250);
                this.ctx.stroke();
            },
            //left arm
            () => {
                this.ctx.moveTo(200, 150);
                this.ctx.lineTo(160, 200);
                this.ctx.stroke();
            },
            //right arm
            () => {
                this.ctx.moveTo(200, 150);
                this.ctx.lineTo(240, 200);
                this.ctx.stroke();
            },
            //left leg
            () => {
                this.ctx.moveTo(200, 250);
                this.ctx.lineTo(180, 300);
                this.ctx.stroke();
            },
            //right leg
            () => {
                this.ctx.moveTo(200, 250);
                this.ctx.lineTo(220, 300);
                this.ctx.stroke();
            }
        ];
    }
    //clears canvas
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    //draw gallows 
    drawGallows() {
        this.ctx.beginPath();
        this.ctx.moveTo(350, 350);
        this.ctx.lineTo(50, 350);
        this.ctx.lineTo(50, 50);
        this.ctx.lineTo(197, 50);
        this.ctx.lineTo(197, 67);
        this.ctx.stroke();
    }
    //remove hangman from gallows 
    freeHangman() {
        this.clearCanvas();
        this.drawGallows();
    }
    //depending on num of wrong guesses, hangman parts get drawn
    drawHangman(wrongGuess) {
        switch (wrongGuess) {
            case 1:
                //draws head
                this.hangmanParts[0]();
                break;
            case 2:
                //draws body
                this.hangmanParts[1]();
                break;
            case 3:
                //draws left arm
                this.hangmanParts[2]();
                break;
            case 4:
                //draws right arm
                this.hangmanParts[3]();
                break;
            case 5:
                //draws left leg
                this.hangmanParts[4]();
                break;
            case 6:
                //draws right leg
                this.hangmanParts[5]();
                break;
            default:
                break;
        }
    }
}