//Import ctx which is what we use to draw things
//var ctx = document.getElementById("ctx").getContext("2d"); 

//**********************************************************/
//This Section is dedicated to modifying settings
//*********************************************************/

//set font
//ctx.font = '30px Arial';

//set color
//ctx.fillStyle = 'red';

//set transparency where 0 = invisible, and 1 = visible
//ctx.globalAlpha = .5;

//**********************************************************/
//This Section is dedicated to drawing on screen
//*********************************************************/

//ex draw a rectangle
//ctx.fillRect(50,50,100,100);

//ex draw Hello at x=50 and y=50
//ctx.fillText('Hello',50,50);

//ex clear part of a rectangle
//ctx.clearRect(75,75,100,100);
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGameArea.start();
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y; 
    this.update = function() {
      ctx = myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
      this.x += this.speedX;
      this.y += this.speedY; 
    } 
  }


  function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();    
    myGamePiece.update();
}

function moveup() {
    myGamePiece.speedY -= 1; 
}

function movedown() {
    myGamePiece.speedY += 1; 
}

function moveleft() {
    myGamePiece.speedX -= 1; 
}

function moveright() {
    myGamePiece.speedX += 1; 
}

document.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowUp':
            console.log("arrow key up");
            moveup();
            break;
        case 'ArrowDown':
            // down arrow
            movedown();
            break;
        case 'ArrowLeft':
            // left arrow
            moveleft();
            break;
        case 'ArrowRight':
            moveright();
    }
}
