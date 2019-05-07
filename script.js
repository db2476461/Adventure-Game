//Import ctx which is what we use to draw things
var ctx = document.getElementById("ctx").getContext("2d"); 

//ex draw Hello at x=50 and y=50
//ctx.fillText('Hello',50,50);

//ex draw a rectangle
ctx.fillRect(50,50,100,100);

//ex clear part of a rectangle
//ctx.clearRect(75,75,100,100);