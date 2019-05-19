
    /**
     * 
     * watch this indian guy hes awesome
     * https://www.youtube.com/watch?v=W0e9Z5pmt-I 
     * 
     */
     
    var canWidth = window.innerWidth;
    var canHeight = window.innerHeight;
    var x = 0;
    var y = 330; // define the pos  the animation to draw on canvas 
    // this is the location of the sprite on the canvas
    var scrX;
    var scrY;
    var speed = 5;
    //this is the sizeof the sprite sheet which is sliced by frameCol and frameRow
    var sheetWidth = 864;
    var sheetHeight = 280;
    //this is the number of frame contained in the sprite sheet
    var frameCol = 8;
    var frameRow = 2;
    // this is where the frame gets slice   
    var width = sheetWidth / frameCol;
    var height = sheetHeight / frameRow;
    // this is the current frame location on the sprite sheet
    var currentFrame = 0;
    // we create a character class that inherits from Image class
    // this is so that we can store image on a variable
    var character = new Image();
    character.src = "character.png";
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
     
      scrY = 0;

      

    }
    // this function handles the graphics
    //drawImage is user define function
    // we actually used ctx.drawImage to draw on the screen
    var ofset = 5;
    
    function drawImage(){
      ctx.clearRect(x ,y,width,height);
      updateFrame();
      //
      
      ctx.drawImage(character, scrX, scrY, width, height, x , y, width, height );
      
      
    }
    // this weird function is created and called on itself
    //with interval of 100 millisecs
    setInterval(function(){
      
      drawImage();
      
    }, 100);

    



    //these are movement function
    /*i copied and paste this one from the old code


    */

    function moveup() {
      //ctx.clearRect(x,y,width,height);
   
      y -= speed; 
    }

    function movedown() {
      //ctx.clearRect(x,y,width,height);
      y += speed; 
    }

    function moveleft() {
      //ctx.clearRect(x,y,width,height);
      x -= speed; 
    }

    function moveright() {
      //ctx.clearRect(x,y,width,height);
      x += speed; 
      console.log("x ", x);
     
    }

/**
* these are the controlls for keyboard input
* we are using events to controller the box
*yup i copied and paste this one
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