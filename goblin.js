var canWidth = window.innerWidth;
var canHeight = window.innerHeight;
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
// we create a character class that inherits from Image class
// this is so that we can store image on a variable
var goblin = new Image();
goblin.src = "goblinsword.png";
//canvas gets access to the canvas id tag

// canvas height is stored in canvas

var canvas = document.getElementById('canvas');


canvas.height = canHeight;
canvas.width = canWidth;
// ctx is context which is used to draw image on the screen
// ctx needs to inherit the 2d from canvas class to used 
//drawImage method and to use SetInterval
var ctx = canvas.getContext('2d');

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
  console.log("x" , x)
  
}
// this weird function is created and called on itself
//with interval of 100 millisecs
setInterval(function(){
  
  drawImage();
  
}, 100);