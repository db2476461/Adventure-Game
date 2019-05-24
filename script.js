/**
 * this function creates the background of the game 
 * the background picture is controlled by css currently
 */
var myGameArea = {
    canvas : document.createElement("canvas"),
    /**
     * start:function is the function that created itself with in the function 
     *  the : is used to inherit members from a function similar to c++ syntax its more like aggregation
     * Aggregation occurs when a class contains an instance of another class. in this case a function with a function
     */
    start : function() {
        /**
         * this.canvas.with = window.innerwith; creates the game area relative to the users screen 
         * special note: innerWidth is a DOM window property. The innerWidth property returns the width of a window's content area. 
         * special note: innerHeight is a DOM window property. The innerHeight property returns the height of a window's content area.
         */
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");
        /**
         * special note: insertBefore() is a DOM method. It inserts a node as a child, 
         * right before an existing child such that document.body.insertBefore(newItem, list.childNodes[0]);
         * 
         * Node Definition: an interface from which a number of DOM API object types inherit. 
         * It allows those types to be treated similarly; for example, inheriting the same set of methods, or being tested in the same way.
         */
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        /**
         * this updates the location of the object and the background by calling 
         * the gameupdate function
         * special note: setInterval() is a DOM method which takes two parameters such that myVar = setInterval("javascript function", milliseconds);
         * there are 1000 miliseconds in a second so 20 milliseconds would be 0.02 seconds
         */
        this.interval = setInterval(updateGameArea, 20);
    },
    /**
     * special note: clear() method, all movements of the component will leave a trail of where it was positioned in the last frame: 
     */
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


function startGame() {
    /**
     * special note: component() is a component object constructor, which lets you add components onto the gamearea.
     */
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGameArea.start();
}


/** 
 * this function draws the redbox onto the screen
*/
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y; 
    tick = 1;
    this.angle = 0;
    /**
     * weird ways of calling a function
     */
    //this.rotate(x/20);
    this.update = function() {
        
        //special note: ctx is shorthand for the word "context". It is simply a variable.
        ctx = myGameArea.context;
        ctx.save();
        //set color
        ctx.fillStyle = color;
       // ctx.translate(this.x, this.y);
       //ctx.resetTransform();
    
      //  ctx.rotate( tick++ );
       
      //  ctx.fillRect( this.x +(this.width / -2), this.height / -2, this.width, this.height); 
    
      // console.log("x pos", this.x);
        //ex draw a rectangle
       // ctx.translate(this.x, this.y);
        //ctx.translate(110, tick++);
       
        ctx.fillRect(this.x, this.y, this.width, this.height);

        ctx.translate(this.x, this.y);
        ctx.restore(); 




       
    }
  //Math.PI 

    /**
     *  the commented lines are for controlling the movement speed of the character
     * with added velocity
     */
    //if (x > canvas.width) x = 0;
    //if(y > canvas.height) y  = 0;
    //this.newPos = function() {
    //this.x += this.speedX;
    //this.y += this.speedY;  
    //takeout the + on += to remove gravity
    // } 

    /**
     * this line gives the box a constant speed without the velocity
     */

    this.newPos = function() {
       // if(this.y > 485)
       // {
       //     this.speedY = 485;
       //     console.log("true");
       //     console.log("speedy", this.speedY)
      //  }
        this.x = this.speedX;
        this.y = this.speedY; 
         this.y = y++;
        if(this.y > 485)
        {
            this.y = 0;
            newPos;
        }

        console.log("window heigh", window.innerHeight);
        console.log("y pos", this.y)
     
        }
    }


/**
 * draws the object on the screen 
 */
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();    
    myGamePiece.update();
   
}
/**
 * start of movement function on all direction
 */
function moveup() {
   
    myGamePiece.speedY -= 5; 
}

function movedown() {
    myGamePiece.speedY += 5; 
}

function moveleft() {
    myGamePiece.speedX -= 5; 
}

function moveright() {
    myGamePiece.speedX += 5; 
}

/**
 * these are the controlls for keyboard input
 * we are using events to controller the box
 */
document.onkeydown = function (e) {
    switch (e.key) {
        case 'w':
          
            moveup();
            break;
        case 's':
            // down arrow
            movedown();
            break;
        case 'a':
            // left arrow
            moveleft();
            break;
        case 'd':
            moveright();
            break;
/**
 * these handle the capslock on 
 */
        case 'W':
          
            moveup();
            break;
        case 'S':
            // down arrow
            movedown();
            break;
        case 'A':
            // left arrow
            moveleft();
            break;
        case 'D':
            moveright();
        
    }
}
