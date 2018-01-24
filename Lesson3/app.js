console.log("test");

var c = document.getElementById("myCanvas1");
var ctx = c.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle="cyan";
ctx.moveTo(150,20);
ctx.lineTo(100,270);
ctx.lineTo(200,270);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

ctx.beginPath();
ctx.arc(150,50,60,0,6.28);
ctx.closePath();

ctx.stroke();
ctx.fill();

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext('2d');

ctx2.fillRect(100,100,100,100);


