console.log("test");

var c = document.getElementById("myCanvas1");
var ctx = c.getContext('2d');

// var img = new Image();
// img.src = 'smiley.jpg';

// img.onload = function(){
// 	ctx.drawImage(img, 100,100, 150,150);
// }


var c2 = document.getElementById("scene");
var ctx2 = c2.getContext('2d');

ctx2.fillStyle = "cyan";
ctx2.fillRect(0,0,800,400);