function createCanvas(){
var canWidth = window.innerWidth;
var canHeight = window.innerHeight;
//canvas gets access to the canvas id tag
// canvas height is stored in canvas
var canvas = document.getElementById('canvas');

canvas.height = canHeight;
canvas.width = canWidth;

// ctx is context which is used to draw image on the screen
// ctx needs to inherit the 2d from canvas class to used 
//drawImage method and to use SetInterval
var ctx = canvas.getContext('2d');
return ctx
}

function createGoblin(){
var x = 1180;
var y = 330; // define the pos  the animation to draw on canvas 
// this is the location of the sprite on the canvas
var scrX;
var scrY;
var speed = 5;
//this is the sizeof the sprite sheet which is sliced by frameCol and frameRow
var sheetWidth = 704;
var sheetHeight = 302;
//this is the number of frame contained in the sprite sheet
var frameCol = 11;
var frameRow = 5;
// this is where the frame gets slice   
var width = sheetWidth / frameCol;
var height = sheetHeight / frameRow;
// this is the current frame location on the sprite sheet
var currentFrame = 0;

// this happens in memory 
// we need to clear the canvas every 
//time we need to draw to prevent ghosting
function updateFrame(){
  //clearReact prevents ghosting
 
  //the next line moves the slice frame 
  currentFrame = ++currentFrame % frameCol; //loop around the frame
 
  scrX = currentFrame * width;
  //this takes which row to get animation from

  scrY = 3.2 * height;

  

}
// this function handles the graphics
//drawImage is user define function
// we actually used ctx.drawImage to draw on the screen
var ofset = 5;

function drawImage(){
  ctx.clearRect(x ,y,width,height);
  updateFrame();
  //
  if( x > 0 )
  {
    x -= 5;
  }
  

  ctx.drawImage(goblin, scrX, scrY, width, height, x , y, width, height );
  
}

// this weird function is created and called on itself
//with interval of 100 millisecs
setInterval(function(){
  
  drawImage();
  
}, 100);
}

function createCharacter(){
    var canvasWidth = 1400; 
    var canvasHeight = 350;

    var x = 0;
    var y = 275; // define the pos  the animation to draw on canvas 
    // this is the location of the sprite on the canvas
    var scrX;
    var scrY;
    var speed = 12;
    //this is the sizeof the sprite sheet which is sliced by frameCol and frameRow
    var sheetWidth = 864;
    var sheetHeight = 280;
    //this is the number of frame contained in the sprite sheet
    var frameCol = 8;
    var frameRow = 2;

    var trackRight = 0;
    var trackLeft = 1;

    // this is where the frame gets slice   
    var width = sheetWidth / frameCol;
    var height = sheetHeight / frameRow;
    // this is the current frame location on the sprite sheet
    var currentFrame = 0;

    // this happens in memory 
    // we need to clear the canvas every 
    //time we need to draw to prevent ghosting
    function updateFrame(){
      //the next line moves the slice frame 
      currentFrame = ++currentFrame % frameCol; //loop around the frame
      scrX = currentFrame * width;
      scrY = 0;
      //clearReact prevents ghosting
      ctx.clearRect(x, y, width, height);

      if(left && x>0){
        srcY = trackLeft * height; 
        x-=speed; 
      }
      if(right && x<canvasWidth-width){
        srcY = trackRight * height; 
        x+=speed; 
      }
    }
    // this function handles the graphics
    //drawImage is user define function
    // we actually used ctx.drawImage to draw on the screen
    var ofset = 5;
    
    function drawImage(){
      updateFrame();
      ctx.drawImage(character, scrX, scrY, width, height, x , y, width, height );
      
      
    }

    // function moveup() {
    //   y -= speed; 
    // }
    
    // function movedown() {
    //   y += speed; 
    // }
    
    function moveleft() {
      left = true; 
      right = false; 
    }
    
    function moveright() {
      left = false;
			right = true;
    }
    
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
          
      }}

  
      
   /* this weird function is created and called on itself
  with interval of 100 millisecs. Replaced with setInterval(drawImage,100);
  setInterval(function(){
      
  drawImage();
      
  }, 100);
  */
  setInterval(drawImage,100);   
}



/**Program starts here */
ctx = createCanvas()

// we create a character class that inherits from Image class
// this is so that we can store image on a variable
var goblin = new Image();
goblin.src = "goblinsword.png";
// call an instance of createGoblin
createGoblin();

// we create a character class that inherits from Image class
// this is so that we can store image on a variable
var character = new Image();
character.src = "character.png";
createCharacter();





