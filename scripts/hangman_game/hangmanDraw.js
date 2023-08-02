class HangmanDraw {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.hangmanParts = [
            // Head
            () => {
                this.ctx.beginPath();
                this.ctx.arc(200, 100, 30, 0, Math.PI * 2);
                this.ctx.stroke();
            },
            // Body
            () => {
                this.ctx.moveTo(200, 130);
                this.ctx.lineTo(200, 250);
                this.ctx.stroke();
            },
            // Left arm
            () => {
                this.ctx.moveTo(200, 150);
                this.ctx.lineTo(160, 200);
                this.ctx.stroke();
            },
            // Right arm
            () => {
                this.ctx.moveTo(200, 150);
                this.ctx.lineTo(240, 200);
                this.ctx.stroke();
            },
            // Left leg
            () => {
                this.ctx.moveTo(200, 250);
                this.ctx.lineTo(180, 300);
                this.ctx.stroke();
            },
            // Right leg
            () => {
                this.ctx.moveTo(200, 250);
                this.ctx.lineTo(220, 300);
                this.ctx.stroke();
            }
        ];
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


    drawGallows() {
        this.ctx.beginPath();
        this.ctx.moveTo(350, 350);
        this.ctx.lineTo(50, 350);
        this.ctx.lineTo(50, 50);
        this.ctx.lineTo(197, 50);
        this.ctx.lineTo(197, 67);
        this.ctx.stroke();
    }

    freeHangman() {
        this.clearCanvas();
        this.drawGallows();
    }

    drawHangman(wrongGuess) {
        switch (wrongGuess) {
            case 1:
                // Draw the head
                this.hangmanParts[0]();
                break;
            case 2:
                // Draw the body
                this.hangmanParts[1]();
                break;
            case 3:
                // Draw the left arm
                this.hangmanParts[2]();
                break;
            case 4:
                // Draw the right arm
                this.hangmanParts[3]();
                break;
            case 5:
                // Draw the left leg
                this.hangmanParts[4]();
                break;
            case 6:
                // Draw the right leg
                this.hangmanParts[5]();
                break;
            default:
                break;
        }
    }
}